import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as itemsService from "../../services/itemsService";
import Path from "../../utils/paths";

export const AuthGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.LoginPage} />
    }

    return <Outlet />
}

export const OwnerGuard = () => {
    const { userId } = useContext(AuthContext);
    const { collectionName, itemId } = useParams();
    const navigate = useNavigate();

    itemsService.getItemById(collectionName, itemId)
            .then(item => {
                if (userId !== item.owner) {
                    return navigate(Path.NotFound);
                }
            })
            .catch(err => { throw err });

    return <Outlet />
}