import { createOrder } from "../data/order.data.js";

const createNewOrder = async (body) => {
    const res = await createOrder(body)
    return res
}

export {
    createNewOrder
}