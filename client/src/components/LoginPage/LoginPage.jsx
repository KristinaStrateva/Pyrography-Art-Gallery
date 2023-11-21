import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import mainStyle from '../../App.module.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const LoginValuesKeys = {
    'Email': 'email',
    'Password': 'password',
};

export default function LoginPage() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm({
        [LoginValuesKeys.Email]: '',
        [LoginValuesKeys.Password]: '',
    }, loginSubmitHandler);

    return (
        <section className={styles.login}>
            <div className={styles.form}>
                <h2>Login</h2>
                <form className={styles["login-form"]} onSubmit={onSubmit}>
                    <input
                        type="text"
                        name={LoginValuesKeys.Email}
                        value={values[LoginValuesKeys.Email]}
                        onChange={onChange}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name={LoginValuesKeys.Password}
                        value={values[LoginValuesKeys.Password]}
                        onChange={onChange}
                        placeholder="Password"
                    />
                    <button type="submit" className={mainStyle.button}>Login</button>
                    <p className={styles.message}>Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </section>
    );
}