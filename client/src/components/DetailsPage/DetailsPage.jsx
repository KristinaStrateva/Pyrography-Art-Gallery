import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as itemsService from '../../services/itemsService';
import AuthContext from "../../contexts/authContext";

import DeleteModal from "./DeleteModal/DeleteModal";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';

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
            .then(item => {
                setItem(item);
                setLikesAmount(item.likesList.length);

                // if (likes.find(x => x._ownerId === userId)) {

                //     setLike(true);
                // }
            })
            .catch(err => { throw err });
    }, [itemId, like]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const likeHandler = async () => {
        try {
            await itemsService.likeItem(collectionName, itemId);

            setLike(true);

        } catch (err) {
            setLike(false);

            throw err;
        }
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
                        <p>Description: <span className={styles["details-description"]}>{item.description}</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        {isAuthenticated && isOwner && (
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
                        )}
                        {!like && isAuthenticated && !isOwner && <button className={mainStyle.button} onClick={likeHandler}>Like</button>}
                    </div>
                </div>
            </div>
        </section>
    );
}