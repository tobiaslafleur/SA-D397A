import { checkForError } from './errorHandler.js'
import {
    createProductData,
    getProductsByNameData,
    getProductsByTypeData,
    getProductsByPriceData,
    getProductsByConditionData,
    getProductByIdData,
    getAllProductsData
} from '../data/product.data.js'
import { getTypeById, getTypeByName } from './types.logic.js'
import { createNewMessage } from './message.logic.js'


// Behöver egen errorhandling ig
const createProduct = async (body) => {
    const res = await createProductData(body)

    if(res._id) {
        await createNewMessage(res)
    }

    return checkForError(res)
}

const getProductsByName = (name) => {
    return getProductsByNameData(name)
}

const getProductsBytype = (type) => {
    return getProductsByTypeData(type)
}

const getProductsByPrice = (minPrice, maxPrice) => {
    return getProductsByPriceData(minPrice, maxPrice)
}

const getProductsByCondition = (condition) => {
    return getProductsByConditionData(condition)
}

const getProductById = async (id) => {
    return await getProductByIdData(id)
}

const getAllProducts = () => {
    return getAllProductsData()
}

const getProductsFilter = async (condition, type, maxPrice, minPrice) => {
    let products = await getAllProductsData()

    if(condition != null || condition != undefined) {
        products = products.filter(product => product.condition === condition)
    }

    if(type != null || type != undefined) {
        console.log(type)
        products = products.filter(product => product.types.includes(type))
    }

    if(maxPrice > 0) {
        products = products.filter(product => product.price <= maxPrice)
    }

    if(minPrice > 0) {
        products = products.filter(product => product.price >= minPrice)
    }

    return products
    
}

export {
    createProduct,
    getProductsByName,
    getProductsBytype,
    getProductsByPrice,
    getProductsByCondition,
    getProductById,
    getAllProducts,
    getProductsFilter
}