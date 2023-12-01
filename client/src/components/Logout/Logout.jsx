import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";

import * as authService from '../../services/authService';

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.HomePage);
            })
            .catch((err) => {
                logoutHandler();
                navigate(Path.LoginPage);
                console.log(err.message);
            })
    }, []);

    return null;
}