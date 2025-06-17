const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-white/10 text-white py-6 px-4 sm:px-6 lg:px-8">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Single row layout with items on left and right */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Navigation Links */}
                    <nav className="flex flex-wrap gap-x-6 mb-4 md:mb-0">
                        <a
                            href="/#products"
                            className="text-white/70 hover:text-white transition-colors duration-300 px-1 py-1"
                        >
                            Products
                        </a>
                        <a
                            href="/about"
                            className="text-white/70 hover:text-white transition-colors duration-300 px-1 py-1"
                        >
                            About us
                        </a>
                        <a
                            href="/contact"
                            className="text-white/70 hover:text-white transition-colors duration-300 px-1 py-1"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Right side - Grouped social media and copyright */}
                    <div className="flex items-center gap-x-6">
                        {/* Social Media Icons - Square boxes */}
                        <nav className="flex gap-x-4">
                            <a
                                className="glow-hover w-8 h-8 flex items-center justify-center rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    className="fill-white/80 hover:fill-white transition-colors duration-300">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a
                                className="glow-hover w-8 h-8 flex items-center justify-center rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    className="fill-white/80 hover:fill-white transition-colors duration-300">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a
                                className="glow-hover w-8 h-8 flex items-center justify-center rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    className="fill-white/80 hover:fill-white transition-colors duration-300">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </nav>

                        {/* Divider */}
                        <div className="hidden md:block h-6 w-px bg-white/10"></div>

                        {/* Copyright */}
                        <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">
                            <p>Copyright © {currentYear} - <span className="font-bold text-white/80">HERMEIAS</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
