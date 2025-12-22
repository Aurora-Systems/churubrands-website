"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  services: string[]
  image: string
  isReversed?: boolean
}

export function ParallaxSection({
  id,
  number,
  title,
  subtitle,
  description,
  services,
  image,
  isReversed = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative min-h-screen flex items-center">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-section" style={{ backgroundImage: `url('${image}')` }} />

      {/* Overlay - darker on the content side */}
      <div
        className={cn(
          "absolute inset-0",
          isReversed
            ? "bg-gradient-to-l from-foreground/90 via-foreground/70 to-foreground/40"
            : "bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40",
        )}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={cn("max-w-xl", isReversed ? "ml-auto" : "mr-auto")}>
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <span className="text-7xl md:text-8xl font-serif font-bold text-white/20">{number}</span>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mt-2 mb-2">{subtitle}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{title}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{description}</p>

            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
