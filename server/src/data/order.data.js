import orderModel from './schema/order.schema.js'

const createOrder = async (body) => {
    try {
        const check = await orderModel.find({ seller: body.seller, buyer: body.buyer, product: body.product })

        if (!check.length) {
            const order = new orderModel({
                seller: body.seller,
                buyer: body.buyer,
                product: body.product,
                status: 'Pending',
                orderDate: Date.now()
            })

            await order.save()
            return order
        }

        console.log('found order')
        return check
    } catch (error) {
        return error
    }
}

const updateOrderStatusData = async (userid, status) => {
    try {
        return await orderModel.findOneAndUpdate({ _id: userid }, { status })
    } catch (error) {
        return error
    }
}

const getOrdersForUserData = async (userid) => {
    try {
        return await orderModel.find({
            $or: [
                {
                    buyer: userid
                },
                {
                    seller: userid
                }
            ]
        })
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

// Hämtar orders i intervallet och sorterar, lägg till att endast accepted hämtas, lägg till user
const getOrdersDateRangeData = async (user, minDate, maxDate) => {
    try {
        return await orderModel.find({
            orderDate: { 
                $gte: minDate, 
                $lte: maxDate 
            },
            status: 'Approved',
            buyer: user
        })
        .sort({orderDate: 1})
    } catch {
        return error
    }
}

export {
    createOrder,
    getAllOrdersData,
    getOrdersForUserData,
    updateOrderStatusData,
    getOrdersDateRangeData
}