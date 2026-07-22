import { Benefits } from "@/components/site/benefits";
import { Brands } from "@/components/site/brands";
import { FinalCta } from "@/components/site/final-cta";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";
import { business, services } from "@/lib/site-data";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.camifix.com/#localbusiness",
  name: business.name,
  description:
    "Servicio técnico online especializado en reparación de celulares y notebooks.",
  url: "https://www.camifix.com",
  telephone: "+541160479367",
  priceRange: "$$",
  areaServed: ["Argentina"],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
    },
  })),
  sameAs: ["https://www.instagram.com/camifix/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <Process />
        <Benefits />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
