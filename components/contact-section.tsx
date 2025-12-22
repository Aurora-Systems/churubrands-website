"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@churubrands.co.zw",
    href: "mailto:info@churubrands.co.zw",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+263 773 436 241",
    href: "tel:+263773436241",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "23 Hermiston Farm, Glendale, Bindura, Zimbabwe",
    href: "https://maps.google.com/?q=Glendale+Bindura+Zimbabwe",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration - these should be set as environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please set environment variables.")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: formData.full_name,
          email: formData.email,
          contact_number: formData.contact_number,
          message: formData.message,
        },
        publicKey
      )

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        contact_number: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to partner with Zimbabwe&apos;s leading poultry producer? Reach out to us for inquiries, orders, or
            partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-none">
                <CardContent className="p-4">
                  <a
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-none">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="full_name"
                      name="full_name"
                      placeholder="Your name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact_number" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="contact_number"
                    name="contact_number"
                    type="tel"
                    placeholder="+263 7XX XXX XXX"
                    value={formData.contact_number}
                    onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
