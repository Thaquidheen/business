"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/lib/data";

const contactItems = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    value: companyInfo.address,
    href: "#map",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: companyInfo.hours,
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-2xl font-bold text-dark mb-4">
          Get in Touch
        </h3>
        <p className="text-gray-600 mb-8">
          Have questions? We&apos;d love to hear from you. Send us a message or
          reach out using any of the methods below.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {item.href ? (
              <a
                href={item.href}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
