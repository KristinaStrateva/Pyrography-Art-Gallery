import { Link } from 'react-router-dom';

import styles from './LastThreeAdded.module.css';
import mainStyle from '../../../App.module.css';

export default function LastThreeAdded({
    lastItems,
}) {
    return (
        <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
            <div className={mainStyle["max-width-container"]}>
                <div className={mainStyle["section-heading-section-heading"]}>
                    <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                        <span data-testid="heading">LATEST ADDED</span>
                    </h1>
                    <span className={mainStyle["section-heading-text1"]}>
                        <span>
                            Check the latest added items
                        </span>
                    </span>
                </div>
                <div className={styles["home-cards-container"]}>
                    {lastItems.map(item => {
                        const collectionName = item.fromCollection.pathName;

                        return (
                            <div key={item._id} className={styles["category-card-category-card"]}>
                                <img alt="image" src={item.imageUrl} className={styles["category-card-image"]} />
                                <h5>{item.name}</h5>
                                <Link to={`/${collectionName}/${item._id}/details`} className={mainStyle.button}>More details</Link>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}