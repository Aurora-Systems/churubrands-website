import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const productionStages = [
  {
    id: "eggs",
    number: "01",
    title: "Egg Production",
    subtitle: "Where Life Begins",
    description:
      "Our journey starts with premium quality eggs sourced from healthy, well-nurtured parent stock. We maintain strict biosecurity measures and optimal incubation conditions to ensure the highest hatch rates and chick quality.",
    services: ["Fertile egg production", "Egg grading & selection", "Incubation services", "Quality assurance"],
    image: "/fresh-chicken-eggs-in-incubator-farm-production.jpg",
  },
  {
    id: "chicks",
    number: "02",
    title: "Day-Old Chicks",
    subtitle: "Healthy Beginnings",
    description:
      "We produce robust, vaccinated day-old chicks ready for brooding. Our hatchery uses state-of-the-art technology to ensure uniform, healthy chicks that meet the highest industry standards.",
    services: ["Broiler chicks", "Layer chicks", "Vaccination programs", "Chick delivery services"],
    image: "/baby-yellow-chicks-in-modern-poultry-hatchery.jpg",
  },
  {
    id: "raising",
    number: "03",
    title: "Poultry Raising",
    subtitle: "Nurturing Growth",
    description:
      "Our modern poultry houses provide optimal conditions for healthy bird development. We implement best practices in nutrition, climate control, and disease prevention to raise premium quality chickens.",
    services: ["Contract growing", "Feed programs", "Technical support", "Health monitoring"],
    image: "https://cdn.clipond.com/ChuruBrands/1408.jpg",
  },
  {
    id: "packaging",
    number: "04",
    title: "Processing & Packaging",
    subtitle: "Quality Assured",
    description:
      "Our processing facility ensures the highest standards of food safety and quality. From slaughter to packaging, every step is carefully monitored to deliver fresh, wholesome products.",
    services: ["Whole chickens", "Chicken portions", "Custom cuts", "Vacuum packaging"],
    image: "https://cdn.clipond.com/ChuruBrands/64815.jpg",
  },
  {
    id: "selling",
    number: "05",
    title: "Distribution & Sales",
    subtitle: "Farm to Table",
    description:
      "We deliver fresh poultry products directly to retailers, restaurants, and consumers across Zimbabwe. Our cold chain logistics ensure products reach you in perfect condition.",
    services: ["Wholesale supply", "Retail partnerships", "Direct sales", "Export services"],
    image: "https://cdn.clipond.com/ChuruBrands/21866.jpg",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      {productionStages.map((stage, index) => (
        <ParallaxSection key={stage.id} {...stage} isReversed={index % 2 !== 0} />
      ))}

      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
