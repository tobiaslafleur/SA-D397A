import userModel from './schema/user.schema.js'

const createUserData = async (body) => {
    const user = userModel({
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: body.dateOfBirth,
        email: body.email,
        address: body.address,
        username: body.username,
        password: body.password,
    })

    try {
        await user.save()

        console.log(user)
    } catch (error) {
        return error
    }
}

const getUserByUsernameData = async (username) => {
    const user = await userModel.findOne({ 'username': username })

    console.log(user)
}

export {
    createUserData,
    getUserByUsernameData
}