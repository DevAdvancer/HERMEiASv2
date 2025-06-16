import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StarsBackground } from "../design/StarsBackground";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const form = e.target;
        const formData = new FormData(form);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        });

        const data = await response.json();

        if (data.success) {
          setIsSubmitted(true);
          setResult("Form submitted successfully!");

          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });

          // Reset submission status after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setResult('');
          }, 5000);
        } else {
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setResult("Something went wrong!");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />
      <Header />
      <main className="relative z-10">
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
                Get in Touch
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Have questions or want to learn more? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                      <a href="mailto:contact@hermeias.com" className="text-white/70 hover:text-white transition-colors">
                        contact@hermeias.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                      <a href="tel:+16076980322" className="text-white/70 hover:text-white transition-colors">
                        +1 607-698-0322
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>24/7 Available</li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                  {isSubmitted ? (
                    <div className="bg-green-900/30 border border-green-500/50 text-green-300 p-4 rounded-lg mb-6">
                      <p className="font-medium">Thank you for your message!</p>
                      <p>We've received your inquiry and will get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form id="form" onSubmit={handleSubmit}>
                      <input type="hidden" name="access_key" value="422436dc-1065-41f7-bea0-9451db50ed4a" />
                      <input type="hidden" name="subject" value="New Contact Form Submission from Website" />
                      <input type="hidden" name="from_name" value="Hermeias Contact Form" />
                      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-white/80 font-medium mb-2">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-white/30 focus:ring focus:ring-white/10 focus:ring-opacity-50 text-white placeholder-white/30 transition-colors`}
                            placeholder="Your Name"
                            required
                          />
                          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-white/80 font-medium mb-2">Your Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} focus:border-white/30 focus:ring focus:ring-white/10 focus:ring-opacity-50 text-white placeholder-white/30 transition-colors`}
                            placeholder="email@example.com"
                            required
                          />
                          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-white/80 font-medium mb-2">Phone Number (Optional)</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:ring focus:ring-white/10 focus:ring-opacity-50 text-white placeholder-white/30 transition-colors"
                          placeholder="+1 XXXXX XXXXX"
                        />
                      </div>

                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-white/80 font-medium mb-2">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} focus:border-white/30 focus:ring focus:ring-white/10 focus:ring-opacity-50 text-white placeholder-white/30 transition-colors`}
                          placeholder="How can we help you?"
                          required
                        />
                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                      </div>

                      <div className="mb-6">
                        <label htmlFor="message" className="block text-white/80 font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} focus:border-white/30 focus:ring focus:ring-white/10 focus:ring-opacity-50 text-white placeholder-white/30 transition-colors`}
                          placeholder="Tell us more about your project, needs, and timeline..."
                          required
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-md font-medium flex items-center justify-center transition-all duration-300 border border-white/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white/20'} w-full`}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>
                            Send Message
                            <Send size={18} className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                  <p className="text-center text-white/50 mt-4" id="result">{result}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
