import styles from './HomeBanner.module.css';

export default function HomeBanner() {
    return (
        <div className={styles["home-banner"]}>
            <div className={styles["home-container05"]}>
                <img src="images/2.png" alt="logo" />
            </div>
        </div>
    );
}