import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

import * as itemsService from '../../services/itemsService';

import styles from './CollectionPage.module.css';
import mainStyle from '../../App.module.css';
import Spinner from '../Spinner/Spinner';

export default function CollectionPage() {
    const [collection, setCollection] = useState([]);
    const [collectionName, setCollectionName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const locationName = useLocation().pathname.slice(1);

    useEffect(() => {
        itemsService.getAllFromCollection(locationName)
            .then(data => {
                setIsLoading(false)
                setCollection(data);
            })
            .catch(err => {
                setIsLoading(false);
                throw err;
            });
    }, [locationName]);

    useEffect(() => {
        setCollectionName(s => s = collection[0]?.fromCollection.name);
    }, [collection]);

    useEffect(() => {
        const indicators = document.querySelector('.carousel-indicators');

        if (indicators) {
            indicators.style.display = 'none';
        }

    }, []);

    const captions = Array.from(document.querySelectorAll('.carousel-caption'));
    const controlPrev = document.querySelector('.carousel-control-prev');
    const controlNext = document.querySelector('.carousel-control-next');
    const prevArrow = document.querySelector('.carousel-control-prev-icon');
    const nextArrow = document.querySelector('.carousel-control-next-icon');

    captions.forEach(caption => {
        caption.style.position = 'initial';
        caption.style.display = 'flex';
        caption.style.flexDirection = 'column';
        caption.style.alignItems = 'center';
        caption.style.gap = '0.7em';
    });

    if (controlPrev && controlNext) {
        controlPrev.style.top = '-5em';
        controlPrev.style.left = '-5em';
        prevArrow.style.backgroundColor = '#d99595';

        controlNext.style.top = '-5em';
        controlNext.style.right = '-5em';
        nextArrow.style.backgroundColor = '#d99595';
    }

    return (
        <>
            {isLoading && <Spinner />}

            {!isLoading && (

                <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
                    <div className={mainStyle["section-container"]}>

                        {collection.length > 0 &&
                            <div className={styles["max-width-container"]}>
                                <div className={mainStyle["section-heading-section-heading"]}>
                                    <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                                        <span>{collectionName} COLLECTION</span>
                                    </h1>
                                    <span className={mainStyle["section-heading-text1"]}>
                                        <span>
                                            You can choose an item from this category
                                        </span>
                                    </span>
                                </div>
                                <div className={styles["home-container08"]}>

                                    <Carousel slide={false} className={styles.carousel}>

                                        {collection.map((item, index) => (
                                            <CarouselItem key={`${item._id}-${index}`} className={styles["carousel-item"]}>
                                                <img alt={item.name} src={item.imageUrl} className={styles["blog-post-card-image"]} />
                                                <CarouselCaption>
                                                    <h3>{item.name}</h3>
                                                    <Link to={`/${locationName}/${item._id}/details`} className={mainStyle.button}>More details</Link>
                                                </CarouselCaption>
                                            </CarouselItem >
                                        ))}

                                    </Carousel>

                                </div>
                            </div>
                        }

                        {!collection.length && <p className={styles["home-paragraph"]}>There are no items in this collection yet, but you can add the first one!</p>}

                    </div>
                </div>
            )}
        </>
    );
}