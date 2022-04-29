import { checkForError } from './errorHandler.js'
import { createUserData, getUserByUsernameData } from '../data/user.data.js'

const createUser = async (body) => {
    const res = await createUserData(body)
    return checkForError(res)
}

const getUserByUsername = (username) => {
    return getUserByUsernameData(username)
}

export {
    createUser,
    getUserByUsername
}