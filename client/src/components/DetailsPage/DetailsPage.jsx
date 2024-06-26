import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as itemsService from '../../services/itemsService';
import AuthContext from "../../contexts/authContext";

import DeleteModal from "./DeleteModal/DeleteModal";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';
import Spinner from "../Spinner/Spinner";

export default function DetailsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});
    const [likesAmount, setLikesAmount] = useState(0);
    const [fromCollection, setFromCollection] = useState('');
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false);

    const { userId, accessToken, isAuthenticated } = useContext(AuthContext);
    const { collectionName, itemId } = useParams();

    const isOwner = item.owner === userId;

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(itemData => {
                setIsLoading(false);
                setItem(itemData);
                setLikesAmount(itemData.likesList.length);
                setFromCollection(itemData.fromCollection.name);

                if (itemData.likesList.length > 0 && itemData.likesList.find(like => like.user === userId)) {
                    setLike(true);
                }
            })
            .catch(err => {
                setIsLoading(false);
                throw err;
            });
    }, [itemId, like]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const likeHandler = async () => {
        try {
            await itemsService.likeItem(collectionName, itemId, accessToken);

            setLike(true);

        } catch (err) {
            setLike(false);

            throw err;
        }
    }

    return (
        <>
            {isLoading && <Spinner />}

            {!isLoading && (
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
                                <p>Collection: <span className={styles["details-description"]}>{fromCollection}</span></p>
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
            )}
        </>
    );
}