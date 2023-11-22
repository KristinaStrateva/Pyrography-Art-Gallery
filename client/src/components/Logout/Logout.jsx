import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import * as authService from '../../services/authService';

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(logoutHandler())
            .catch((err) => console.log(err)); //ToDo: Navigate to 404 page
    }, []);

    return null;
}