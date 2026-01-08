import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import AboutSection from "@/components/home/AboutSection";
import WhyUAE from "@/components/home/WhyUAE";
import JurisdictionCards from "@/components/home/JurisdictionCards";
import Stats from "@/components/home/Stats";
import ServicesSlider from "@/components/home/ServicesSlider";
import CoreValues from "@/components/home/CoreValues";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import BlogSlider from "@/components/home/BlogSlider";
import CTABanner from "@/components/home/CTABanner";
import LeadPopup from "@/components/home/LeadPopup";

export default function Home() {
  return (
    <>
      <LeadPopup />
      <Hero />
      {/* <TrustedBy /> */}
      <AboutSection />
      <WhyUAE />
      <JurisdictionCards />
      <Stats />
      <ServicesSlider />
      <CoreValues />
      <HowItWorks />
      <Testimonials />
      <BlogSlider />
      <CTABanner />
    </>
  );
}
