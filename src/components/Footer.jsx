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
                            {/* Instagram */}
                            <a
                                className="glow-hover w-8 h-8 flex items-center justify-center rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                href="https://www.instagram.com/hermeias.company/" target="_blank" rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    className="fill-white/80 hover:fill-white transition-colors duration-300">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                className="glow-hover w-8 h-8 flex items-center justify-center rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                href="https://www.linkedin.com/company/hermeias-p2p/" target="_blank" rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    className="fill-white/80 hover:fill-white transition-colors duration-300">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
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
