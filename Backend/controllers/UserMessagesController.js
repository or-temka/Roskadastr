import { validationResult } from 'express-validator'

import { serverError, serverLog } from '../utils/serverLog.js'
import UserModel from '../models/User.js'

export const sendMessage = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
  } catch (err) {
    serverError(err)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения',
    })
  }
}
