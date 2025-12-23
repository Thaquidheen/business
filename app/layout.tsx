import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "[Company Name] - Business Setup Consultants in UAE",
    template: "%s | [Company Name]",
  },
  description: "Expert business setup consultants in UAE with 20+ years of experience. We help entrepreneurs establish mainland, free zone, and offshore companies in Dubai, Abu Dhabi, and across all Emirates.",
  keywords: ["business setup UAE", "company formation Dubai", "free zone company", "mainland company UAE", "PRO services", "visa processing UAE"],
  authors: [{ name: "[Company Name]" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "[Company Name]",
    title: "[Company Name] - Business Setup Consultants in UAE",
    description: "Expert business setup consultants in UAE with 20+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
