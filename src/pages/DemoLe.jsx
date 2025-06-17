import DemoLeHero from "../components/DemoLeHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import DemoLeProductDescription from "../components/DemoLeProductDescription";
import BetaSection from "../components/BetaSection";

const DemoLe = () => {
    return (
        <div className="relative">
            <Header />
            <div className="relative">
                <main className="relative z-10">
                    <DemoLeHero />
                    <DemoLeProductDescription />
                    <BetaSection />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DemoLe;