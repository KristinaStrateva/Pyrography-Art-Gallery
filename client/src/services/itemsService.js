import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data';

export const getAllItems = async () => {
    const homeDecorations = await request.get(`${baseUrl}/homeDecorations`);
    const giftSets = await request.get(`${baseUrl}/giftSets`);
    const customTextOnWood = await request.get(`${baseUrl}/customTextOnWood`);

    const allItems = {...homeDecorations, ...giftSets, ...customTextOnWood};

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

export const addItem = async (collectionName, itemData) => {
    const data = {
        ...itemData,
        price: Number(itemData.price),
        'purchasesAmount': 0,
        'likesAmount': 0,
    };

    const result = await request.post(`${baseUrl}/${collectionName}`, data);

    return result;
}

export const updateItem = async (collectionName, itemId, itemData) => {
    const data = {
        ...itemData,
        price: Number(itemData.price),
        'purchasesAmount': 0,
        'likesAmount': 0,
    };

    const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, data);

    return result;
}