import { v4 as uuidv4 } from 'uuid'

import { validationResult } from 'express-validator'

import { serverError, serverLog } from '../utils/serverLog.js'
import UserModel from '../models/User.js'

export const sendMessage = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userId = req.userId

    const message = {
      id: uuidv4(),
      iIsSender: req.body.iIsSender,
      messageText: req.body.messageText,
    }

    await UserModel.updateOne(
      { _id: userId },
      {
        $push: { messages: message },
      }
    )

    res.json({
      sent: true,
      messageId: message.id,
    })
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения',
    })
  }
}

export const getMessages = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)
    res.json(user._doc.messages)
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время получения сообщений',
    })
  }
}
