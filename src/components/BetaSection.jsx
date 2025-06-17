import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "./Button";

const BetaSection = () => {
    const releaseDate = new Date("2025-07-15"); // Public beta release
    const today = new Date();
    const daysUntilRelease = Math.ceil((releaseDate - today) / (1000 * 60 * 60 * 24));

    return (
        <motion.section
            id="Beta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-20 bg-gradient-to-b from-transparent to-white/5"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join Our Beta Program
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Be among the first to experience the future of legal assistance.
                            Our closed beta is underway—reach out for an invite.
                        </p>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto mt-2">
                            Public beta opens on July 15, 2025.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group liquid-glass rounded-xl p-6 hover:border-white/30 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-8 h-8 text-blue-400" />
                                <h3 className="text-xl font-semibold text-white">Next Beta Release</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl font-bold text-white">{daysUntilRelease}</span>
                                    <span className="text-lg text-white/70">days until release</span>
                                </div>
                                <div className="text-white/70 space-y-2">
                                    <p className="text-base">Release Date: July 15, 2025 (Tentative)</p>
                                    <p className="flex items-center gap-2 text-base">
                                        <Clock className="w-4 h-4" />
                                        <span>12:00 PM IST</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group liquid-glass rounded-xl p-6 hover:border-white/30 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-white mb-6">Beta Program Benefits</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-medium text-white mb-1">Early Access</h4>
                                        <p className="text-white/70 text-sm">Get first access to all new features and updates</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-medium text-white mb-1">Direct Influence</h4>
                                        <p className="text-white/70 text-sm">Shape the future of legal assistance with your feedback</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-medium text-white mb-1">Priority Support</h4>
                                        <p className="text-white/70 text-sm">Dedicated support channels for beta testers</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-medium text-white mb-1">Exclusive Features</h4>
                                        <p className="text-white/70 text-sm">Access to beta-only features and capabilities</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Button
                                    href="/contact"
                                    white
                                    className="w-full sm:w-auto font-semibold flex items-center justify-center gap-2"
                                >
                                    Request Beta Access
                                    <ArrowRight className="w-4 h-4" />
                                </Button>

                                {/* <button className="w-full sm:w-auto border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </button> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default BetaSection;
