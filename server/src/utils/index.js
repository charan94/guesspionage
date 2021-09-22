export const generateResponse = (statusCode = 400, message = null, data = null) => {
    return {
        statusCode,
        body: JSON.stringify({
            message,
            data
        })
    }
}