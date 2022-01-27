import Category from "../models/Category"
import paginated from "../helpers/paginated"
const { validationResult } = require('express-validator')

/**
 * Get List of Data
 * @route GET api/categories
 */
const getAll = async (req, res) => {
   const { limit, skip, meta } = await paginated(Category, req)

   try {
      const data = await Category.find().limit(limit).skip(skip)
      res.json({ data, meta })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Get single Data
 * @route GET api/categories/:id
 */
const getOne = async (req, res) => {
   try {
      const data = await Category.findById(req.params.id)
      if (!data) {
         return res.status(404).json({ message: 'Category not found!' })
      }
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Create new Data
 * @route POST api/categories
 */
const create = async (req, res) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
   }

   const { name, description } = req.body
   try {
      const data = await Category.create({ name, description })

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Update Data
 * @route PUT api/categories/:id
 */
const update = async (req, res) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
   }

   const { name, description } = req.body
   const { id } = req.params
   try {
      const data = await Category.findByIdAndUpdate(id, { name, description })

      if (!data) {
         return res.status(404).json({ message: 'Category not found!' })
      }

      res.json({ data: await Category.findById(id) })
   } catch (error) {
      res.status(500).json({ error })
   }
}

/**
 * Delete Data
 * @route DELETE api/categories/:id
 */
const destroy = async (req, res) => {
   try {
      const data = await Category.findByIdAndDelete(req.params.id)

      if (!data) {
         return res.status(404).json({ message: 'Category not found!' })
      }

      res.json({ message: 'Deleted Successfully!' })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export default { getAll, getOne, create, update, destroy }
