import express from 'express'
import { createNewOrder, getAllOrders } from '../../logic/order.logic.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const response = await createNewOrder(req.body)
    res.send(response)
})

router.get('/', async (req, res) => {
    const response = await getAllOrders()
    res.send(response)
})

export default router