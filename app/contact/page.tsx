import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our business setup experts. Contact us for a free consultation about company formation in UAE.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We are here to help you start your business journey"
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="pb-20 bg-gray-50">
        <div className="container-custom">
          <Map />
        </div>
      </section>
    </>
  );
}
