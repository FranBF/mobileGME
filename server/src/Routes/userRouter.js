import express from 'express'
import { createUser, deleteUser, getCurrentUserInfo, login, updateUser } from '../Controllers/UserController.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/create-user', createUser)
router.post('/login', login)
router.put('/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getCurrentUserInfo)

export default router
