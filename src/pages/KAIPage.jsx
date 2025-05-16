import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { Brain, FileSearch, Target, Check, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Hiring",
    description: "Personalized hiring process powered by advanced AI algorithms that adapt to each position's needs",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: FileSearch,
    title: "Resume Screening",
    description: "Engaging application analysis and evaluations designed to maximize candidate potential",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and track hiring goals with real-time progress monitoring and achievement metrics",
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    icon: Check,
    title: "Unbiased Selection",
    description: "Connect with candidates in virtual spaces for enhanced engagement and fair assessment",
    color: "from-emerald-500/20 to-emerald-600/20"
  },
  {
    icon: Clock,
    title: "Flexible Hiring",
    description: "Recruit at your own pace with 24/7 access to candidate materials and resources",
    color: "from-rose-500/20 to-rose-600/20"
  },
  {
    icon: Zap,
    title: "Quick Progress",
    description: "Accelerate your hiring journey with optimized selection paths and instant feedback",
    color: "from-indigo-500/20 to-indigo-600/20"
  }
];

const KAIPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Section
          padding="pt-32 pb-16 md:pt-40 md:pb-24"
          background="bg-black"
          overlay
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">KAI</h1>
            <p className="text-xl text-gray-400 mb-8">
              Knowledgeable Applicant Insights for hiring and recruitment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
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
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 flex-grow">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-blue-900/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Coming Soon</h2>
                <p className="text-gray-300 mb-4">
                  KAI is in development, bringing innovative solutions to companies for enhanced candidate selection.
                </p>
                <p className="text-gray-300">
                  Join our waiting list to be among the first to experience this revolutionary hiring platform.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default KAIPage;
