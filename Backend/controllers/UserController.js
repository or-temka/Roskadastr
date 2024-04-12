import { TOKEN_KEY } from '../PASSWORDS.js'

import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { serverError, serverLog } from '../utils/serverLog.js'
import UserModel from '../models/User.js'

export const reg = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // hashing password
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      login: req.body.login,
      passwordHash: hashedPassword,
      name: req.body.name,
      surname: req.body.surname,
      dateOfBirth: req.body.dateOfBirth,
      city: req.body.city,
      branch: req.body.branch,
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        _id: user._id,
      },
      TOKEN_KEY
    )

    res.json({ token: token })
  } catch (err) {
    serverError(err)
    if (err?.keyPattern?.login === 1) {
      return res.status(409).json({
        errorMsg: 'Логин уже занят',
      })
    }
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время регистрации',
    })
  }
}

export const login = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const user = await UserModel.findOne({ login: req.body.login })

    if (!user) {
      return res.status(404).json({
        errorMsg: 'Неверный логин или пароль',
      })
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    )

    if (!isValidPass) {
      return res.status(404).json({
        errorMsg: 'Неверный логин или пароль',
      })
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      TOKEN_KEY
    )

    res.json({ token: token })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Произошла ошибка входа в аккаунт',
    })
  }
}

export const getMeInfo = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)

    if (!user) {
      return res.status(404).json({
        errorMsg: 'Пользователь не найден',
      })
    }

    const { passwordHash, ...userData } = user._doc

    res.json(userData)
  } catch (error) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных о пользователе',
    })
  }
}

export const removeMyProfile = async (req, res) => {
  try {
    const userId = req.userId

    UserModel.findOneAndDelete({ _id: userId })
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            errorMsg: 'Профиль не найден',
          })
        }

        res.json({
          userRemoved: true,
        })
      })
      .catch((err) => {
        serverError(err)
        res.status(500).json({
          errorMsg: 'Не удалось удалить профиль',
        })
      })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка удаления профиля',
    })
  }
}

export const updateMyProfile = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
    const userId = req.userId

    // hashing password
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await UserModel.updateOne(
      { _id: userId },
      {
        login: req.body.login,
        passwordHash: hashedPassword,
        name: req.body.name,
        surname: req.body.surname,
        dateOfBirth: req.body.dateOfBirth,
        city: req.body.city,
        branch: req.body.branch,
      }
    )

    res.json({
      edited: true,
    })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Ошибка редактирования профиля',
    })
  }
}
