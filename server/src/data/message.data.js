import messageModel from './schema/message.schema.js'

const createMessage = async (body) => {
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

export {
    createMessage
}