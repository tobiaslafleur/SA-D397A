
import userModel from './schema/user.schema.js'

const createUserData = async (body) => {
    try {
        const user = userModel({
            firstName: body.firstName,
            lastName: body.lastName,
            dateOfBirth: body.dateOfBirth,
            email: body.email,
            address: body.address,
            username: body.username,
            password: body.password,
        })

        await user.save()

        return user
    } catch (error) {
        console.log(error)
        return error
    }
}

const getUserByUsernameData = async (username) => {
    const user = await userModel.findOne({ username })

    return user
}

export {
    createUserData,
    getUserByUsernameData
}