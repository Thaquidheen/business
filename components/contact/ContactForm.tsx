"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Company Formation",
  "Trade License",
  "Visa Services",
  "PRO Services",
  "Bank Account",
  "Accounting & Tax",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-card text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-bold text-dark mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              message: "",
            });
          }}
          className="text-primary font-medium hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-card"
    >
      <h3 className="font-display text-2xl font-bold text-dark mb-6">
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+971 50 123 4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="form-input resize-none"
            placeholder="Tell us about your business needs..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send Message
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </motion.div>
  );
}
