import { createMessage, getMessage, updateMessageData } from '../data/message.data.js'
import { getProductById } from './product.logic.js'
import { getSubscribers } from './types.logic.js'

const createNewMessage = async (payload) => {
    let typeSubs = {}

    for (let i = 0; i < payload.types.length; i++) {
        typeSubs = await getSubscribers(payload.types[i])
    }

    for (let i = 0; i < typeSubs.subscribers.length; i++) {
        const body = {
            userId: typeSubs.subscribers[i],
            messageRead: false,
            text: 'A new product is available!',
            productId: payload._id
        }

        await createMessage(body)
    }
}

const getAllMessages = async (userId) => {
    const res = await getMessage(userId)
    for (let i = 0; i < res.length; i++) {
        let prodId = res[i].product
        res[i].product = await getProductById(prodId)
    }

    return res
}

const updateMessage = async (messages) => {
    for (let i = 0; i < messages.length; i++) {
        await updateMessageData(messages[i]._id)
    }
}

export {
    createNewMessage,
    getAllMessages,
    updateMessage
}