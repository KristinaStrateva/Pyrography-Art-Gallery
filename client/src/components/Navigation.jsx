import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import mainStyle from '../App.module.css';

export default function Navigation({
    name
}) {
    return (
        <div className={styles["home-navbar"]}>
            <header data-role="Header" className={`${styles["home-header"]} ${mainStyle["max-width-container"]}`}>
                <div className={styles["home-navbar1"]}>
                    <div className={styles["home-container01"]}>
                        <input type="text" placeholder="search" className={`${styles["home-textinput"]} ${mainStyle["input"]}`} />
                    </div>
                    <div className={styles["home-middle"]}>
                        <ul className={styles["home-left"]}>
                            <li className={styles["navbar-link"]}><Link to="/collection/homeDecorations">HOME DECORATIONS</Link></li>

                            <li className={styles["navbar-link"]}><Link to="/collection/giftSets">GIFT SETS</Link></li>
                            <li className={styles["navbar-link"]}><Link to="/collection/customTextOnWood">CUSTOM TEXT ON WOOD</Link></li>
                        </ul>
                        <div className={`${styles["navbar-logo-title"]} ${styles["navbar-link"]}`}>
                            <Link to="/"><img src="images/2.png" alt="logo" /></Link>
                        </div>
                        <ul className={styles["home-right"]}>
                            <li className={styles["navbar-link"]}><Link to="/users/login">LOGIN</Link></li>
                            <li className={styles["navbar-link"]}><Link to="/users/register">REGISTER</Link></li>
                            <li className={styles["navbar-link"]}><Link to="#">Hello, {name}</Link></li>
                            <li className={styles["navbar-link"]}><Link to="/users/logout">LOGOUT</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}