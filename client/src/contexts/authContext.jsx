import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from "../utils/paths";

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
            if (values.email === '') {
                throw new Error('Email is required!');
            }

            if (values.password === '') {
                throw new Error('Password is required!');
            }

            const result = await authService.login(values.email, values.password);
    
            setAuth(result);
    
            localStorage.setItem('accessToken', result.accessToken);
    
            navigate(Path.HomePage);

        } catch (error) {
            throw error;
        }
    };

    const registerSubmitHandler = async (values) => {
        
        try {
            if (values.username === '') {
                throw new Error('Username is required!');
            }

            if (values.email === '') {
                throw new Error('Email is required!');
            }

            if (values.password === '') {
                throw new Error('Password is required!');
            }

            if (values.password !== values.repeatPass) {
                throw new Error('Passwords don\'t match!');
            }
            
            const result = await authService.register(values.username, values.email, values.password);
            
            setAuth(result);
    
            localStorage.setItem('accessToken', result.accessToken);
    
            navigate(Path.HomePage);

        } catch (error) {
            throw error;
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        username: auth.username || auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;