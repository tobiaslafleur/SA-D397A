import { createMessage, getMessage } from '../data/message.data.js'

const createNewMessage = async (body) => {
    const res = await createMessage(body)
    return res
}

const getAllMessages = async (userId) => {
    const res = await getMessage(userId)
    return res
}

export {
    createNewMessage,
    getAllMessages
}