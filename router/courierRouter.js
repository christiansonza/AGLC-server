import express from 'express'
import {getCourier, getCourierById, postCourier, updateCourier} from '../controller/courierController.js'
const router = express.Router()

router.get('/', getCourier)
router.get('/:id', getCourierById)
router.post('/', postCourier)
router.put('/:id', updateCourier)



export default router