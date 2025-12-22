"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax-section"
        style={{
          backgroundImage: "url('https://cdn.clipond.com/ChuruBrands/1406.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/80">
          Zimbabwe&apos;s Premier Poultry Production
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          From Egg to Table,
          <br />
          Excellence at Every Stage
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          End-to-end poultry solutions with uncompromising quality and sustainable practices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore Our Process
          </Button>
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}
