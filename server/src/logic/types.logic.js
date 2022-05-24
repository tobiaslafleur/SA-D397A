import { getSubscribersData, createType, newSub, removeSub, getAllTypesData, getTypeByIdData, getTypeByNameData } from '../data/types.data.js'

const createNewType = async (body) => {
    const res = await createType(body)
    return res
}

const getSubscribers = async (type) => {
    const res = await getSubscribersData(type)
    return res
}

const newSubscriber = async (typeId, userId) => {
    const res = await newSub(typeId, userId)
    return res
}

const removeSubscriber = async (body) => {
    const res = await removeSub(body)
    return res
}

const getAllTypes = async () => {
    return await getAllTypesData()
}

const getTypeById = async (id) => {
    return await getTypeByIdData(id)
}

const getTypeByName = async (name) => {
    return await getTypeByNameData(name)
}

export {
    createNewType,
    newSubscriber,
    removeSubscriber,
    getAllTypes,
    getTypeById,
    getTypeByName,
    getSubscribers,
}