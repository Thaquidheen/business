"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { companyInfo, footerLinks, socialLinks } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  Facebook: <Facebook className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white" style={{ backgroundColor: '#1A1A2E', backgroundImage: 'none', isolation: 'isolate' }}>
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
                    fill="#D4AF37"
                  />
                  <path
                    d="M 25 70 Q 30 30, 60 20 L 55 10 L 75 25 L 55 35 L 60 25 Q 35 35, 30 65 Z"
                    fill="#E63946"
                  />
                  <path
                    d="M 75 30 Q 70 70, 40 80 L 45 90 L 25 75 L 45 65 L 40 75 Q 65 65, 70 35 Z"
                    fill="#1D4E89"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-6">
              Expert business setup consultants in UAE with 20+ years of experience helping
              entrepreneurs establish successful businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-300">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
