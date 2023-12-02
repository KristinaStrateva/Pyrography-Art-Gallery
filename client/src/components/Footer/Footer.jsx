import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import mainStyle from '../../App.module.css';
import Path from '../../utils/paths';

export default function Footer() {
    return (
        <div className={styles["home-footer"]}>
            <div className={mainStyle["max-width-container"]}>
                <footer className={styles["home-footer1"]}>
                    <div className={styles["home-container09"]}>
                        <h3 className={`${styles["home-text32"]} ${mainStyle["Heading-3"]}`}>PYROGRAPHY ART GALLERY</h3>
                        <span className={styles["home-text33"]}>
                            <span>25th September, Dobritch</span>
                            <br />
                            <span>Bulgaria</span>
                        </span>
                        <span className={styles["home-text36"]}>(359) 8994 292 80</span>
                        <span className={styles["home-text37"]}>veselina_hendry@gmail.com</span>
                    </div>
                    <div className={styles["home-links-container"]}>
                        <div className={styles["home-container11"]}>
                            <span className={styles["home-text45"]}>Company</span>
                            <Link to="/about" className={styles["home-text49"]}>About</Link>
                        </div>
                        <div className={styles["home-container12"]}>
                            <span className={styles["home-text51"]}>Resources</span>
                            <Link to={Path.MyItems} className={styles["home-text53"]}>My Items</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}