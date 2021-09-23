import { apiCall, API_METHODS, BASE_API_URL } from "./api"


export const createGameAPI = (userId) => {
    const url = `${BASE_API_URL}/game/create/${userId}`;
    return apiCall({ url, method: API_METHODS.POST });
}

export const loadSettingsAPI = () => {
    const url = `${BASE_API_URL}/game/settings`;
    return apiCall({ url, method: API_METHODS.GET });
}

export const createQuestionAPI = (gameId, body) => {
    const url = `${BASE_API_URL}/question/create/${gameId}`;
    return apiCall({ url, method: API_METHODS.POST, body });
}

export const loadGameAPI = (gameId) => {
    const url = `${BASE_API_URL}/game/info/${gameId}`;
    return apiCall({ url, method: API_METHODS.GET });
}

export const updateGameStatusAPI = (gameId, status) => {
    const url = `${BASE_API_URL}/game/update/${gameId}`;
    return apiCall({ url, method: API_METHODS.POST, body: JSON.stringify({ status }) })
}