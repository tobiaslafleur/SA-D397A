import { createMessage, getMessage } from '../data/message.data.js'
import { getProductById } from './product.logic.js'

const createNewMessage = async (body) => {
    const res = await createMessage(body)
    return res
}

const getAllMessages = async (userId) => {
    const res = await getMessage(userId)
    for(let i = 0; i < res.length; i++) {
        let prodId = res[i].product
        res[i].product = await getProductById(prodId)
    }

    return res
}

export {
    createNewMessage,
    getAllMessages
}