import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as itemsService from '../../services/itemsService';
import transformCollectionName from "../../utils/transformCollectionName";

import styles from './MyItems.module.css';
import mainStyle from '../../App.module.css';
import Spinner from "../Spinner/Spinner";

export default function MyItems() {
    const [isLoading, setIsLoading] = useState(true);
    const [myItems, setMyItems] = useState([]);

    const { accessToken } = useContext(AuthContext);

    useEffect(() => {
        itemsService.getMyItems(accessToken)
            .then(result => {
                setIsLoading(false);
                setMyItems(result);
            })
            .catch(err => {
                setIsLoading(false);
                throw err;
            });
    }, []);

    return (
        <>
            {isLoading && <Spinner />}

            {!isLoading && (
                <div className={styles.wrapper}>

                    {myItems.length > 0 && (
                        <>
                            <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                                <span>MY ITEMS</span>
                            </h1>
                            <div className={styles["main-section"]}>
                                {myItems.map(item => {
                                    const collectionName = transformCollectionName(item.fromCollection.name);

                                    return (
                                        <div key={item._id} className={styles["category-card-category-card"]}>
                                            <img alt="image" src={item.imageUrl} className={styles["category-card-image"]} />
                                            <h5>{item.name}</h5>
                                            <Link to={`/${collectionName}/${item._id}/details`} className={mainStyle.button}>More details</Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )}

                    {!myItems.length && <p>You don't have any items added yet!</p>}
                    
                </div>
            )}
        </>
    );
}