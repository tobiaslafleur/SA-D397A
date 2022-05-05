import express from 'express'

import { createNewType, newSubscriber, removeSubscriber } from '../../logic/types.logic.js' // logik import

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
    const response = await newSubscriber(req.body)
    res.send(response)

})

// Remove subscriber from specific type
router.delete('/:id', async (req, res) => {
    const response = await removeSubscriber(req.body)
    res.send(response)
})

export default router