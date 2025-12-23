"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileText,
  Stamp,
  FolderCheck,
  Briefcase,
  Shield,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: { [key: string]: React.ReactNode } = {
  formation: <Building2 className="w-6 h-6" />,
  licensing: <FileText className="w-6 h-6" />,
  visa: <Stamp className="w-6 h-6" />,
  pro: <FolderCheck className="w-6 h-6" />,
  corporate: <Briefcase className="w-6 h-6" />,
  compliance: <Shield className="w-6 h-6" />,
};

const serviceCategories = [
  {
    id: "formation",
    title: "Company Formation",
    description: "Complete business setup solutions for all company types",
    services: [
      "Mainland LLC Setup",
      "Free Zone Company (DMCC, IFZA, RAKEZ, etc.)",
      "Offshore Company Registration",
      "Branch Office Setup",
      "Representative Office",
    ],
  },
  {
    id: "licensing",
    title: "Licensing Services",
    description: "All types of trade license processing and amendments",
    services: [
      "Commercial License",
      "Professional License",
      "Industrial License",
      "E-commerce License",
      "License Renewal & Amendment",
    ],
  },
  {
    id: "visa",
    title: "Visa & Immigration",
    description: "Complete visa processing for investors and employees",
    services: [
      "Investor/Partner Visa",
      "Employee Visa",
      "Family Visa",
      "Golden Visa Assistance",
      "Visa Renewal & Cancellation",
    ],
  },
  {
    id: "pro",
    title: "PRO Services",
    description: "Government liaison and document processing",
    services: [
      "Document Attestation",
      "Emirates ID Processing",
      "Medical Fitness",
      "Labor Card",
      "Establishment Card",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Services",
    description: "Additional business support services",
    services: [
      "Bank Account Opening",
      "Virtual Office",
      "Business Plan Writing",
      "Feasibility Studies",
      "Accounting & Bookkeeping",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Tax",
    description: "Stay compliant with UAE regulations",
    services: [
      "VAT Registration",
      "Corporate Tax Registration",
      "Annual Audit",
      "ESR Compliance",
      "AML Compliance",
    ],
  },
];

export default function ServiceCategories() {
  const [activeTab, setActiveTab] = useState("formation");

  const activeCategory = serviceCategories.find((cat) => cat.id === activeTab);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="What We Offer"
          title="Our Service Categories"
          subtitle="Comprehensive solutions for every aspect of your business setup"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all ${
                activeTab === category.id
                  ? "bg-primary text-dark shadow-gold"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {iconMap[category.id]}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Info */}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {iconMap[activeCategory.id]}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-dark mb-4">
                    {activeCategory.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {activeCategory.description}
                  </p>
                  <a
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Services List */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h4 className="font-semibold text-dark mb-4">
                    Services Included:
                  </h4>
                  <ul className="space-y-3">
                    {activeCategory.services.map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-gray-600">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
