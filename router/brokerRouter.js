import express from 'express'
import {getBroker, getBrokerById, postBroker, updateBroker} from '../controller/brokerController.js'
import middleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', middleware, getBroker)
router.get('/:id', middleware, getBrokerById)
router.post('/', middleware, postBroker)
router.put('/:id', middleware, updateBroker)


export default router