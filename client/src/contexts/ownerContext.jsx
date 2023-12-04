import { createContext, useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import * as itemsService from '../services/itemsService';
import AuthContext from './authContext';
import Path from '../utils/paths';

const OwnerContext = createContext();

export const OwnerGuardProvider = ({
    children,
    collectionName,
    itemId
}) => {
    const [isOwner, setIsOwner] = useState(false);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        if (userId) {
            itemsService.getItemById(collectionName, itemId)
                .then(result => setIsOwner(result._ownerId === userId))
                .catch(err => {
                    console.log(err)
                    setIsOwner(false);
                });
        } else {
            setIsOwner(false);
        }
    }, [userId, collectionName, itemId]);

    if (!isOwner) {
        return <Navigate to={Path.NotFound} />;
    }

    return (
        <OwnerContext.Provider value={isOwner}>
            {children}
        </OwnerContext.Provider>
    );
};

export default OwnerContext;