import express from 'express'

import { login } from '../../logic/auth.logic.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    res.send(await login(username, password))
})

export default router