import express from 'express'
import {
    fetchPettyCashLiquidation, 
    fetchPettyCashLiquidationById, 
    createPettyCashLiquidation, 
    updatePettyCashLiquidation,
    fetchPettyCashLiquidationDetailByLiquidationId,
    createPettyCashLiquidationDetail,
    updatePettyCashLiquidationDetail
} from '../controller/pettyCashLiquidationController.js'
import middleware from '../middleware/authMiddleware.js';

const router = express.Router()


router.get('/', middleware, fetchPettyCashLiquidation)
router.get('/:id', middleware, fetchPettyCashLiquidationById)
router.post('/', middleware, createPettyCashLiquidation)
router.put('/:id', middleware, updatePettyCashLiquidation)

//PettyCashLiquidationDetail Router
router.get('/detail/:id', middleware, fetchPettyCashLiquidationDetailByLiquidationId)
router.post('/detail', middleware, createPettyCashLiquidationDetail)
router.put('/detail/:id', middleware, updatePettyCashLiquidationDetail)

export default router