import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import Navigation from "./components/Navigation";
import Details from './components/Details';
import About from './components/About';
import styles from './App.module.css';

function App() {

    return (
        <div className={styles["home-container"]}>
            <Navigation name={''} />

            <Routes>
                <Route path='/' element={<HomeMain />} />
                <Route path='/about' element={<About />} />
                <Route path='/collection/homeDecorations' element={<Details />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
