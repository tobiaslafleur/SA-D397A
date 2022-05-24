import mongoose from 'mongoose'

const { Schema } = mongoose

const typesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
})

const model = mongoose.model('types', typesSchema)

export default model