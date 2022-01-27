import Product from "../models/Product"
import paginated from "../helpers/paginated"

const getAll = async (req, res) => {
   try {
      const data = await Product.find().populate('category')
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const getOne = async (req, res) => {
   try {
      const data = await Product.findById(req.params.id)
      if (!data) {
         return res.status(404).json({ message: 'Product not found!' })
      }
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}
const create = async (req, res) => {
   const { name, description, price, category } = req.body
   try {
      const data = await Product.create({ name, description, price, category })

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const update = async (req, res) => {
   const { name, description, price, categoryId } = req.body
   const { id } = req.params
   try {
      const data = await Product.findByIdAndUpdate(id, { name, description, price, categoryId })

      if (!data) {
         return res.status(404).json({ message: 'Product not found!' })
      }

      res.json({ data: await Product.findById(id) })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const destroy = async (req, res) => {
   try {
      const data = await Product.findByIdAndDelete(req.params.id)

      if (!data) {
         return res.status(404).json({ message: 'Product not found!' })
      }

      res.json({ message: 'Deleted Successfully!' })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export default { getAll, getOne, create, update, destroy }
