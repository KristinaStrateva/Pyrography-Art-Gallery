import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from "../utils/paths";
import validateFormValues from "../utils/validateFormValues";

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
            validateFormValues(values);

            const result = await authService.login(values.email, values.password);

            setAuth(result); // result = {id, username, email, accessToken}

            navigate(Path.HomePage);

        } catch (error) {
            throw error;
        }
    };

    const registerSubmitHandler = async (values) => {

        try {
            // validateFormValues(values);

            const result = await authService.register(values.username, values.email, values.password);

            setAuth(result); // result = {id, username, email, accessToken}

            navigate(Path.HomePage);

        } catch (error) {
            throw error;
        }
    };

    const logoutHandler = () => {
        setAuth({});
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth.id,
        username: auth.username || auth.email,
        accessToken: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;