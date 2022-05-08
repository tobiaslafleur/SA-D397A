import mongoose from 'mongoose'

const { Schema } = mongoose

const orderSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    }
})

const model = mongoose.model('order', orderSchema)

export default model