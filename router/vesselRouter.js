import express from 'express'
import { getVessel,getVesselById, createVessel, updateVessel } from '../controller/vesselController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getVessel)
router.get('/:id', middleware, getVesselById)
router.post('/', middleware, createVessel)
router.put('/:id', middleware, updateVessel)


export default router