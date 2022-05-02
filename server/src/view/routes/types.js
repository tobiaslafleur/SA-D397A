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

// Add subscriber to specific type
router.patch('/:id', async (req, res) => {
    res.send('Trying to add sub')
})

// Remove subscriber from specific type
router.patch('/:id', async (req, res) => {
    res.send('Trying to remve sub')
})

export default router