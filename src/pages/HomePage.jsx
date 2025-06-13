import Hero from "../components/Hero";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Values from "../components/Values";
import { StarsBackground } from "../design/StarsBackground";

const HomePage = () => {
    return (
        <div className="bg-black relative">
            <StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />
            <main>
                <Header />
                <Hero />
                <Products />
                <Stats />
                <Values />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
