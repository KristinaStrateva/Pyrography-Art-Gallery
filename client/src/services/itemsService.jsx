import * as request from '../lib/request';

const baseUrl = 'http://localhost:3500/data';
// const baseUrl = `${request.headers.referer || request.headers.referrer}/data`;

export const getLastThreeItems = async () => {
    try {
        const lastThreeItems = await request.get('http://localhost:3500');

        return lastThreeItems;

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