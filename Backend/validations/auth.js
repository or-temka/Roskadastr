import { body } from 'express-validator'

export const registerValidation = [
  body('login', 'Неверно заполненное поле').isLength({ min: 2, max: 16 }),
  body('password', 'Неверно заполненное поле').isLength({ min: 6, max: 50 }),
  body('name', 'Неверно заполненное поле').isLength({ min: 2, max: 30 }),
  body('surname', 'Неверно заполненное поле').isLength({ min: 2, max: 30 }),
  body('dateOfBirth', 'Неверно заполненное поле')
    .optional()
    .isLength({ min: 6, max: 10 }),
  body('city', 'Неверно заполненное поле').isLength({ min: 2, max: 50 }),
  body('branch', 'Неверно заполненное поле').isLength({ min: 2, max: 100 }),
]
