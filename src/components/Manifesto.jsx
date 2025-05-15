"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "../design/TextGenerateEffect";

const manifesto = 'Manifesto: A more open and private future'
const paragraph1 = `In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.`;

const paragraph2 = `At Hermeias, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Manifesto() {
  return (
    <TextGenerateEffect className="font-bold text-xl md:text-2xl lg:text-3xl" duration={0.2} filter={true} words={manifesto} />
  );
}

export function Paragraph1() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-3" duration={0.4} filter={true} words={paragraph1} />
  );
}

export function Paragraph2() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-5" delay={1.5} duration={0.5} filter={true} words={paragraph2} />
  );
}

export function Content() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-100px", once: true }}
      className="space-y-6 mb-2 mt-3"
    >
      <motion.div variants={itemVariants}>
        <p className="text-white/90">In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <p className="text-white/90">
          At <strong>Hermeias</strong>, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <p className="text-white">
          We Believe.
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Content2() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-100px", once: true }}
      className="space-y-6 mb-5 pt-3"
    >
      <motion.div variants={itemVariants}>
        <p className="text-white/90">In a world that increasingly threatens personal privacy, we offer a different path: one where you control your data, your messages, and your freedom to communicate without fear. With us, privacy isn't an afterthought — it's the foundation of everything we do.</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <p className="text-white">
          Welcome to a new era of messaging. Welcome to privacy. Welcome to <strong>Hermeias</strong>.
        </p>
      </motion.div>
    </motion.div>
  );
}

// Keep the new component as default export
const ManifestoSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Manifesto
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The principles that guide our mission to transform legal research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-white/80 mb-6">
                We believe in pushing the boundaries of legal technology, creating solutions that were once thought impossible.
              </p>
              <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-white/80 mb-6">
                We are committed to delivering the highest quality legal analysis and insights, setting new standards in the industry.
              </p>
              <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Accessibility</h3>
              <p className="text-white/80 mb-6">
                We strive to make advanced legal research tools accessible to all legal professionals, regardless of firm size.
              </p>
              <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
              <p className="text-white/80 mb-6">
                We measure our success by the positive impact we create in the legal community and the justice system.
              </p>
              <div className="flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
