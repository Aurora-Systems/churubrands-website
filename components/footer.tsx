import Link from "next/link"
import { Egg, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  production: [
    { label: "Egg Production", href: "#eggs" },
    { label: "Day-Old Chicks", href: "#chicks" },
    { label: "Poultry Raising", href: "#raising" },
    { label: "Processing", href: "#packaging" },
    { label: "Distribution", href: "#selling" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Egg className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-background">Churubrands</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Zimbabwe&apos;s premier end-to-end poultry production facility. Quality chicken products from egg to
              table.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Production Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Production</h4>
            <ul className="space-y-2">
              {footerLinks.production.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          {/* <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="mailto:info@churubrands.co.zw" className="hover:text-primary transition-colors">
                  info@churubrands.co.zw
                </a>
              </li>
              <li>
                <a href="tel:+263773436241" className="hover:text-primary transition-colors">
                  +263 773 436 241
                </a>
              </li>
              <li>
                23 Hermiston Farm,
                <br />
                Glendale, Bindura,
                <br />
                Zimbabwe
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">© {new Date().getFullYear()} Churubrands. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-background/50">
              {/* <Link href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Terms of Service
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
