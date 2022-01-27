import { body } from 'express-validator'

export default function (method) {
   switch (method) {
      case 'create':
      case 'update':
         return [
            body('name').notEmpty().isLength({ max: 50 }),
         ]
         break

      default:
         return []
         break
   }
}
