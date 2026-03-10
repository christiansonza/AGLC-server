import express from 'express'
import { getVessel,getVesselById, createVessel, updateVessel } from '../controller/vesselController.js'
const router = express.Router()

router.get('/', getVessel)
router.get('/:id', getVesselById)
router.post('/', createVessel)
router.put('/:id', updateVessel)


export default router