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

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}
const create = async (req, res) => {
   try {
      const data = await User.create(req.body)

      res.json({ data })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export default { getAll, getOne, create }
