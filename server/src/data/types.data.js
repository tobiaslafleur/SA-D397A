import typesSchema from './schema/types.schema.js'

const createType = async (body) => {
    console.log(body.name)
    const types = typesSchema({
        name: body.name
    })

    try {
        await types.save()

        console.log(types)
    } catch (error) {
        return error
    }
}

export {
    createType
}