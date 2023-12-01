import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as itemsService from '../../services/itemsService';
import * as likesService from '../../services/likesService';

import DeleteModal from "./DeleteModal/DeleteModal";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';
import AuthContext from "../../contexts/authContext";

export default function DetailsPage() {
    const [item, setItem] = useState({});
    const [likesAmount, setLikesAmount] = useState(0);
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false);

    const { userId, isAuthenticated } = useContext(AuthContext);
    const { collectionName, itemId } = useParams();

    const isOwner = item._ownerId === userId;

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(setItem)
            .catch(err => console.log(err));
    }, [itemId]);

    useEffect(() => {
        likesService.allLikesForItem(itemId)
            .then(likes => {
                setLikesAmount(likes.length);

                if (likes.find(x => x._ownerId === userId)) {

                    setLike(true);
                }
            })
            .catch(err => console.log(err));
    }, [like]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const likeHandle = async () => {
        await likesService.likeItem(itemId);

        setLike(true);
    }

    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={item.imageUrl} alt={item.name} />
                    <div>
                        <p>{likesAmount} Likes</p>
                    </div>
                </div>
                <div className={styles["info-wrapper"]}>
                    <div>
                        <p className={styles["details-title"]}>Name: {item.name}</p>
                        <p>Price: <span className={styles["details-price"]}>€{item.price}</span></p>
                        <p>Description: <span className={styles["details-description"]}>{item.description}</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        {isAuthenticated && isOwner &&
                            <>
                                <Link to={`/${collectionName}/${itemId}/edit-item`} className={mainStyle.button}>Edit</Link>
                                <DeleteModal
                                    show={show}
                                    handleClose={handleClose}
                                    collectionName={collectionName}
                                    itemId={itemId}
                                />
                                <button className={mainStyle.button} onClick={handleShow}>Delete</button>
                            </>
                        }
                        {!like && isAuthenticated && !isOwner && <button className={mainStyle.button} onClick={likeHandle}>Like</button>}
                    </div>
                </div>
            </div>
        </section>
    );
}