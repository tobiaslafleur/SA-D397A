import mongoose from 'mongoose'

const { Schema } = mongoose

const typesSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  subscribers: {
    tags: [{
            type: String
        }]
    }
})

const model = mongoose.model('types', typesSchema)

export default model