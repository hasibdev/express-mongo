import { body } from 'express-validator'
import Category from '../models/Category'

export default function (method) {
   switch (method) {
      case 'create':
      case 'update':
         return [
            body('name').notEmpty().isLength({ max: 50 }),
            body('price').notEmpty().isFloat({ min: 0 }),
            body('category').custom(async val => {
               if (!await Category.exists({ _id: val })) {
                  throw new Error('Category Not Found!')
               }
               return true
            })
         ]
         break

      default:
         return []
         break
   }
}
