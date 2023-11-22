import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import styles from './RegisterPage.module.css';
import mainStyle from '../../App.module.css';
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPass: 'repeatPass',
}

export default function RegisterPage() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPass]: '',
    }, registerSubmitHandler);

    return (
        <section className={styles.register}>
            <div className={styles.form}>
                <h2>Register</h2>
                <form className={styles["register-form"]} onSubmit={onSubmit}>
                    <input
                        type="text"
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                        onChange={onChange}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                        onChange={onChange}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name={RegisterFormKeys.RepeatPass}
                        value={values[RegisterFormKeys.RepeatPass]}
                        onChange={onChange}
                        placeholder="Repeat password"
                    />
                    <button type="submit" className={mainStyle.button}>Register</button>
                    <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
}