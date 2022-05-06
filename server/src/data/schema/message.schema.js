import mongoose from 'mongoose'

const { Schema } = mongoose

const messageSchema = new Schema({
    receiver: {
        type: String,
        required: true
    },
    messageRead: {
        type: Boolean,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    product: {
        type: String, // Product _id
        required: true
    }
})

const model = mongoose.model('message', messageSchema)

export default model