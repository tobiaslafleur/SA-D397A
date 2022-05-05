import typesSchema from './schema/types.schema.js'
import types from './schema/types.schema.js'

const createType = async (body) => {
    console.log(body.name)
    const types = typesSchema({
        name: body.name,
        subscribers: body.subscribers
    })

    try {
        await types.save()

        console.log(types)
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
                    subscribers: body.subscribers 
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

export {
    createType,
    newSub,
    removeSub
}