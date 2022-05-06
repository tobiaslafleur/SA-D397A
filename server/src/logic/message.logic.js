import { createMessage } from '../data/message.data.js'

const createNewMessage = async (body) => {
    const res = await createMessage(body)
    return res
}

export {
    createNewMessage
}