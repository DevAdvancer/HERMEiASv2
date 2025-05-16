import Button from "./Button";
import { motion } from "motion/react";

const Products = () => {
    return (
        <section id="Products" className="pt-12 px-4 sm:px-6 pb-12 lg:px-8 xl:px-12">
            <div className="max-w-7xl mt-[10vh] mx-auto">
                <p className="text-3xl md:text-4xl lg:text-5xl mb-10 text-white text-center font-bold motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-700">OUR PRODUCTS</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch justify-center">
                    {/* KAI */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 0px 25px rgba(79, 70, 229, 0.4)",
                            transition: { duration: 0.3 }
                        }}
                        className="h-[450px] group relative flex flex-col rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-indigo-500 hover:bg-gray-850 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/0 to-indigo-800/0 group-hover:from-indigo-800/10 group-hover:to-indigo-600/10 transition-all duration-500"></div>

                        <div className="w-full px-3 mt-6 mb-4 z-10">
                            <p className="text-2xl font-medium text-white group-hover:text-white transition-colors duration-300">KAI</p>
                        </div>
                        <div className="w-full px-3 flex-grow z-10">
                            <p className="text-lg font-normal text-white group-hover:text-white transition-colors duration-300">
                                KAI leverages Natural Language Processing (NLP), Predictive Analytics, and Automated Resume Screening along with Deep Learning, Neural Networks, and Context-Aware AI Decision Making to streamline recruitment and provide deep, data-driven insights into candidate selection.
                            </p>
                        </div>
                        <div className="w-full px-3 mt-auto mb-6 z-10">
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full">
                                <a
                                  href="/KAI"
                                  className="relative inline-block w-full sm:w-auto py-2 px-4 text-center font-medium rounded-md overflow-hidden bg-white text-gray-900 transition-colors duration-300 group"
                                >
                                  <span className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Learn More</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* EnSights */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.3
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 0px 25px rgba(6, 182, 212, 0.4)",
                            transition: { duration: 0.3 }
                        }}
                        className="h-[450px] group relative flex flex-col rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-cyan-500 hover:bg-gray-850 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/0 to-cyan-800/0 group-hover:from-cyan-800/10 group-hover:to-cyan-600/10 transition-all duration-500"></div>

                        <div className="w-full px-3 mt-6 mb-4 z-10">
                            <p className="text-2xl font-medium text-white group-hover:text-white transition-colors duration-300">EnSights</p>
                        </div>
                        <div className="w-full px-3 flex-grow z-10">
                            <p className="text-lg font-normal text-white group-hover:text-white transition-colors duration-300">
                                A revolutionary localized LLM solution that securely analyzes your company's sales data.
                                Transform raw data into actionable insights while keeping your sensitive information
                                completely private and on-premises.
                            </p>
                        </div>
                        <div className="w-full px-3 mt-auto mb-6 z-10">
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full">
                                <a
                                  href="/EnSights"
                                  className="relative inline-block w-full sm:w-auto py-2 px-4 text-center font-medium rounded-md overflow-hidden bg-white text-gray-900 transition-colors duration-300 group"
                                >
                                  <span className="absolute inset-0 bg-cyan-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Learn More</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* DemoLe AI */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                delay: 0.5
                            }
                        }}
                        viewport={{ amount: 0.3, once: true }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 0px 25px rgba(16, 185, 129, 0.4)",
                            transition: { duration: 0.3 }
                        }}
                        className="h-[450px] group relative flex flex-col rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-emerald-500 hover:bg-gray-850 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/0 to-emerald-800/0 group-hover:from-emerald-800/10 group-hover:to-emerald-600/10 transition-all duration-500"></div>

                        <div className="w-full px-3 mt-6 mb-4 z-10">
                            <p className="text-2xl font-medium text-white group-hover:text-white transition-colors duration-300">DemoLe AI</p>
                        </div>
                        <div className="w-full px-3 flex-grow z-10">
                            <p className="text-lg font-normal text-white group-hover:text-white transition-colors duration-300">
                                Democratizing legal assistance through AI trained on comprehensive legal data.
                                Get instant access to legal information, document analysis, and guidance for
                                common legal issues, making justice more accessible to all.
                            </p>
                        </div>
                        <div className="w-full px-3 mt-auto mb-6 z-10">
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full">
                            <a
                              href="/DemoLe"
                              className="relative inline-block w-full sm:w-auto py-2 px-4 text-center font-medium rounded-md overflow-hidden bg-white text-gray-900 transition-colors duration-300 group"
                            >
                              <span
                                className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"
                              ></span>
                              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Learn More</span>
                            </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Products;
