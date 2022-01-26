import express from 'express'
import controller from '../../controllers/users.controller'

const router = express.Router({ mergeParams: true })

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)

export default router
