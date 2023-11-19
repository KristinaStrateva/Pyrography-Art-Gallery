import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAllItems = async () => {
    const result = await request.get(baseUrl);

    const allItems = {...result.homeDecorations, ...result.giftSets, ...result.customTextOnWood};

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
        'likesAmount': 0
    };

    const result = await request.post(`${baseUrl}/${collectionName}`, data);

    return result;
}