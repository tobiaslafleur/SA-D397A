import express from 'express'
import { createNewMessage, getAllMessages } from '../../logic/message.logic.js'

const router = express.Router();

// Hämta sin inbox
router.get('/:userId', async (req, res) => {
    const response = await getAllMessages(req.params.userId)
    res.send(response)
})

// Posta till inbox
router.post('/', async (req, res) => {
    const response = await createNewMessage(req.body)
    res.send(response)
})

export default router