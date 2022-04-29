<<<<<<< HEAD
import { createUserData, getUserByUsernameData } from '../data/user.data.js'

const createUser = async (body) => {
    const response = await createUserData(body)

    console.log(response)
    if (response instanceof Error) console.log('Hey, its an error')
=======
import { checkForError } from './errorHandler.js'
import { createUserData, getUserByUsernameData } from '../data/user.data.js'

const createUser = async (body) => {
    const res = await createUserData(body)
    return checkForError(res)
>>>>>>> dev
}

const getUserByUsername = (username) => {
    return getUserByUsernameData(username)
}

export {
    createUser,
    getUserByUsername
}