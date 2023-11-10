import Item from "./Item";
import styles from './CollectionPage.module.css';
import mainStyle from '../App.module.css';

export default function CollectionPage({
    name
}) {
    return (
        <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
            <div className={mainStyle["section-container"]}>
                <div className={mainStyle["max-width-container"]}>
                    <div className={mainStyle["section-heading-section-heading"]}>
                        <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                            <span>{name}</span>
                        </h1>
                        <span className={mainStyle["section-heading-text1"]}>
                            <span>
                                You can choose an item from this category
                            </span>
                        </span>
                    </div>
                    <div className={styles["home-container08"]}>

                        <Item item={{}} />

                    </div>
                </div>
            </div>
        </div>
    );
}