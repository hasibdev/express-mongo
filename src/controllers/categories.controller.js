import Category from "../models/Category"
import paginated from "../helpers/paginated"

const getAll = async (req, res) => {
   try {
      const data = await paginated(Category)
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

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
const create = async (req, res) => {
   const { name, description } = req.body
   try {
      const data = await Category.create({ name, description })

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const update = async (req, res) => {
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
