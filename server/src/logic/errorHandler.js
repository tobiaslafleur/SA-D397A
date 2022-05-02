const checkForError = (input) => {
    const res = { payload: input, status: 200 }

    // If the response is not an error return 200 status and the payload
    if (!input instanceof Error) {
        res.payload = input
        res.status = 200
    }

    // If the user tries to register an account with an email or username already in use
    if (input.code === 11000) {
        res.payload = 'Email or Username is already in use!'
        res.status = 400
    }

    return res
}

export {
    checkForError
}