import express from 'express'
import controller from '../../controllers/users.controller'

const router = express.Router({ mergeParams: true })

router.get('/', controller.getAll)

export default router