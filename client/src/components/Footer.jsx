import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import mainStyle from '../App.module.css';

export default function Footer() {
    return (
        <div className={styles["home-footer"]}>
            <div className={mainStyle["max-width-container"]}>
                <footer className={styles["home-footer1"]}>
                    <div className={styles["home-container09"]}>
                        <h3 className={`${styles["home-text32"]} ${mainStyle["Heading-3"]}`}>VESSEY'S ART SHOP</h3>
                        <span className={styles["home-text33"]}>
                            <span>25th September, Dobritch</span>
                            <br />
                            <span>Bulgaria</span>
                        </span>
                        <span className={styles["home-text36"]}>(359) 8994 292 80</span>
                        <span className={styles["home-text37"]}>veselina_hendry@gmail.com</span>
                    </div>
                    <div className={styles["home-links-container"]}>
                        <div className={styles["home-container10"]}>
                            <span className={styles["home-text38"]}>Categories</span>
                            <Link to="/collection/homeDecorations" className={styles["home-text39"]}>Home Decoration</Link>
                            <Link to="/collection/giftSets" className={styles["home-text40"]}>Gift Sets</Link>
                            <Link to="/collection/customTextOnWood" className={styles["home-text41"]}>Custom text on wood</Link>
                        </div>
                        <div className={styles["home-container11"]}>
                            <span className={styles["home-text45"]}>Company</span>
                            <Link to="#" className={styles["home-text46"]}>Shop</Link>
                            <Link to="#" className={styles["home-text47"]}>Lookbook</Link>
                            <Link to="#" className={styles["home-text48"]}>Specials</Link>
                            <Link to="/about" className={styles["home-text49"]}>About</Link>
                        </div>
                        <div className={styles["home-container12"]}>
                            <span className={styles["home-text51"]}>Resources</span>
                            <Link to="#" className={styles["home-text52"]}>Contact us</Link>
                            <Link to="#" className={styles["home-text53"]}>Order</Link>
                            <Link to="#" className={styles["home-text54"]}>Track your order</Link>
                            <Link to="#" className={styles["home-text55"]}>Shipping &amp; Delivery</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}