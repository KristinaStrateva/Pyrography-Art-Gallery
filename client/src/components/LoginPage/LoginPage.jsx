import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import Path from '../../utils/paths';

import styles from './LoginPage.module.css';
import mainStyle from '../../App.module.css';

const LoginFormKeys = {
    'Email': 'email',
    'Password': 'password',
};

export default function LoginPage() {
    const { loginSubmitHandler, isAuthenticated } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, loginSubmitHandler);

    return (
        <>
            <section className={styles.login}>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form className={styles["login-form"]} onSubmit={onSubmit}>
                        <input
                            type="text"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={onChange}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                            placeholder="Password"
                        />
                        <button type="submit" className={mainStyle.button}>Login</button>
                        <p className={styles.message}>Not registered? <Link to="/register">Create an account</Link></p>
                    </form>
                </div>
            </section>

            {isAuthenticated && <Navigate to={Path.NotFound} />}
        </>
    );
}