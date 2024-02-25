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
        const result = await request.get(`${baseUrl}/${collectionName}/${itemId}/details`);

        return result;

    } catch (error) {
        throw error;
    }
};

export const getMyItems = async (accessToken) => {
    try {
        const result = await request.get(`${baseUrl}/my-items`, undefined, accessToken);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const addItem = async (itemData, accessToken) => {
    try {
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const updateItem = async (collectionName, itemId, itemData, accessToken) => {
    try {
        const result = await request.put(`${baseUrl}/${collectionName}/${itemId}/edit-item`, itemData, accessToken);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const deleteItem = async (collectionName, itemId, accessToken) => {
    try {
        await request.del(`${baseUrl}/${collectionName}/${itemId}`, undefined, accessToken);
        
    } catch (error) {
        throw error;
    }
}

export const likeItem = async (collectionName, itemId, accessToken) => {
    try {
        const result = await request.post(`${baseUrl}/${collectionName}/${itemId}/like`, undefined, accessToken);
    
        return result;

    } catch (error) {
        throw error;
    }
}