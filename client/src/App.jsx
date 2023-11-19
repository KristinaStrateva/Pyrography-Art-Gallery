import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import CollectionPage from './components/CollectionPage/CollectionPage';
import About from './components/AboutPage/About';
import styles from './App.module.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import EditPage from './components/DetailsPage/EditPage/EditPage';
import AddItemPage from './components/AddItemPage/AddItemPage';

export default function App() {

    return (
        <div className={styles["home-container"]}>
            <Navigation name={''} />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/homeDecorations' element={<CollectionPage />} />
                <Route path='/giftSets' element={<CollectionPage />} />
                <Route path='/customTextOnWood' element={<CollectionPage />} />
                <Route path='/:collectionName/:itemId/details' element={<DetailsPage />} />
                <Route path='/:collectionName/:itemId/edit-item' element={<EditPage />} />
                <Route path='/add-item' element={<AddItemPage />} />
            </Routes>

            <Footer />
        </div>
    )
};