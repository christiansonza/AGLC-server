import express from 'express'
import {
    getBranch, getBranchById, createBranch, updateBranch
} from '../controller/branchController.js'
import middleware from '../middleware/authMiddleware.js'

const router =  express.Router()

router.get('/', middleware, getBranch)
router.get('/:id', middleware, getBranchById)
router.post('/', middleware, createBranch)
router.put('/:id', middleware, updateBranch)

export default router