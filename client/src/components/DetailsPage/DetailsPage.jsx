import { Link, useParams } from "react-router-dom";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';
import { useEffect, useState } from "react";

import * as itemsService from '../../services/itemsService';
import DeleteModal from "./DeleteModal/DeleteModal";

export default function DetailsPage() {
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);

    const { collectionName, itemId } = useParams();

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(setItem)
            .catch(err => console.log(err));
    }, [itemId]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={item.imageUrl} alt={item.name} />
                    <div>
                        <p>{item.likesAmount} Likes</p>
                    </div>
                </div>
                <div className={styles["info-wrapper"]}>
                    <div>
                        <p className={styles["details-title"]}>Name: {item.name}</p>
                        <p>Price: <span className={styles["details-price"]}>€{item.price}</span></p>
                        <p>Description: <span className={styles["details-description"]}>{item.description}</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        <Link to={`/${collectionName}/${itemId}/edit-item`} className={mainStyle.button}>Edit</Link>
                        <DeleteModal
                            show={show}
                            handleClose={handleClose}
                            collectionName={collectionName}
                            itemId={itemId}
                        />
                        <button className={mainStyle.button} onClick={handleShow}>Delete</button>
                        {/* Have to disable the Like button once it is clicked! */}
                        <Link to={`/${collectionName}/${itemId}/like`} className={mainStyle.button}>Like</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}