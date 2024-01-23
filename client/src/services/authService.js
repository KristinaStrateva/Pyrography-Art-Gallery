import * as request from '../lib/request';

const baseUrl = `${import.meta.env.VITE_BASE_URL}/users`;

export const login = (email, password) => {
    try {
        const result = request.post(`${baseUrl}/login`, {
            email,
            password,
        });
    
        return result;

    } catch (error) {
        throw error;
    }
};

export const register = (username, email, password) => {
    try {
        const result = request.post(`${baseUrl}/register`, {
            username,
            email,
            password,
        });
    
        return result;

    } catch (error) {
        throw error;
    }
};

export const logout = () => request.get(`${baseUrl}/logout`);