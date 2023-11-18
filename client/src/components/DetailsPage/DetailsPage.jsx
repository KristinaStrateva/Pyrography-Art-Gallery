import { Link } from "react-router-dom";

import styles from './DetailsPage.module.css';

export default function DetailsPage() {
    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src="" />
                    <div>
                        <p>0 Likes</p>
                    </div>
                </div>
                <div className={styles["info-wrapper"]}>
                    <div>
                        <p className={styles["details-title"]}>Name: Mug pot</p>
                        <p>Price: <span className={styles["details-price"]}>€5</span></p>
                        <p>Description: <span className={styles["details-description"]}>Some description here...</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        <Link to="/edit-item" className={styles["edit-btn"]}>Edit</Link>
                        <Link to="/delete-item" className={styles["delete-btn"]}>Delete</Link>
                        {/* Have to disable the Like button once it is clicked! */}
                        <Link to="/like" className={styles["like-btn"]}>Like</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}