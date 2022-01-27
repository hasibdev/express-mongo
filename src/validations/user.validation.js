import { body } from 'express-validator'
import User from '../models/User'

export default function (method) {
   switch (method) {
      case 'create':
         return [
            body('firstName').notEmpty().isAlpha().isLength({ max: 50 }),
            body('lastName').notEmpty().isAlpha().isLength({ max: 50 }),
            body('email').notEmpty().isEmail().custom(async (email) => {
               const user = await User.exists({ email })
               if (user) throw new Error('E-mail already in use')
               return true
            }),

            body('password').notEmpty().isLength({ min: 6, max: 30 }),
            body('confirmed_password').custom((value, { req }) => {
               if (value !== req.body.password) {
                  throw new Error('Password confirmation does not match!')
               }
               return true
            })
         ]
         break

      case 'update':
         return [
            body('firstName').notEmpty(),
            body('lastName').notEmpty(),
            body('email').notEmpty().isEmail(),
         ]
         break

      default:
         return []
         break
   }
}
