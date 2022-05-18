import express from 'express'
import { createNewOrder, getAllOrders, getOrdersForUser, updateOrderStatus, getOrdersDateRange } from '../../logic/order.logic.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const response = await createNewOrder(req.body)
    res.send(response)
})

router.put('/:userid', async (req, res) => {
    const response = await updateOrderStatus(req.params.userid, req.body.status, req.body.productid)
    console.log(req.body)
    res.send(response)
})

router.get('/user/:userid', async (req, res) => {
    const response = await getOrdersForUser(req.params.userid)
    res.send(response)
})

router.get('/', async (req, res) => {
    const response = await getAllOrders()
    res.send(response)
})

router.get('/date/:user/:mindate/:maxdate', async (req, res) => {
    const response = await getOrdersDateRange(req.params.user, req.params.mindate ,req.params.maxdate)
    res.send(response)
})

export default router