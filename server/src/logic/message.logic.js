import { createMessage, getMessage } from '../data/message.data.js'
import { getProductById } from './product.logic.js'
import { getSubscribers } from './types.logic.js'

const createNewMessage = async (payload) => {
    let typeSubs = {}

    //Hämta alla subscribers av tillagd typ
    for(let i = 0; i < payload.types.length; i++) {
        typeSubs = await getSubscribers(payload.types[i])
    }

    //Loopa igenom alla subscribers
    for(let i = 0; i < typeSubs.subscribers.length; i++) {

        //Skapa objekt med subscriber, messageRead, text samt produktid
        const body = {
            userId: typeSubs.subscribers[i],
            messageRead: false,
            text: 'A new product is available!',
            productId: payload._id
        }

        //Skapa meddelande
        await createMessage(body)
    }
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