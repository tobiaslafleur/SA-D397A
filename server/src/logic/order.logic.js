import { createOrder, getAllOrdersData, getOrdersForUserData, updateOrderStatusData, getOrdersDateRangeData } from "../data/order.data.js";
import { updateProductStatusData } from '../data/product.data.js'

const createNewOrder = async (body) => {
    const res = await createOrder(body)
    return res
}

const updateOrderStatus = async (userid, status, productid) => {
    await updateOrderStatusData(userid, status)

    if (status === 'Accepted') await updateProductStatusData(productid)
}

const getOrdersForUser = async (userid) => {
    return await getOrdersForUserData(userid)
}

const getAllOrders = async () => {
    return await getAllOrdersData()
}

const getOrdersDateRange = async (minDate, maxDate) => {
    return await getOrdersDateRangeData(minDate, maxDate)
}

export {
    createNewOrder,
    getAllOrders,
    getOrdersForUser,
    updateOrderStatus,
    getOrdersDateRange
}