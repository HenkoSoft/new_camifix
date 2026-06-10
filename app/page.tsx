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
  "@id": "https://camifix.com.ar/#localbusiness",
  name: business.name,
  description:
    "Servicio técnico especializado en reparación de celulares y notebooks en Marcos Paz, Buenos Aires.",
  url: "https://camifix.com.ar",
  telephone: "+541160479367",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.province,
    addressCountry: "AR",
  },
  areaServed: ["Marcos Paz", "Buenos Aires", "Argentina"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:30",
      closes: "20:00",
    },
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
    },
  })),
  sameAs: ["https://www.instagram.com/"],
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
