import { createType, newSub, removeSub, getAllTypesData } from '../data/types.data.js'

const createNewType = async (body) => {
    const res = await createType(body)
    return res
}

const newSubscriber = async (body) => {
    const res = await newSub(body)
    return res
}

const removeSubscriber = async (body) => {
    const res = await removeSub(body)
    return res
}

const getAllTypes = async () => {
    return await getAllTypesData()
}

export {
    createNewType,
    newSubscriber,
    removeSubscriber,
    getAllTypes
}