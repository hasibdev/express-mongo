import express from 'express'
import controller from '../../controllers/categories.controller'
import validation from '../../validations/category.validation'

const router = express.Router({ mergeParams: true })

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', validation('create'), controller.create)
router.put('/:id', validation('update'), controller.update)
router.delete('/:id', controller.destroy)

export default router
