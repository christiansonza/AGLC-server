import express from 'express'
import {getCourier, getCourierById, postCourier, updateCourier} from '../controller/courierController.js'
import middleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', middleware, getCourier)
router.get('/:id', middleware, getCourierById)
router.post('/', middleware, postCourier)
router.put('/:id', middleware, updateCourier)



export default router