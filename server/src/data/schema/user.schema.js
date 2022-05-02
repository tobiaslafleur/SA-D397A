import mongoose from 'mongoose'
import argon2 from 'argon2'

const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre("save", async function (next) {
    let user = this

    const hash = await argon2.hash(user.password)

    user.password = hash

    return next()
})

userSchema.methods.comparePassword = async function (candidate) {
    let user = this

    return await argon2.verify(user.password, candidate).catch(err => false)
}

const model = mongoose.model('user', userSchema)

export default model