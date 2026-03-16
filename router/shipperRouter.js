import express from 'express'
import {getShipper, getShipperById, createShipper, updateShipper} from '../controller/shipperController.js'
const router = express.Router()

router.get('/', getShipper)
router.get('/:id', getShipperById)
router.post('/', createShipper)
router.put('/:id', updateShipper)

export default router