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


// Behöver egen errorhandling ig
const createProduct = async (body) => {
    const res = await createProductData(body)
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

export {
    createProduct,
    getProductsByName,
    getProductsBytype,
    getProductsByPrice,
    getProductsByCondition,
    getProductById,
    getAllProducts
}