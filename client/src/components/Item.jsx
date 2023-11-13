import Carousel from 'react-bootstrap/Carousel';

import styles from './Item.module.css';
import mainStyle from '../App.module.css';

export default function Item({
    name,
    imageUrl,
    // price,
}) {
    return (
        <>
            <Carousel.Item className={styles["blog-post-card-blog-post-card"]}>
                    <img alt={name} src={imageUrl} className={styles["blog-post-card-image"]} />
                    <Carousel.Caption>
                        <h3>{name}</h3>
                        <a href="#" className={mainStyle["button"]}>More details</a>
                    </Carousel.Caption>
            </Carousel.Item >
        </>
    );
}