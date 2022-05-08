import mongoose from 'mongoose'

const { Schema } = mongoose

const messageSchema = new Schema({
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'user',
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
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }
})

const model = mongoose.model('message', messageSchema)

export default model