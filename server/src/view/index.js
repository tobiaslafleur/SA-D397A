import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
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

    mongoose.connect(process.env.MONGO, () => {
        console.log('Connected to mongo')
    })
}

start()