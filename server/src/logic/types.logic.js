import { checkForError } from './errorHandler.js'
import { createType } from '../data/types.data.js'

const createNewType = async (body) => {
    const res = await createType(body)
    return res
}

// Oklart om korrekt --> https://kb.objectrocket.com/mongo-db/how-to-add-elements-into-an-array-in-mongodb-1195
const addSubscriber = async (newSub) => {
    const subscriber = findOne.user(newSub)

    const newType = typeModel(
        {"_id": "100"},
        {
            $push: {
                subscribers: {
                    $each: [subscriber],
                    $position: -1
                }
            }
        }
    )

    try {
        await newSub
    } catch (error) {
        
    }
}

export {
    createNewType,
    addSubscriber
}