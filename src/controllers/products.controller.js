import Product from "../models/Product"
import paginated from "../helpers/paginated"

/**
 * Get List of Data
 * @route GET api/products
 */
const getAll = async (req, res) => {
   const { category } = req.query

   const getQuery = () => {
      return {
         ...(category && { category: category.split(',') })
      }
   }

   try {
      const data = await Product.find(getQuery()).populate('category')
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Get Single Data
 * @route GET api/products/:id
 */
const getOne = async (req, res) => {
   try {
      const data = await Product.findById(req.params.id).populate('category')
      if (!data) {
         return res.status(404).json({ message: 'Product not found!' })
      }
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Create New data
 * @route POST api/products
 */
const create = async (req, res) => {
   const { name, description, price, category } = req.body
   try {
      const data = await Product.create({ name, description, price, category })

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Update data
 * @route PUT api/products:id
 */
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

/**
 * Delete data
 * @route DELETE api/products/:id
 */
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
