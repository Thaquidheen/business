import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import JurisdictionCards from "@/components/home/JurisdictionCards";
import Stats from "@/components/home/Stats";
import ServicesSlider from "@/components/home/ServicesSlider";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import BlogSlider from "@/components/home/BlogSlider";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <JurisdictionCards />
      <Stats />
      <ServicesSlider />
      <HowItWorks />
      <Testimonials />
      <BlogSlider />
      <CTABanner />
    </>
  );
}
