import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';
import Path from '../../utils/paths';

export default function NotFoundPage() {
    return (
        <div className={styles["notfound-container"]}>
            <div className={styles.notfound}>
                <div className={styles["notfound-404"]}>
                    <h1>404</h1>
                </div>
                <h2>Oops! Nothing was found</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable. <Link to={Path.HomePage}>Return to homepage</Link></p>
            </div>
        </div>
    );
}