import { Link } from "react-router-dom";

import styles from './RegisterPage.module.css';
import mainStyle from '../../App.module.css';

export default function RegisterPage() {
    return (
        <section className={styles.register}>
            <div className={styles.form}>
                <h2>Register</h2>
                <form className={styles["register-form"]} method="POST">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="repeatPass" placeholder="Repeat password" />
                    <button type="submit" className={mainStyle.button}>Register</button>
                    <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
}