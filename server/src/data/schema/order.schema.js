import mongoose from 'mongoose'

const { Schema } = mongoose

const orderSchema = new Schema({
    seller: {
        type: String, //username
        required: true
    },
    buyer: {
        type: String, //username
        required: true
    },
    product: {
        type: String,
        required: true //productname
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