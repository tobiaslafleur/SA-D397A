import express from 'express'

import user from './user.js'
import auth from './auth.js'

const router = express.Router()

router.use('/user', user) // localhost:3000/api/user/

router.use('/auth', auth) // localhost:3000/api/auth/

export default router