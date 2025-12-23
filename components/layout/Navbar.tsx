"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              {/* Logo SVG - Gold Star with Red/Blue Arrows */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Gold Star */}
                <polygon
                  points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
                  fill="#D4AF37"
                />
                {/* Red Arrow (going up) */}
                <path
                  d="M 25 70 Q 30 30, 60 20 L 55 10 L 75 25 L 55 35 L 60 25 Q 35 35, 30 65 Z"
                  fill="#E63946"
                />
                {/* Blue Arrow (going down) */}
                <path
                  d="M 75 30 Q 70 70, 40 80 L 45 90 L 25 75 L 45 65 L 40 75 Q 65 65, 70 35 Z"
                  fill="#1D4E89"
                />
              </svg>
            </div>
            <span
              className={`font-display text-xl font-bold ${
                scrolled || !isHomePage ? "text-dark" : "text-white"
              }`}
            >
              {companyInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`link-underline font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : scrolled || !isHomePage
                    ? "text-dark hover:text-primary"
                    : "text-white hover:text-primary-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className={`flex items-center gap-2 font-medium ${
                scrolled || !isHomePage ? "text-dark" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${
              scrolled || !isHomePage ? "text-dark" : "text-white"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`font-medium py-2 ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-dark font-medium py-2"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
