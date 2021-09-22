import { apiCall, API_METHODS, BASE_API_URL } from "./api"

export const createUserAPI = async (user) => {
    const url = `${BASE_API_URL}/user/create`;
    return apiCall(url, API_METHODS.POST, user);
}