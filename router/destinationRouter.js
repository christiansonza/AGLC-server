import express from 'express'
import {getDestination, getDestinationById, createDestination, updateDestination} from '../controller/destinationcontroller.js'
import middleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', middleware,  getDestination)
router.get('/:id', middleware, getDestinationById)
router.post('/', middleware, createDestination)
router.put('/:id', middleware, updateDestination)

export default router