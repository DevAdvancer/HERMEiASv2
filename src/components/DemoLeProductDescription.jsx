'use client'
import { motion } from "framer-motion";
import { Brain, Shield, Clock, MessageSquare, FileText, Zap } from "lucide-react";
import PhoneRight from "../assets/PhoneRight2.png";

const features = [
    {
        icon: Brain,
        title: "AI-Powered Analysis",
        description: "Advanced natural language processing to understand and analyze legal documents with human-like comprehension",
        color: "from-blue-500/20 to-blue-600/20"
    },
    {
        icon: Shield,
        title: "Secure & Confidential",
        description: "Enterprise-grade security with end-to-end encryption to protect your sensitive legal information",
        color: "from-purple-500/20 to-purple-600/20"
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock legal assistance at your convenience without the constraints of traditional office hours",
        color: "from-amber-500/20 to-amber-600/20"
    },
    {
        icon: MessageSquare,
        title: "Natural Interaction",
        description: "Chat-based interface that makes legal assistance as simple as having a conversation",
        color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
        icon: FileText,
        title: "Document Generation",
        description: "Automatically generate legal documents, contracts, and agreements with customizable templates",
        color: "from-rose-500/20 to-rose-600/20"
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Get blazing fast responses and document analysis in seconds, not hours or days at your fingertips",
        color: "from-indigo-500/20 to-indigo-600/20"
    }
];

const DemoLeProductDescription = () => {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Revolutionizing Legal Assistance
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Experience the future of legal assistance with our AI-powered platform that combines cutting-edge technology with user-friendly design
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                        <div className="liquid-glass relative rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Smart Legal Assistant</h3>
                            <p className="text-white/70 mb-6">
                                Our AI-powered legal assistant understands your needs and provides accurate, context-aware responses. Whether you're drafting documents, analyzing contracts, or seeking legal advice, DemoLe is your 24/7 legal companion.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/70">Natural language understanding</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/70">Context-aware responses</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/70">Continuous learning and improvement</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <img src={PhoneRight} alt="DemoLe App Interface" className="max-h-[32rem] object-contain" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="liquid-glass relative flex flex-col h-full rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/70 mt-auto">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoLeProductDescription;