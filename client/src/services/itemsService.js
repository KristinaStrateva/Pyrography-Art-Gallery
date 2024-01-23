import * as request from '../lib/request';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/data`;

export const getAllItems = async () => {
    try {
        const homeDecorations = await request.get(`${baseUrl}/home-decorations`);
        const giftSets = await request.get(`${baseUrl}/gift-sets`);
        const customTextOnWood = await request.get(`${baseUrl}/custom-items`);
    
        const allItems = [...homeDecorations, ...giftSets, ...customTextOnWood];
    
        return allItems;

    } catch (error) {
        throw error;
    }
};

export const getAllFromCollection = async (collectionName) => {
    try {
        const result = await request.get(`${baseUrl}/${collectionName}`);
    
        return result;

    } catch (error) {
        throw error;
    }
};

export const getItemById = async (collectionName, itemId) => {
    try {
        const result = await request.get(`${baseUrl}/${collectionName}/${itemId}`);
    
        return result;

    } catch (error) {
        throw error;
    }
};

export const getMyItems = async (userId) => {
    try {
        const result = (await getAllItems()).filter(item => item._ownerId === userId);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const addItem = async (collectionName, itemData) => {
    try {
        const result = await request.post(`${baseUrl}/${collectionName}`, itemData);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const updateItem = async (collectionName, itemId, itemData) => {
    try {
        const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, itemData);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const deleteItem = async (collectionName, itemId) => {
    try {
        await request.del(`${baseUrl}/${collectionName}/${itemId}`);
        
    } catch (error) {
        throw error;
    }
}