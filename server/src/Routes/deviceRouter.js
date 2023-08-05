import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createDevice, deleteDevice, getAllDevices, getOneDevice, updateDevice } from '../Controllers/DeviceController.js'

const router = express.Router()

router.get('/:id', verifyToken, getOneDevice)
router.get('/', verifyToken, getAllDevices)
router.post('/', verifyToken, createDevice)
router.put('/:id', verifyToken, updateDevice)
router.delete('/:id', verifyToken, deleteDevice)

export default router
