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
  body('dateOfBirth', 'Дат должена содержать от 6 до 10 символов')
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
