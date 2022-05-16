import express from 'express'

import { createNewType, newSubscriber, removeSubscriber, getAllTypes } from '../../logic/types.logic.js' // logik import

const router = express.Router()

// Add type
router.post('/', async (req, res) => {
    const response = await createNewType(req.body)
    res.send(response)
})

// Add subscriber to specific type
router.put('/:id', async (req, res) => {
    const response = await newSubscriber(req.params.id, req.body.userId)
    res.send(response)
})

// Remove subscriber from specific type
router.delete('/:id', async (req, res) => {
    const response = await removeSubscriber(req.body)
    res.send(response)
})

router.get('/', async (req, res) => {
    const response = await getAllTypes()
    res.send(response)
})

export default router