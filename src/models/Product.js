import { Schema, model } from 'mongoose'

const schema = new Schema({
   name: {
      type: String,
      required: true,
   },
   description: {
      type: String,
   },
   price: {
      type: Number,
      required: true
   },
   category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category'
   }
}, {
   timestamps: true
})

export default model('Product', schema)
