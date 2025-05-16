import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle navigation and control body scroll
  const toggleNavigation = () => {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-2xl border-b border-white/10 py-1.5'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="/"
            className={`block w-[10rem] transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-90 hover:opacity-100"
            }`}
          >
            <h3 className="text-white text-lg font-semibold">HERMEiAS</h3>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navigation.map((item) => (
            !item.onlyMobile && (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code uppercase text-xs font-semibold transition-all duration-300 hover:scale-105 transform
                  ${item.url === pathname.hash
                    ? "z-2 text-white after:absolute after:bottom-1 after:left-1/2 after:w-1 after:h-1 after:bg-white after:rounded-full after:-translate-x-1/2"
                    : `text-white/50 hover:text-white ${scrolled ? 'hover:text-white/90' : 'hover:text-white'}`
                  }`}
              >
                {item.title}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button with Lucide icons - Added padding */}
        <button
          className="lg:hidden text-white transition-transform duration-300 hover:scale-110 focus:outline-none p-2"
          onClick={toggleNavigation}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Centered with no dividing lines */}
      <div
        className={`lg:hidden bg-black/60 backdrop-blur-2xl absolute w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center text-center space-y-3">
          {navigation.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              className={`text-sm font-code uppercase py-3 w-full transition-all duration-300 tracking-wide
                ${item.url === pathname.hash
                  ? "text-white"
                  : "text-gray-200 hover:text-white"
                }
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
              onClick={() => {
                setIsOpen(false);
                enablePageScroll();
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
