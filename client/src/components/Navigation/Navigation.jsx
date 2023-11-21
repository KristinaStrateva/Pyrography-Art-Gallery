import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Navigation.module.css';
import mainStyle from '../../App.module.css';

export default function Navigation() {
    const { email, isAuthenticated } = useContext(AuthContext);

    return (
        <div className={styles["home-navbar"]}>
            <header data-role="Header" className={`${styles["home-header"]} ${styles["max-width-container"]}`}>
                <div className={styles["home-navbar1"]}>
                    <div className={styles["home-container01"]}>
                        <input type="text" placeholder="search" className={`${styles["home-textinput"]} ${mainStyle["input"]}`} />
                    </div>
                    <div className={styles["home-middle"]}>
                        <ul className={styles["home-left"]}>
                            <li className={styles["navbar-link"]}><Link to="/homeDecorations">HOME DECORATIONS</Link></li>

                            <li className={styles["navbar-link"]}><Link to="/giftSets">GIFT SETS</Link></li>
                            <li className={styles["navbar-link"]}><Link to="/customTextOnWood">CUSTOM TEXT ON WOOD</Link></li>
                        </ul>
                        <div className={`${styles["navbar-logo-title"]} ${styles["navbar-link"]}`}>
                            <Link to="/"><img src="images/2.png" alt="logo" /></Link>
                        </div>

                        {isAuthenticated && (
                            <ul className={styles["home-right"]}>
                                <li className={styles["navbar-link"]}><Link to="#">Hello, {email}</Link></li>
                                <li className={styles["navbar-link"]}><Link to="/add-item">ADD ITEM</Link></li>
                                <li className={styles["navbar-link"]}><Link to="/logout">LOGOUT</Link></li>
                            </ul>
                        )}

                        {!isAuthenticated && (
                            <ul className={styles["home-right"]}>
                                <li className={styles["navbar-link"]}><Link to="/login">LOGIN</Link></li>
                                <li className={styles["navbar-link"]}><Link to="/register">REGISTER</Link></li>
                            </ul>
                        )}

                    </div>
                </div>
            </header>
        </div>
    );
}