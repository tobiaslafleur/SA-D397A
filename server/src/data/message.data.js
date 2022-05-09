import messageModel from './schema/message.schema.js'

const createMessage = async (body) => {
    console.log("hejhej")
    try {
        const message = messageModel({
            receiver: body.userId,
            messageRead: body.messageRead,
            text: body.text,
            product: body.productId
        })

        await message.save()

        return message
    } catch (error) {
        return error
    }
}

const getMessage = async (userId) => {
    const messages = await messageModel.find({receiver: userId})

    return messages
}

export {
    createMessage,
    getMessage
}