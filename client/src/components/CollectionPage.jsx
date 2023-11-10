import { useLocation } from 'react-router-dom';
import Item from "./Item";
import * as itemsService from '../services/itemsService';
import styles from './CollectionPage.module.css';
import mainStyle from '../App.module.css';
import { useEffect, useState } from 'react';

export default function CollectionPage() {
    const [collection, setCollection] = useState([]);
    const [collectionName, setCollectionName] = useState('');

    const locationName = useLocation().pathname.slice(1);

    useEffect(() => {
        itemsService.getAllFromCollection(locationName)
            .then(data => {
                setCollection(Object.values(data));
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        setCollectionName(s => s = collection[0]?.collectionName);
    }, [collection]);

    return (
        <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
            <div className={mainStyle["section-container"]}>
                <div className={mainStyle["max-width-container"]}>
                    <div className={mainStyle["section-heading-section-heading"]}>
                        <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                            <span>{collectionName}</span>
                        </h1>
                        <span className={mainStyle["section-heading-text1"]}>
                            <span>
                                You can choose an item from this category
                            </span>
                        </span>
                    </div>
                    <div className={styles["home-container08"]}>

                        {collection.map(item => (
                            <Item
                                key={item._id}
                                {...item}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}