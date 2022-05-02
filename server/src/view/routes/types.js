import express from 'express'

import { createNewType } from '../../logic/types.logic.js' // logik import

const router = express.Router()

// Getting a specific Type
router.get('/', (req, res) => {
    res.send('Get one')
})

// Add type
router.post('/', async (req, res) => {
    const response = await createNewType(req.body)
    res.send(response)
})

export default router