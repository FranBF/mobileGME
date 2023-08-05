import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createEntry, deleteEntry, getAllEntries, getEntry, updateEntry } from '../Controllers/EntryController.js'

const router = express.Router()

router.post('/', verifyToken, createEntry)
router.put('/:id', verifyToken, updateEntry)
router.delete('/:id', verifyToken, deleteEntry)
router.get('/:id', verifyToken, getEntry)
router.get('/', verifyToken, getAllEntries)

export default router
