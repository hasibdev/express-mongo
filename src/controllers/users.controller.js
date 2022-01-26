import User from "../models/User"

const getAll = async (req, res) => {
   try {
      const data = await User.find()

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const getOne = async (req, res) => {
   try {
      const data = await User.findById(req.params.id)
      if (!data) {
         return res.status(404).json({ message: 'User not found!' })
      }
      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}
const create = async (req, res) => {
   const { firstName, lastName, email, password, phone } = req.body
   try {
      const data = await User.create({ firstName, lastName, email, password, phone })

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const update = async (req, res) => {
   const { firstName, lastName, email, phone } = req.body
   const { id } = req.params
   try {
      const data = await User.findByIdAndUpdate(id, { firstName, lastName, email, phone })

      if (!data) {
         return res.status(404).json({ message: 'User not found!' })
      }

      res.json({ data: await User.findById(id) })
   } catch (error) {
      res.status(500).json({ error })
   }
}

const destroy = async (req, res) => {
   try {
      await User.deleteOne({ _id: req.params.id })

      res.json({ message: 'Deleted Successfully!' })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export default { getAll, getOne, create, update, destroy }
