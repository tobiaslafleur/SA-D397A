
import productModel from './schema/product.schema.js'

const createProductData = async (body) => {
    try {
        const product = productModel({
            name: body.name,
            types: body.type,
            price: body.price,
            manufactured: body.manufactured,
            color: body.color,
            condition: body.condition,
            status: 'Available',
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
    const product = await productModel.find({
        name: {
            $regex: name,
            $options: "i"
        }
    })

    return product
}

const getProductsByTypeData = async (type) => {
    const product = await productModel.find({ type })

    return product
}

const getProductsByPriceData = async (minPrice, maxPrice) => {
    const product = await productModel.find({
        price: {
            $lte: maxPrice,
            $gte: minPrice
        }
    })

    return product
}

const getProductsByConditionData = async (condition) => {
    const product = await productModel.find({ condition })

    return product
}

const getAllProductsData = async () => {
    const product = await productModel.find()

    return product
}

const getProductByIdData = async (id) => {
    const product = await productModel.findOne({id})

    return product
}

const updateProductStatusData = async (productid) => {
    return await productModel.findOneAndUpdate({ _id: productid }, { status: 'Sold' })
}

export {
    createProductData,
    getProductsByNameData,
    getProductsByTypeData,
    getProductsByPriceData,
    getProductsByConditionData,
    getProductByIdData,
    getAllProductsData,
    updateProductStatusData,
    
}