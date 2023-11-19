import { useEffect, useState } from "react";
import styles from './BestOffer.module.css';
import mainStyle from '../../App.module.css';

export default function BestOffer({
    item,
}) {
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    useEffect(() => {
        const options = {month: 'long'};

        const month = new Date().toLocaleDateString('en-EN', options);
        
        setMonth(s => s = month);
    }, [month]);

    useEffect(() => {
        const options = {year: 'numeric'};

        const year = new Date().toLocaleDateString('en-EN', options);
        
        setYear(s => s = year);
    }, [year]);

    return (
        <div className={`${styles["home-hero"]} ${mainStyle["section-container"]}`}>
            <div className={`${styles["home-max-width"]} ${mainStyle["max-width-container"]}`}>
                <div className={styles["home-hero1"]}>
                    <div className={styles["home-container03"]}>
                        <div className={styles["home-info"]}>
                            <span className={styles["home-text12"]}>
                                <span>BEST SELLER</span>
                                <br />
                                <span>{month} / {year}</span>
                            </span>
                        </div>
                        <h1 className={`${styles["home-text16"]} ${mainStyle["Heading-1"]}`}>{item.name}</h1>
                        <div className={styles["home-container04"]}>
                            <span className={styles["home-text17"]}>FOR</span>
                            <span className={styles["home-text18"]}> €{item.price}</span>
                        </div>
                        <div className={styles["home-btn-group"]}>
                            <button className={mainStyle.button}>Buy now</button>
                        </div>
                    </div>
                    <img src={item.imageUrl} alt={item.name} className={styles["home-image5"]} />
                </div>
            </div>
        </div>
    );
}