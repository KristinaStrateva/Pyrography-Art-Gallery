import styles from './About.module.css';
// import mainStyle from '../App.module.css';

export default function About() {
    return (
        <div className={`${styles["home-container06"]} ${styles["max-width-container"]}`}>
            <div className={styles["home-container07"]}>
                <span className={styles["home-text23"]}>
                    <span>
                        Mobilio Stores Inc. are unique reseller of modern furnitors,
                        designer-made,
                    </span>
                    <br />
                    <span>home-decoration items, since 1997.</span>
                    <br />
                    <span>
                        Our legacy guarantees exceptional product quality, unique
                        designs and special prices for all of our product line-up.
                        Lorem ipsum, consectetur adipiscing elit duis tristique
                        sollicitudin nibh sit amet commodo nulla facilisi nullam
                        vehicula ipsum a arcu cursus vitae congue. Consectetur
                        adipiscing elit duis tristique sollicitudin nibh sit amet
                        commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                        vitae congue
                    </span>
                </span>
                {/* <button className={mainStyle["button"]}>Read more</button> */}
            </div>
        </div>
    );
}