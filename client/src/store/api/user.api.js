import { apiCall, API_METHODS, BASE_API_URL } from "./api"

export const createUserAPI = async (userName) => {
    const url = `${BASE_API_URL}/user/create`;
    return apiCall({ url, method: API_METHODS.POST, body: JSON.stringify({ userName }) });
}


export const checkUserAPI = async (userName) => {
    const url = `${BASE_API_URL}/user/check/${userName}`;
    return apiCall({ url, method: API_METHODS.GET });
}