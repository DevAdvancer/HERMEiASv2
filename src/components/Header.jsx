import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import { HamburgerMenu } from "../design/HamburgerMenu"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll position to change header appearance
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-gray-800/50"
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between px-4 lg:px-6 xl:px-8 py-1.5">
                <a
                    className={`block w-[10rem] transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-90 hover:opacity-100"}`}
                    href="/"
                >
                    <h3 className="text-white text-lg font-semibold">HERMEiAS</h3>
                </a>

                {/* Mobile navigation overlay - separated from nav element */}
                {openNavigation && (
                    <div className="lg:hidden fixed inset-0 top-[3.25rem] bg-black/95 backdrop-blur-md z-40" onClick={handleClick}></div>
                )}

                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[3.25rem] left-0 right-0 z-50 lg:static lg:flex lg:bg-transparent lg:z-auto`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row bg-black lg:bg-transparent p-3 rounded-md">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-xl uppercase transition-all duration-200
                                ${openNavigation ? "text-gray-500 hover:text-white motion-scale-x-in-150 motion-blur-in-xl motion-duration-300" : ""}
                                ${item.onlyMobile ? "lg:hidden" : ""}
                                px-4 py-3 md:py-4 lg:py-1.5 lg:px-3 xl:px-4 lg:text-xs lg:font-semibold
                                ${item.url === pathname.hash
                                    ? "z-2 lg:text-white after:absolute after:bottom-1 after:left-1/2 after:w-1 after:h-1 after:bg-white after:rounded-full after:-translate-x-1/2 after:opacity-0 after:lg:opacity-100"
                                    : `lg:text-white/50 hover:text-white ${scrolled ? 'hover:text-white/90' : 'hover:text-white'}`
                                }
                                lg:leading-5`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
