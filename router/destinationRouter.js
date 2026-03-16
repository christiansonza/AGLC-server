import express from 'express'
import {getDestination, getDestinationById, createDestination, updateDestination} from '../controller/destinationcontroller.js'
const router = express.Router()

router.get('/', getDestination)
router.get('/:id', getDestinationById)
router.post('/', createDestination)
router.put('/:id', updateDestination)

export default router