import express from 'express'

import user from './user.js'
<<<<<<< Updated upstream
import auth from './auth.js'
=======
import types from './types.js'
>>>>>>> Stashed changes

const router = express.Router()

router.use('/user', user) // localhost:3000/api/user/

<<<<<<< Updated upstream
router.use('/auth', auth) // localhost:3000/api/auth/
=======
router.use('/types', types) // localhost:3000/api/types/
>>>>>>> Stashed changes

export default router