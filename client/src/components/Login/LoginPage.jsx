import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <section className={styles.login}>
            <div className={styles.form}>
                <h2>Login</h2>
                <form className={styles["login-form"]} method="POST">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <p className={styles.message}>
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}