import express from 'express'
import {getShipper, getShipperById, createShipper, updateShipper} from '../controller/shipperController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getShipper)
router.get('/:id', middleware, getShipperById)
router.post('/', middleware, createShipper)
router.put('/:id', middleware, updateShipper)

export default router