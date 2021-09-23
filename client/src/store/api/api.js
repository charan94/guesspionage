
export const BASE_API_URL = process.env.VUE_APP_API_URL || "http://localhost:8081/api";

export const apiCall = async ({
    url,
    method,
    body = null,
    headers = {
        'Content-Type': 'application/json'
    }
}) => {

    const config = {
        method,
        headers,
        body
    };

    const result = await fetch(url, config);
    return result.json();
}


export const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}