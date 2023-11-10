import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import Navigation from "./components/Navigation";
import CollectionPage from './components/CollectionPage';
import About from './components/About';
import styles from './App.module.css';

export default function App() {

    return (
        <div className={styles["home-container"]}>
            <Navigation name={''} />

            <Routes>
                <Route path='/' element={<HomeMain />} />
                <Route path='/about' element={<About />} />
                <Route path='/collection/homeDecorations' element={<CollectionPage />} />
            </Routes>

            <Footer />
        </div>
    )
};