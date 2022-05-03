import express from 'express'

import { createProduct,
    getProductsByName,
    getProductsBytype,
    getProductsByPrice,
    getProductsByCondition } from '../../logic/product.logic.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const response = await createProduct(req.body)
    res.status(response.status).send(response)
})

router.get('/name/:name', async (req, res) => {
    const response = await getProductsByName(req.params.name)
    res.send(response)
})

router.get('/type/:type', async (req, res) => {
    const response = await getProductsBytype(req.params.type)
    res.send(response)
})

router.get('/price/:min/:max', async (req, res) => {
    const response = await getProductsByPrice(req.params.minPrice, req.params.maxPrice)
    res.send(response)
})

router.get('/condition/:condition', async (req, res) => {
    const response = await getProductsByCondition(req.params.condition)
    res.send(response)
})

export default router