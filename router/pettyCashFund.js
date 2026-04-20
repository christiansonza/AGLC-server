import express from 'express'
import {
    getPettyCashFund,
    getPettyCashFundById,
    createPettyCashFund,
    putPettyCashFund 
} from '../controller/pettyCashFundController.js'

const router = express.Router()

router.get('/', getPettyCashFund)
router.get('/:id', getPettyCashFundById)
router.post('/', createPettyCashFund)
router.put('/:id', putPettyCashFund)

export default router