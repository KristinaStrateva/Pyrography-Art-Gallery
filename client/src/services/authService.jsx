import * as request from '../lib/request';

// const baseUrl = `http://localhost:3500/users`;
let baseUrl;

const mode = process.env.NODE_ENV;

if (mode === 'production') {
    baseUrl = 'https://pyrography-art-gallery-api.onrender.com/users';
} else if (mode === 'development') {
    baseUrl = 'http://localhost:3500/users';
}

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

export const logout = (accessToken) => request.post(`${baseUrl}/logout`, undefined, accessToken);