import express from 'express'
import { createNewMessage } from '../../logic/message.logic'

const router = express.router();

// Hämta sin inbox
router.get(':username/', async (req, res) => {

})

// Posta till inbox
router.post(':username/', async (req, res) => {

})

export default router