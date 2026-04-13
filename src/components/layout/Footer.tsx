import Link from "next/link";
import Image from "next/image";
import { Globe, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Ranabalvir Group Logo" width={48} height={48} className="object-contain rounded-md" />
              <span className="font-heading text-2xl tracking-wider text-text-primary">
                RANABALVIR GROUP
              </span>
            </Link>
            <p className="text-accent-gold font-mono text-sm mb-4">Transforming Waste into Wealth</p>
            <p className="text-text-muted text-sm max-w-sm mb-6">
              Sustainable recycling, scrap metal processing, industrial waste management, and materials trading.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-text-muted hover:text-accent-gold hover:border-accent-gold transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919457141414" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-text-muted hover:text-accent-gold hover:border-accent-gold transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl tracking-wide mb-6 text-text-primary">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-text-muted">
              <li><Link href="/about" className="hover:text-accent-gold transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-accent-gold transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-accent-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-accent-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl tracking-wide mb-6 text-text-primary">Services</h4>
            <ul className="space-y-3 font-sans text-sm text-text-muted">
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Scrap Processing</Link></li>
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Waste Management</Link></li>
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Metal Recycling</Link></li>
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Materials Trading</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Ranabalvir Group Private Limited. All Rights Reserved.
          </p>
          <p className="text-text-muted text-xs text-center md:text-right max-w-sm">
            Registered address: Rana Bhawan, Village Wazidpur Khurd, Khatauli, Dist. Muzaffarnagar, UP
          </p>
        </div>
      </div>
    </footer>
  );
}
