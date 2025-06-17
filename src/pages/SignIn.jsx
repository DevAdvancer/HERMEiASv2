import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignIn = () => {
    return (
        <div className="min-h-screen">
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
                            <h1 className="text-4xl font-bold text-white mb-4">Welcome Back</h1>
                            <p className="text-white/70">Sign in to access your account</p>
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
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="w-4 h-4 bg-black/50 border border-white/10 rounded focus:ring-white/30"
                                        />
                                        <label htmlFor="remember" className="ml-2 text-sm text-white/70">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                                        Forgot password?
                                    </a>
                                </div>
                                <button className="w-full py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors duration-300 flex items-center justify-center">
                                    Sign In
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                                <p className="text-center text-white/70">
                                    Don't have an account?{" "}
                                    <a href="/signup" className="text-white hover:text-white/90 transition-colors duration-300">
                                        Sign up
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

export default SignIn; 