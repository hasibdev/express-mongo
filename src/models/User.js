import { Schema, model } from 'mongoose'

const schema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true
   },
   guard: {
      type: String,
      default: 'users'
   }
})

export default model('User', schema)
