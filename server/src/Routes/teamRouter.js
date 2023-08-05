import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createTeam, getAllTeams } from '../Controllers/TeamController.js'

const router = express.Router()

router.post('/', verifyToken, createTeam)
router.get('/', verifyToken, getAllTeams)

export default router
