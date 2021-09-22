export const generateResponse = (statusCode = 400, data = null) => {
    return {
        statusCode,
        data
    }
}