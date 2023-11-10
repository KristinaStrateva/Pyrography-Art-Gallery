import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import Navigation from "./components/Navigation";
import DetailsPage from './components/DetailsPage';
import About from './components/About';
import styles from './App.module.css';

export default function App() {

    return (
        <div className={styles["home-container"]}>
            <Navigation name={''} />

            <Routes>
                <Route path='/' element={<HomeMain />} />
                <Route path='/about' element={<About />} />
                <Route path='/collection/homeDecorations' element={<DetailsPage />} />
            </Routes>

            <Footer />
        </div>
    )
};