import styles from './ShopByCategories.module.css';
import mainStyle from '../../App.module.css';

export default function ShopByCategories() {
    return (
        <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
            <div className={mainStyle["max-width-container"]}>
                <div className={mainStyle["section-heading-section-heading"]}>
                    <h1 className={`${mainStyle["section-heading-text"]} ${mainStyle["Heading-2"]}`}>
                        <span>SHOP BY CATEGORIES</span>
                    </h1>
                    <span className={mainStyle["section-heading-text1"]}>
                        <span>
                            Make your purchase by your preferences
                        </span>
                    </span>
                </div>
                <div className={styles["home-cards-container"]}>
                    <div className={styles["category-card-category-card"]}>
                        <img alt="image" src="images/categories/homeDecorations/ideas_main_how-to-make-a-pyrography-home-sweet-home-sign.jpg" className={styles["category-card-image"]} />
                        <span className={styles["category-card-text"]}><span>Home Decorations</span></span>
                    </div>
                    <div className={styles["category-card-category-card"]}>
                        <img alt="image" src="images/categories/giftSets/best-diy-wood-burning-ideas-designs-art-featured-homebnc-1024x536.jpg" className={styles["category-card-image"]} />
                        <span className={styles["category-card-text"]}><span>Gift Sets</span></span>
                    </div>
                    <div className={styles["category-card-category-card"]}>
                        <img alt="image" src="images/categories/customTextOnWood/Custom-Wood-Burning-Cutting-Board-madebybarb-4.jpg" className={styles["category-card-image"]} />
                        <span className={styles["category-card-text"]}><span>Custom Text On Wood</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}