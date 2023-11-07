const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAllItems = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
}