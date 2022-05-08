import { createOrder, getAllOrdersData } from "../data/order.data.js";

const createNewOrder = async (body) => {
    const res = await createOrder(body)
    return res
}

const getAllOrders = async () => {
    return await getAllOrdersData()
}

export {
    createNewOrder,
    getAllOrders
}