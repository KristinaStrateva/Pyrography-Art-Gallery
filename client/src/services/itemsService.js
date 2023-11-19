import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAllItems = async () => {
    const response = await request.get(baseUrl);
    const data = await response.json();

    const allItems = {...data.homeDecorations, ...data.giftSets, ...data.customTextOnWood};

    return allItems;
};

export const getAllFromCollection = async (collectionName) => {
    const response = await request.get(`${baseUrl}/${collectionName}`);
    const data = await response.json();

    return data;
};

export const getItemById = async (collectionName, itemId) => {
    const response = await request.get(`${baseUrl}/${collectionName}/${itemId}`);
    const data = await response.json();

    return data;
};

export const addItem = async (collectionName, itemData) => {
    const data = {
        ...itemData,
        price: Number(itemData.price),
        'purchasesAmount': 0,
        'likesAmount': 0
    };
    
    const response = await request.post(`${baseUrl}/${collectionName}`, data);

    const result = await response.json();

    return result;
}