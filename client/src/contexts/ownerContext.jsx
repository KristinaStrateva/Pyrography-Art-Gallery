import { createContext, useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import * as itemsService from '../services/itemsService';
import AuthContext from './authContext';
import Path from '../utils/paths';

const OwnerContext = createContext();

export const OwnerGuardProvider = ({
    children,
    // collectionName,
    isOwner
}) => {
    // const [isOwner, setIsOwner] = useState(false);
    // const { userId } = useContext(AuthContext);

    // useEffect(() => {
    //     if (userId) {
    //         itemsService.getItemById(collectionName, itemId)
    //             .then(result => setIsOwner(state => state = result._ownerId === userId))
    //             .catch(err => {
    //                 console.log(err)
    //                 setIsOwner(state => state = false);
    //             });
    //     } else {
    //         setIsOwner(state => state = false);
    //     }
    // }, [collectionName, itemId, userId]);

    console.log(isOwner)

    return (
        <>
            {isOwner &&
                <OwnerContext.Provider value={isOwner}>
                    {children}
                </OwnerContext.Provider>
            }

            {!isOwner && <Navigate to={Path.NotFound} />}
        </>
    )
    // isOwner
    //     ? (
    //         <OwnerContext.Provider value={isOwner}>
    //             {children}
    //         </OwnerContext.Provider>
    //     )
    //     : <Navigate to={Path.NotFound} />;
};

export default OwnerContext;