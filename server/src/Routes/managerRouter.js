import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createManager, deleteManager, getAllManagers, updateManager } from '../Controllers/ManagerController.js'

const router = express.Router()

router.post('/', verifyToken, createManager)
router.put('/:id', verifyToken, updateManager)
router.delete('/:id', verifyToken, deleteManager)
router.get('/', verifyToken, getAllManagers)

export default router
