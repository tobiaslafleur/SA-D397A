import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // --------- Type ska ändras? ---------
    type: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufactured: {
        type: Date,
    },
    color: {
        type: String,
    },
    condition: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    // ------ Ska seller vara något annat än String? ------
    seller: {
        type: String,
        required: true
    }
})

const model = mongoose.model('product', productSchema)

export default model