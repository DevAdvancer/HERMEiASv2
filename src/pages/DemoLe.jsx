import DemoLeHero from "../components/DemoLeHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import DemoLeProductDescription from "../components/DemoLeProductDescription";
import BetaSection from "../components/BetaSection";
import { StarsBackground } from "../design/StarsBackground";

const DemoLe = () => {
    return (
        <div className="relative">
            <StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />
            <Header />
            <div className="relative">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
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