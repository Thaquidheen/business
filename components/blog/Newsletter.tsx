"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 gradient-gold-blue">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8">
            Stay updated with the latest business news, guides, and insights
            about setting up your company in UAE.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white mt-4"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
