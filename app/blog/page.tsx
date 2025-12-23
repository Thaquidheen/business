import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest UAE business news, guides, and insights. Expert articles on company formation, visas, tax compliance, and more.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights & Resources"
        subtitle="Stay updated with UAE business news and guides"
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
