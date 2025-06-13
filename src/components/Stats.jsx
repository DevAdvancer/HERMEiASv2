import { motion } from "framer-motion";
import { Users, Clock, FileText, Zap } from "lucide-react";
import Button from "./Button";

const stats = [
    {
        icon: Users,
        value: "Beta",
        label: "Testing Upcoming",
        description: "Legal professionals using our platform"
    },
    // Commented stats remain available for future use
];

const Stats = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">

            {/* Subtle animated background elements that match the theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 mb-4 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/80 border border-white/10">
                        CURRENT STATUS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Production Stage
                    </h2>
                    <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{
                                y: -5,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
                        >
                            {/* Enhanced gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Subtle glow effect on hover */}
                            <div className="absolute -inset-px rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <motion.div
                                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 border border-white/5"
                                    whileHover={{
                                        rotate: 10,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <stat.icon className="w-6 h-6 text-white" />
                                </motion.div>

                                {/* Remove redundant link styling - we'll use the button only */}
                                <h3 className="text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </h3>

                                <p className="text-lg font-semibold text-white mb-2">{stat.label}</p>
                                <p className="text-white/60">{stat.description}</p>

                                {/* Square button */}
                                <Button
                                    href="/DemoLe#Beta"
                                    className="mt-6 border border-white/20 bg-white/10 rounded-none text-sm font-medium"
                                    px="px-6 py-2.5"
                                    variant="secondary"
                                >
                                    View Project
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default Stats;
