import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/authContext';
import Path from './utils/paths';

import { AuthGuard, OwnerGuard } from './components/Guards/AuthGuard';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/AboutPage/About';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Logout from './components/Logout/Logout';
import MyItems from './components/MyItems/MyItems';
import CollectionPage from './components/CollectionPage/CollectionPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import EditPage from './components/DetailsPage/EditPage/EditPage';
import AddItemPage from './components/AddItemPage/AddItemPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import styles from './App.module.css';

export default function App() {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    }, [error]);

    const handleOnError = (err) => {
        setError(err);
    };

    return (
        <>
            <ErrorBoundary onError={handleOnError}>
                <AuthProvider>

                    <div className={styles["home-container"]}>
                        <Navigation />

                        <Routes>
                            <Route path={Path.HomePage} element={<HomePage />} />
                            <Route path={Path.LoginPage} element={<LoginPage />} />
                            <Route path={Path.RegisterPage} element={<RegisterPage />} />
                            <Route path={Path.AboutPage} element={<About />} />
                            <Route path={Path.HomeDecorationsPage} element={<CollectionPage />} />
                            <Route path={Path.GiftSetsPage} element={<CollectionPage />} />
                            <Route path={Path.CustomItemsPage} element={<CollectionPage />} />
                            <Route path={Path.DetailsPage} element={<DetailsPage />} />

                            <Route element={<AuthGuard />}>
                                <Route path={Path.Logout} element={<Logout />} />
                                <Route path={Path.AddItemPage} element={<AddItemPage />} />
                                <Route path={Path.MyItems} element={<MyItems />} />

                                <Route element={<OwnerGuard />}>
                                    <Route path={Path.EditPage} element={<EditPage />} />
                                </Route>
                            </Route>

                            <Route path={Path.NotFound} element={<NotFoundPage />} />
                            <Route path={Path.AnyOther} element={<NotFoundPage />} />
                        </Routes>

                        <Footer />
                    </div>
                </AuthProvider>
            </ErrorBoundary >
            {error && (
                <div>
                    <div className={styles["error-container"]}>
                        <p>{error.message}</p>
                    </div>
                </div>
            )
            }
        </>
    )
};