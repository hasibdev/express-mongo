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
      required: false,
   },
   password: {
      type: String,
      required: true
   },
   guard: {
      type: String,
      default: 'admins'
   }
})

export default model('Admin', schema)
