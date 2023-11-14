import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

import { useLocation } from 'react-router-dom';
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
    }, [locationName]);

    useEffect(() => {
        setCollectionName(s => s = collection[0]?.collectionName);
    }, [collection]);

    useEffect(() => {
        const indicators = document.querySelector('.carousel-indicators');

        if (indicators) {
            indicators.style.display = 'none';
        }
    }, []);

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

                        <Carousel slide={false}>

                            {collection.map((item, index) => (
                                <CarouselItem key={`${item._id}-${index}`}>
                                    <img alt={item.name} src={item.imageUrl} className={styles["blog-post-card-image"]} />
                                    <CarouselCaption>
                                        <h3>{item.name}</h3>
                                        <a href="#" className={mainStyle["button"]}>More details</a>
                                    </CarouselCaption>
                                </CarouselItem >
                            ))}

                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    );
}