import express from 'express'
import users from './api/users.route'

const router = express.Router()

router.use('/users', users)

export default router