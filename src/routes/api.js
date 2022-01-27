import express from 'express'
import users from './api/users.route'
import categories from './api/categories.route'

const router = express.Router()

router.use('/users', users)
router.use('/categories', categories)

export default router
