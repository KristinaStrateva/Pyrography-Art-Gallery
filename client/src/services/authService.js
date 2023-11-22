import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
    const result = request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password,
    });

    return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);