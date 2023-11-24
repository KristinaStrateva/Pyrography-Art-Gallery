import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/authContext';
import * as authService from './services/authService';
import Path from './paths';

import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import CollectionPage from './components/CollectionPage/CollectionPage';
import About from './components/AboutPage/About';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Logout from './components/Logout/Logout';
import DetailsPage from './components/DetailsPage/DetailsPage';
import EditPage from './components/DetailsPage/EditPage/EditPage';
import AddItemPage from './components/AddItemPage/AddItemPage';

import styles from './App.module.css';

export default function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.HomePage);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.HomePage);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values} >
            <div className={styles["home-container"]}>
                <Navigation />

                <Routes>
                    <Route path={Path.HomePage} element={<HomePage />} />
                    <Route path={Path.LoginPage} element={<LoginPage />} />
                    <Route path={Path.RegisterPage} element={<RegisterPage />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.AboutPage} element={<About />} />
                    <Route path={Path.HomeDecorationsPage} element={<CollectionPage />} />
                    <Route path={Path.GiftSetsPage} element={<CollectionPage />} />
                    <Route path={Path.CustomTextOnWoodPage} element={<CollectionPage />} />
                    <Route path={Path.DetailsPage} element={<DetailsPage />} />
                    <Route path={Path.EditPage} element={<EditPage />} />
                    <Route path={Path.AddItemPage} element={<AddItemPage />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )
};