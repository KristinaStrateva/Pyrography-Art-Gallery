import Brands from "./components/Brands";
import ClientsSay from "./components/ClientsSay";
import FeaturedCars from "./components/FeaturedCars";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import HomeNavbar from "./components/HomeNavbar";
import HomeSearch from "./components/HomeSearch";
import NewCarsCarousel from "./components/NewCarsCarousel";
import Service from "./components/Service";


function App() {

    return (
        <div>

            <section id="home" className="welcome-hero">

                <HomeNavbar />

                <HomeContent />

                <HomeSearch />

            </section>

            <Service />

            <NewCarsCarousel />

            <FeaturedCars />

            <ClientsSay />

            <Brands />

            <Footer />

        </div>
    );
}

export default App;
