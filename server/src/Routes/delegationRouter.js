import express from 'express'
import { createDelegation, getAllDelegations } from '../Controllers/DelegationController.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/', verifyToken, createDelegation)
router.get('/', verifyToken, getAllDelegations)

export default router
