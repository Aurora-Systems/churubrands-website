"use client"

import { Egg, Baby, Home, Package, ShoppingCart, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Egg,
    title: "Egg Production",
    description: "Premium fertile eggs from healthy parent stock with optimal incubation.",
  },
  {
    icon: Baby,
    title: "Day-Old Chicks",
    description: "Healthy, vaccinated chicks ready for your brooding operation.",
  },
  {
    icon: Home,
    title: "Contract Growing",
    description: "Partner with us for guaranteed markets and technical support.",
  },
  {
    icon: Package,
    title: "Processing",
    description: "Processing for safe, quality products.",
  },
  {
    icon: ShoppingCart,
    title: "Retail Supply",
    description: "Fresh products for supermarkets and retail outlets.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Cold chain logistics ensuring product freshness.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive poultry solutions tailored to meet the needs of farmers, retailers, and consumers across
            Zimbabwe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
