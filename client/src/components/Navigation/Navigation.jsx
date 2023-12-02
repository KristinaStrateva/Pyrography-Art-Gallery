import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Navigation.module.css';
import mainStyle from '../../App.module.css';
import Path from '../../utils/paths';

export default function Navigation() {
    const { username, isAuthenticated } = useContext(AuthContext);

    return (
        <div className={styles["home-navbar"]}>
            <header data-role="Header" className={`${styles["home-header"]} ${styles["max-width-container"]}`}>
                <div className={styles["home-navbar1"]}>
                    <div className={styles["home-middle"]}>
                        <ul className={styles["home-left"]}>
                            <li className={styles["navbar-link"]}><Link to={Path.HomeDecorationsPage}>HOME DECORATIONS</Link></li>

                            <li className={styles["navbar-link"]}><Link to={Path.GiftSetsPage}>GIFT SETS</Link></li>
                            <li className={styles["navbar-link"]}><Link to={Path.CustomTextOnWoodPage}>CUSTOM TEXT ON WOOD</Link></li>
                        </ul>
                        <div className={`${styles["navbar-logo-title"]} ${styles["navbar-link"]}`}>
                            <Link to="/"><img src="images/2.png" alt="logo" /></Link>
                        </div>

                        {isAuthenticated && (
                            <ul className={styles["home-right"]}>
                                <li className={styles["navbar-link"]}><Link to={Path.MyItems}>Hello, {username}</Link></li>
                                <li className={styles["navbar-link"]}><Link to={Path.AddItemPage}>ADD ITEM</Link></li>
                                <li className={styles["navbar-link"]}><Link to={Path.Logout}>LOGOUT</Link></li>
                            </ul>
                        )}

                        {!isAuthenticated && (
                            <ul className={styles["home-right"]}>
                                <li className={styles["navbar-link"]}><Link to={Path.LoginPage}>LOGIN</Link></li>
                                <li className={styles["navbar-link"]}><Link to={Path.RegisterPage}>REGISTER</Link></li>
                            </ul>
                        )}

                    </div>
                </div>
            </header>
        </div>
    );
}