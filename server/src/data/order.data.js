import orderModel from './schema/order.schema.js'

const createOrder = async (body) => {
    console.log(body)

    try {
        const order = new orderModel({
            seller: body.seller,
            buyer: body.buyer,
            product: body.product,
            status: 'Pending',
            orderDate: Date.now()
        })

        await order.save()
        return order

    } catch (error) {
        return error
    }
}

const getAllOrdersData = async () => {
    try {
        return await orderModel.find()
    } catch (error) {
        return error
    }
}

export {
    createOrder,
    getAllOrdersData,
}