import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Legal Consultant",
        company: "Johnson & Associates",
        content: "HERMEiAS has revolutionized how we handle legal research. The AI-powered insights have significantly reduced our case preparation time.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Corporate Lawyer",
        company: "TechLegal Inc.",
        content: "The accuracy and depth of legal analysis provided by HERMEiAS is unmatched. It's like having a senior partner available 24/7.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Legal Tech Director",
        company: "FutureLaw Group",
        content: "HERMEiAS has transformed our legal operations. The AI's ability to understand complex legal scenarios is truly impressive.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Discover how HERMEiAS is transforming legal practices worldwide
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-white fill-current" />
                                    ))}
                                </div>
                                <p className="text-white/80 text-lg mb-6">{testimonial.content}</p>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-white/60">{testimonial.role}</p>
                                    <p className="text-white/40 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 