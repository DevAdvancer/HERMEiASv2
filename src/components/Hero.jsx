import { Spotlight } from "../design/Spotlight";
import { ShootingStars } from "../design/ShootingStars";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    const scrollToProducts = () => {
        document.getElementById('Products')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative w-full overflow-hidden pt-16 pb-20">
            {/* Spotlight Container */}
            <div className="absolute inset-0 z-0">
                <Spotlight />
            </div>

            <div id="hero" className="flex flex-col items-center justify-center min-h-[75vh] xl:min-h-[80vh] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 z-10">
                <div className="relative text-center max-w-7xl mx-auto space-y-3 mb-16">
                    <p className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-white/90 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500">
                        HERMEiAS
                    </p>
                    <p className="text-md lg:text-lg xl:text-xl text-white/80 motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-200">
                        OPEN AND PRIVATE.
                    </p>
                </div>

                {/* Scroll down icon/button */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                    <a
                        href="#Products"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToProducts();
                        }}
                        className="flex flex-col items-center text-white/70 hover:text-white transition-all duration-300"
                        aria-label="Scroll to Products section"
                    >
                        <span className="glow-hover px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest border border-white/20 hover:bg-white/20 transition-all duration-300">DISCOVER</span>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 mt-2">
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>

            <ShootingStars />
        </div>
    );
};

export default Hero;
