import orderModel from './schema/order.schema.js'

const createOrder = async (body) => {
    try {
        
        let dateTime = new Date();

        const order = new orderModel({
            seller: body.seller,
            buyer: body.buyer,
            product: body.product,
            status: "sold",
            orderDate: dateTime
        })



        await order.save()
    return order

    } catch (error) {
        return error
    }
}

export {
    createOrder
}