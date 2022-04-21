import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes/index.js'

const app = express()
const port = 3000

const start = () => {
    app.use(express.json())
    app.use(cors())

    app.use('/api', routes)

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

    mongoose.connect('mongodb+srv://da397a:MAU123456@cluster0.rp7ru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
        console.log('Connected to mongo')
    })
}

start()