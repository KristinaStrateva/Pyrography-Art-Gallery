import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const allLikesForItem = async (itemId) => {
    try {
        const query = new URLSearchParams({
            where: `itemId="${itemId}"`,
        });
    
        const result = await request.get(`${baseUrl}?${query}`);
    
        return result;

    } catch (error) {
        throw error;
    }
}

export const likeItem = async (itemId) => {
    try {
        await request.post(baseUrl, {itemId});
        
    } catch (error) {
        throw error;
    }
}