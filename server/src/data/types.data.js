import typesSchema from './schema/types.schema.js'
import types from './schema/types.schema.js'

const createType = async (body) => {
    try {
        const types = typesSchema({
            name: body.name
        })

        await types.save()
    } catch (error) {
        return error
    }
}

const newSub = async (body) => {
    try {
        const updatedList = await types.updateOne(
            {
                _id: body._id,
            },
            {
                $addToSet: {
                    subscribers: body.userId
                }
            }
        )

        return updatedList
    } catch (err) {
        return err
    }
}

const removeSub = async (body) => {
    try {
        const updatedList = await types.updateOne(
            {
                _id: body._id,
            },
            {
                $pull: {
                    subscribers: body.subscribers
                }
            }
        )

        return updatedList
    } catch (err) {
        return err
    }
}

const getAllTypesData = async () => {
    try {
        return typesSchema.find()
    } catch (error) {
        return error
    }
}

const getTypeByIdData = async (id) => {
    try {
        return typesSchema.findById(id)
    } catch (err) {
        return err
    }
}

const getTypeByNameData = async (name) => {
    try {
        return typesSchema.findOne({name: name})
    } catch (err) {
        return err
    }
}

const getSubscribersData = async (type) => {
    try {
        return typesSchema.findById(type)
    } catch (err) {
        return err
    } 
}

export {
    createType,
    newSub,
    removeSub,
    getAllTypesData,
    getTypeByIdData,
    getTypeByNameData,
    getSubscribersData,
}