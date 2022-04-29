import express from 'express'

import { createUser, getUserByUsername } from '../../logic/user.logic.js'

const router = express.Router()

<<<<<<< HEAD
router.post('/', (req, res) => {
    const response = createUser(req.body)
    res.status(200).send(response)
=======
router.post('/', async (req, res) => {
    const response = await createUser(req.body)
    res.status(response.status).send(response)
>>>>>>> dev
})

router.get('/:username', (req, res) => {
    const response = getUserByUsername(req.params.username)
    res.send(response)
})

export default router