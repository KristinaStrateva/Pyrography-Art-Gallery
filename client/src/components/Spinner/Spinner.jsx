import styles from './Spinner.module.css';
import mainStyle from '../../App.module.css';

export default function Spinner() {
    return (
        <div className={`${mainStyle["section-container"]} ${mainStyle["column"]}`}>
            <div className={mainStyle["max-width-container"]}>
                <div className={styles.loader}></div>
            </div>
        </div >
    )
}