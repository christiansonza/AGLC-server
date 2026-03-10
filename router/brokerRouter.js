import express from 'express'
import {getBroker, getBrokerById, postBroker, updateBroker} from '../controller/brokerController.js'

const router = express.Router()

router.get('/', getBroker)
router.get('/:id', getBrokerById)
router.post('/', postBroker)
router.put('/:id', updateBroker)


export default router