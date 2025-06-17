import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Values from "../components/Values";

const AboutPage = () => {
    return (
        <div className="relative top-[5rem]">
            <Header />
            <main>
                <Values />
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;