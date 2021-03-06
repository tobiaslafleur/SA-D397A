import express from 'express'

import {
    createProduct,
    getProductsByName,
    getProductsBytype,
    getProductsByPrice,
    getProductsByCondition,
    getAllProducts,
    getProductsFilter
} from '../../logic/product.logic.js'

const router = express.Router()

// Add product for sale
router.post('/', async (req, res) => {
    console.log(req.body)
    const response = await createProduct(req.body)

    res.status(response.status).send(response)
})

// Search for products by name
router.get('/name/:name', async (req, res) => {
    const response = await getProductsByName(req.params.name)
    res.send(response)
})
// Search for products by type
router.get('/type/:type', async (req, res) => {
    const response = await getProductsBytype(req.params.type)
    res.send(response)
})

// Search for products by price range
router.get('/price/:min/:max', async (req, res) => {
    const response = await getProductsByPrice(req.params.min, req.params.max)
    res.send(response)
})

// Search for products by condition
router.get('/condition/:condition', async (req, res) => {
    const response = await getProductsByCondition(req.params.condition)
    res.send(response)
})

router.get('/', async (req, res) => {
    const response = await getAllProducts()
    res.send(response)
})

router.get('/filter', async (req, res) => {
    const response = await getProductsFilter(req.query.condition, req.query.type, req.query.maxPrice, req.query.minPrice)
    res.send(response)
})

export default router