import messageModel from './schema/message.schema.js'

const createMessage = async (body) => {
    try {
        const message = messageModel({
            receiver: body.receiver,
            messageRead: body.messageRead,
            text: body.text,
            product: body.product
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