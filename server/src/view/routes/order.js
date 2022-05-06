import express from 'express'
import { createNewOrder } from '../../logic/order.logic.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const response = await createNewOrder(req.body)
    res.send(response)
})

export default router