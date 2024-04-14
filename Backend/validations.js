import { body } from 'express-validator'

export const registerValidation = [
  body('login', 'Логин должен содержать от 2 до 16 символов')
    .isLength({
      min: 2,
      max: 16,
    })
    .isString(),
  body('password', 'Пароль должен содержать от 6 до 50 символов')
    .isLength({
      min: 6,
      max: 50,
    })
    .isString(),
  body('name', 'Имя должно содержать от 2 до 30 символов').isLength({
    min: 2,
    max: 30,
  }),
  body('surname', 'Фамилия должна содержать от 2 до 30 символов')
    .isLength({
      min: 2,
      max: 30,
    })
    .isString(),
  body('dateOfBirth', 'Дата рождения должна содержать от 6 до 10 символов')
    .optional()
    .isLength({ min: 6, max: 10 }),
  body('city', 'Название города должно содержать от 2 до 50 символов')
    .isLength({ min: 2, max: 50 })
    .isString(),
  body('branch', 'Название филиала должно содержать от 2 до 100 символов')
    .isLength({ min: 2, max: 100 })
    .isString(),
]

export const loginValidation = [
  body('login', 'Логин должен содержать от 2 до 16 символов')
    .isLength({
      min: 2,
      max: 16,
    })
    .isString(),
  body('password', 'Пароль должен содержать от 6 до 50 символов')
    .isLength({
      min: 6,
      max: 50,
    })
    .isString(),
]

export const updateProfileValidation = [
  body('login', 'Логин должен содержать от 2 до 16 символов')
    .isLength({
      min: 2,
      max: 16,
    })
    .isString(),
  body('password', 'Пароль должен содержать от 6 до 50 символов')
    .isLength({
      min: 6,
      max: 50,
    })
    .isString(),
  body('oldPassword', 'Пароль должен содержать от 6 до 50 символов')
    .isLength({
      min: 6,
      max: 50,
    })
    .isString(),
  body('name', 'Имя должно содержать от 2 до 30 символов').isLength({
    min: 2,
    max: 30,
  }),
  body('surname', 'Фамилия должна содержать от 2 до 30 символов')
    .isLength({
      min: 2,
      max: 30,
    })
    .isString(),
  body('dateOfBirth', 'Дата рождения должна содержать от 6 до 10 символов')
    .optional()
    .isLength({ min: 6, max: 10 }),
  body('city', 'Название города должно содержать от 2 до 50 символов')
    .isLength({ min: 2, max: 50 })
    .isString(),
  body('branch', 'Название филиала должно содержать от 2 до 100 символов')
    .isLength({ min: 2, max: 100 })
    .isString(),
]

export const createServiceValidation = [
  body('name', 'Название должно содержать от 2 до 150 символов')
    .isLength({
      min: 2,
      max: 150,
    })
    .isString(),
  body('status', 'Статус должен содержать от 1 до 50 символов')
    .isLength({
      min: 1,
      max: 50,
    })
    .isString(),
  body('branchAddress', 'Адрес филиала должен содержать от 2 до 200 символов')
    .isLength({
      min: 2,
      max: 200,
    })
    .isString(),
  body('city', 'Название города должно содержать от 2 до 50 символов')
    .isLength({
      min: 2,
      max: 50,
    })
    .isString(),
  body('date', 'Дата назначения услуги должна содержать от 6 до 10 символов')
    .optional()
    .isLength({
      min: 6,
      max: 10,
    })
    .isString(),
  body(
    'cabinet',
    'Номер или название кабинета должно содержать от 1 до 10 символов'
  )
    .optional()
    .isLength({
      min: 1,
      max: 10,
    })
    .isString(),
  body('toHave', 'Что с собой взять должно содержать от 6 до 200 символов')
    .optional()
    .isLength({
      min: 2,
      max: 200,
    })
    .isString(),
  body(
    'howToGo',
    'Как добраться до места должно содержать от 6 до 300 символов'
  )
    .optional()
    .isLength({
      min: 2,
      max: 300,
    })
    .isString(),
]

export const sendMessageValidation = [
  body('iIsSender', 'Отправитель ли вы должно быть true или false').isBoolean(),
  body('messageText', 'Сообщение должно содержать от 1 до 1000 символов')
    .isLength({ min: 1, max: 1000 })
    .isString(),
]
