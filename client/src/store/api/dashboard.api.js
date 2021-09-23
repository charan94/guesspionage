import { apiCall, API_METHODS, BASE_API_URL } from "./api"


export const createGameAPI = (userId) => {
    const url = `${BASE_API_URL}/game/create/${userId}`;
    return apiCall({ url, method: API_METHODS.POST });
}

export const loadSettingsAPI = () => {
    const url = `${BASE_API_URL}/game/settings`;
    return apiCall({ url, method: API_METHODS.GET });
}