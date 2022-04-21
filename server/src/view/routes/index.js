import express from 'express'

import user from './user.js'

const router = express.Router()

router.use('/user', user) // localhost:3000/api/user/

export default router