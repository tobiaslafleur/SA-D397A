import express from 'express'

import user from './user.js'
import auth from './auth.js'
import types from './types.js'
import product from './product.js'

const router = express.Router()

router.use('/user', user) // localhost:3000/api/user/

router.use('/auth', auth) // localhost:3000/api/auth/
router.use('/types', types) // localhost:3000/api/types/

router.use('/product', product) // localhost:3000/api/product/

export default router