import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data';

export const getAllItems = async () => {
    const homeDecorations = await request.get(`${baseUrl}/home-decorations`);
    const giftSets = await request.get(`${baseUrl}/gift-sets`);
    const customTextOnWood = await request.get(`${baseUrl}/custom-items`);

    const allItems = [...homeDecorations, ...giftSets, ...customTextOnWood];

    return allItems;
};

export const getAllFromCollection = async (collectionName) => {
    const result = await request.get(`${baseUrl}/${collectionName}`);

    return result;
};

export const getItemById = async (collectionName, itemId) => {
    const result = await request.get(`${baseUrl}/${collectionName}/${itemId}`);

    return result;
};

export const getMyItems = async (userId) => {
    const result = (await getAllItems()).filter(item => item._ownerId === userId);

    return result;
}

export const addItem = async (collectionName, itemData) => {
    const result = await request.post(`${baseUrl}/${collectionName}`, itemData);

    return result;
}

export const updateItem = async (collectionName, itemId, itemData) => {
    const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, itemData);

    return result;
}

export const deleteItem = async (collectionName, itemId) => {
    await request.del(`${baseUrl}/${collectionName}/${itemId}`);
}