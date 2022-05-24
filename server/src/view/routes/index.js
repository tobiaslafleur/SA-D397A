import express from 'express'
import user from './user.js'
import auth from './auth.js'
import types from './types.js'
import product from './product.js'
import order from './order.js'
import message from './message.js'

const router = express.Router()

router.use('/user', user) // localhost:3000/api/user/

router.use('/auth', auth) // localhost:3000/api/auth/

router.use('/types', types) // localhost:3000/api/types/

router.use('/product', product) // localhost:3000/api/product/

router.use('/order', order) // localhost:3000/api/order/

router.use('/message', message) // localhost:3000/api/message

export default router