import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import './Home.css';

const Home = () => {
    return (
        <div className="hero">
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Home;