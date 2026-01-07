"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { navLinks, companyInfo, socialLinks } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  Facebook: <Facebook className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
};

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
          ? "bg-white shadow-md py-4"
          : "bg-dark py-6"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo/logo.png"
              alt="Star Link Logo"
              className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 object-contain"
            />
            <div className="font-display font-bold">
              <div className="text-xl md:text-2xl leading-tight text-primary">Star Link</div>
              <div className={`text-sm leading-tight ${scrolled || !isHomePage ? "text-gray-600" : "text-gray-300"}`}>Business Solutions</div>
            </div>
          </Link>

          {/* Center - Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : scrolled || !isHomePage
                    ? "text-gray-700 hover:text-primary"
                    : "text-gray-200 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - Social Icons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled || !isHomePage
                    ? "bg-gray-100 text-gray-700 hover:bg-primary hover:text-dark"
                    : "bg-white/10 text-white hover:bg-primary hover:text-dark"
                }`}
                aria-label={social.name}
              >
                {iconMap[social.icon]}
              </a>
            ))}
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
                <div className="flex items-center justify-center gap-4 py-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-dark flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      {iconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
