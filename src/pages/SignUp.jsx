import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="relative z-10">
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl font-bold text-white mb-4">Create Account</h1>
                            <p className="text-white/70">Join HERMEiAS and get started</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors duration-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors duration-300"
                                        placeholder="Create a password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors duration-300"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="w-4 h-4 bg-black/50 border border-white/10 rounded focus:ring-white/30"
                                    />
                                    <label htmlFor="terms" className="ml-2 text-sm text-white/70">
                                        I agree to the{" "}
                                        <a href="#" className="text-white hover:text-white/90 transition-colors duration-300">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-white hover:text-white/90 transition-colors duration-300">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                                <button className="w-full py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors duration-300 flex items-center justify-center">
                                    Create Account
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                                <p className="text-center text-white/70">
                                    Already have an account?{" "}
                                    <a href="/signin" className="text-white hover:text-white/90 transition-colors duration-300">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SignUp; 