import express from 'express'

import { createUser, getUserByUsername } from '../../logic/user.logic.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const response = await createUser(req.body)
    res.status(response.status).send(response)
})

router.get('/:username', (req, res) => {
    const response = getUserByUsername(req.params.username)
    res.send(response)
})

export default router