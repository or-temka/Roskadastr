import { DB_LOGIN, DB_PASSWORD, TOKEN_KEY } from './PASSWORDS.js' //You should create your file with datas

import express from 'express'
import mongoose from 'mongoose'

import { serverError, serverLog } from './utils/serverLog.js'
import { registerValidation } from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.rouuumh.mongodb.net/roskadastr?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => serverLog('connected to DB'))
  .catch((err) => serverError('connected error to DB!!! Error: ' + err))

const app = express()
const PORT = 4000

app.use(express.json())

//#region User
// Registration user (sign up)
app.post('/user/reg', registerValidation, UserController.reg)
// user sign in
app.post('/user/login', UserController.login)
// show user profile
app.get('/user/me', checkAuth, UserController.getMeInfo)

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
  serverLog('Server link: http://localhost:' + PORT)
})
