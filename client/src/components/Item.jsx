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
        {/* // <div className={styles["blog-post-card-blog-post-card"]}> */}
                {/* <img alt={name} src={imageUrl} className={styles["blog-post-card-image"]} />
            <div className={styles["blog-post-card-container"]}>
                <span className={styles["blog-post-card-text"]}>
                    <span>{name}</span>
                </span>
                <span className={styles["blog-post-card-text1"]}>
                    <span>
                        {price}
                    </span>
                </span>
                <a href="#" className={mainStyle["button"]}>
                    More details
                </a>
            </div> */}
                
        {/* // </div > */}
        </>
    );
}