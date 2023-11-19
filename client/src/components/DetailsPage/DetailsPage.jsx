import { Link } from "react-router-dom";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';

export default function DetailsPage() {

    const itemId = 'item6';
    
    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src="images/categories/giftSets/coffee_set.jpg" />
                    <div>
                        <p>0 Likes</p>
                    </div>
                </div>
                <div className={styles["info-wrapper"]}>
                    <div>
                        <p className={styles["details-title"]}>Name: Coffee set</p>
                        <p>Price: <span className={styles["details-price"]}>€5</span></p>
                        <p>Description: <span className={styles["details-description"]}>Some description here...hsdfkjs gfjdsukys rfdgvkdfvds kgfvadfjad sgfjkds kfjgadsgfjad sgfjadskjgf jkads fjkadsgjk fgkagdsgjskj fadfvbdvbjhadvk adsg fadsjf vbdfvjad</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        <Link to={`/${itemId}/edit-item`} className={mainStyle.button}>Edit</Link>
                        <Link to={`/${itemId}/delete-item`} className={mainStyle.button}>Delete</Link>
                        {/* Have to disable the Like button once it is clicked! */}
                        <Link to={`/${itemId}/like`} className={mainStyle.button}>Like</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}