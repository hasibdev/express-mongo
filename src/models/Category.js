import { Schema, model } from 'mongoose'

const schema = new Schema({
   name: {
      type: String,
      required: true,
   },
   description: {
      type: String,
   },
}, {
   timestamps: true
})

export default model('Category', schema)
