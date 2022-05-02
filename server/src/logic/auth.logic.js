import { getUserByUsernameData } from '../data/user.data.js'

async function login(username, candidate) {
    const user = await getUserByUsernameData(username)

    if (!user) {
        return { auth: false }
    }

    if (await user.comparePassword(candidate)) {
        return {
            user,
            auth: await user.comparePassword(candidate)
        }
    }

    return { auth: false }
}

export {
    login
}