import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as itemsService from "../../services/itemsService";
import Path from "../../utils/paths";

export const AuthGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        console.log('some')
        return <Navigate to={Path.LoginPage} />
    }

    return <Outlet />
}

export const OwnerGuard = () => {
    const { userId } = useContext(AuthContext);
    const { collectionName, itemId } = useParams();
    const [hasPermission, setHasPermission] = useState(true);

    console.log(userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const item = await itemsService.getItemById(collectionName, itemId);

                if (userId !== item.owner) {
                    setHasPermission(false);
                }

            } catch (error) {
                setHasPermission(false);

                throw err;
            }
        };

        fetchData();
    }, [collectionName, itemId, userId]);

    return hasPermission ? <Outlet /> : <Navigate to={Path.NotFound} />;
}