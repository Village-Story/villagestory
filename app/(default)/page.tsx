export const metadata = {
  title: "Village Story ERP & POS Solutions",
  description: "POS and ERP solutions for Indian Businesses",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import RequestDemo from "@/components/request-demo";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
    <Workflows />
      <Features />
      <Testimonials />
      <RequestDemo/>
      <Cta />
    </>
  );
}
