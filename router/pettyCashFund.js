import express from 'express'
import {
    getPettyCashFund,
    getPettyCashFundById,
    createPettyCashFund,
    putPettyCashFund 
} from '../controller/pettyCashFundController.js'
import middleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', middleware, getPettyCashFund)
router.get('/:id', middleware, getPettyCashFundById)
router.post('/', middleware, createPettyCashFund)
router.put('/:id', middleware, putPettyCashFund)

export default router