import { validationResult } from 'express-validator'

import { serverError, serverLog } from '../utils/serverLog.js'
import UserModel from '../models/User.js'
import ServiceModel from '../models/Service.js'

export const getMyServices = async (req, res) => {
  try {
    const userId = req.userId
    const servicesId = await UserModel.findById(userId)
      .then((user) => {
        if (!user) {
          return serverError('Пользователь не найден')
        }

        return user.services
      })
      .catch((err) => {
        serverError(err)
        return res.status(500).json({
          errorMsg: 'Ошибка получения пользователя',
        })
      })

    const services = []

    const promises = servicesId.map(async (serviceId) => {
      const service = await ServiceModel.findById(serviceId)
      services.push(service)
    })

    Promise.all(promises).then(() => {
      res.json(services)
    })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных об услугах',
    })
  }
}

export const addMyService = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
    const userId = req.userId

    const doc = new ServiceModel({
      name: req.body.name,
      status: req.body.status,
      branchAddress: req.body.branchAddress,
      city: req.body.city,
      date: req.body.date,
      cabinet: req.body.cabinet,
      toHave: req.body.toHave,
      howToGo: req.body.howToGo,
    })

    const service = await doc.save()

    await UserModel.updateOne(
      { _id: userId },
      {
        // services: [...services, service._id],
        $push: { services: service._id },
      }
    )

    res.json({
      added: true,
    })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка при создании услуги',
    })
  }
}

export const getMyOneService = async (req, res) => {
  try {
    const serviceId = req.params.id
    const service = await ServiceModel.findById({ _id: serviceId })
    res.json(service)
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка при получении данных об услуге',
    })
  }
}

export const editMyService = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
    const serviceId = req.params.id

    await ServiceModel.updateOne(
      { _id: serviceId },
      {
        name: req.body.name,
        status: req.body.status,
        branchAddress: req.body.branchAddress,
        city: req.body.city,
        date: req.body.date,
        cabinet: req.body.cabinet,
        toHave: req.body.toHave,
        howToGo: req.body.howToGo,
      }
    )

    res.json({
      edited: true,
    })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка при редактировании данных об услуге',
    })
  }
}
