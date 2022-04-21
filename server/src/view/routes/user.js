import express from 'express'

import { createUser, getUserByUsername } from '../../logic/user.logic.js'

const router = express.Router()

router.post('/', (req, res) => {
    const response = createUser(req.body)
    res.status(200).send(response)
})

router.get('/:username', (req, res) => {
    const response = getUserByUsername(req.params.username)
    res.send(response)
})

export default router