import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceShowcase from "@/components/services/ServiceShowcase";
import FreeZoneSlider from "@/components/services/FreeZoneSlider";
import PricingPackages from "@/components/services/PricingPackages";
import FAQ from "@/components/services/FAQ";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive business setup services in UAE including company formation, trade licensing, visa processing, PRO services, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete business setup solutions under one roof"
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />
      <ServiceShowcase />
      <FreeZoneSlider />
      <PricingPackages />
      <FAQ />
      <CTABanner />
    </>
  );
}
