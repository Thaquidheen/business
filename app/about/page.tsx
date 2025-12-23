import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Achievements from "@/components/about/Achievements";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our 20+ years of experience helping entrepreneurs establish successful businesses in the UAE. Meet our expert team and discover our mission.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="20+ years of empowering businesses in the UAE"
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />
      <OurStory />
      <MissionVision />
      <Values />
      <Team />
      <Achievements />
      <CTABanner />
    </>
  );
}
