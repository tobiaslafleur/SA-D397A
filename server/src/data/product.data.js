
import productModel from './schema/product.schema.js'

const createProductData = async (body) => {
    try {
        const product = productModel({
            name: body.name,
            type: body.type,
            price: body.price,
            manufactured: body.manufactured,
            color: body.color,
            condition: body.condition,
            status: body.status,
            seller: body.seller
        })

        await product.save()

        return product
    } catch (error) {
        console.log(error)
        return error
    }
}

const getProductsByNameData = async (name) => {
    const product = await productModel.find({ name })

    return product
}

const getProductsByTypeData = async (type) => {
    const product = await productModel.find({ type })

    return product
}

const getProductsByPriceData = async (maxPrice, minPrice) => {
    const product = await productModel.find({
        price: { $lte: maxPrice},
        price: { $gte: minPrice},
    })

    return product
}

const getProductsByConditionData = async (condition) => {
    const product = await productModel.find({ condition })

    return product
}

export {
    createProductData,
    getProductsByNameData,
    getProductsByTypeData,
    getProductsByPriceData,
    getProductsByConditionData
}