import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

import { serverError, serverLog } from './utils/serverLog.js'

import { registerValidation } from './validations/auth.js'

import UserModel from './models/User.js'

import { DB_LOGIN, DB_PASSWORD, TOKEN_KEY } from './PASSWORDS.js' //You should create your file with datas

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.rouuumh.mongodb.net/roskadastr?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log('connected error to DB!!! Error: ', err))

const app = express()
const PORT = 4000

app.use(express.json())

//#region User
// Registration user (sign up)
app.post('/auth/reg', registerValidation, async (req, res) => {
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

    serverLog(`Успешно создан пользователь с логином ${user.login}`)

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
})

// user sign in

// user edit his profile

// user delete his profile

//#endregion

// Просмотр моих услуг
// Просмотр моей услуги
// Добавление услуги
// Редактировани услуги

// Просмотр типов услуг
// Просмотр типа услуги
//

// Просмотр всех новостей

// Просмотр всех вакансий

// Просмотр моих сообщений
// Написание моего сообщения

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server: http://localhost:' + PORT)
})
