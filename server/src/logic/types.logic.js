import { checkForError } from './errorHandler.js'
import { createType } from '../data/types.data.js'

const createNewType = async (body) => {
    const res = await createType(body)
    return res
}

export {
    createNewType
}