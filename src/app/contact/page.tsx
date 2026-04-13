"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 bg-background text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-6xl md:text-8xl tracking-wider uppercase text-text-primary mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-text-muted font-sans text-xl max-w-2xl mx-auto"
        >
          Have materials to trade or require comprehensive waste management? Our experts are ready to partner with you.
        </motion.p>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-6 max-w-5xl">
          <GlassCard borderAccent="gold" className="flex flex-col items-center text-center p-8">
            <div className="w-12 h-12 mx-auto rounded-full border border-border-dark flex items-center justify-center text-accent-gold mb-6">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-3xl mb-4">Head Office</h3>
            <p className="font-sans text-sm text-text-muted">
              Rana Bhawan, Village Wazidpur Khurd,<br/>
              Khatauli, Dist. Muzaffarnagar,<br/>
              Uttar Pradesh, India
            </p>
          </GlassCard>
          
          <GlassCard borderAccent="blue" className="flex flex-col items-center text-center p-8">
            <div className="w-12 h-12 mx-auto rounded-full border border-border-dark flex items-center justify-center text-accent-blue mb-6">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-3xl mb-4">Direct Lines</h3>
            <div className="flex flex-col gap-2 font-mono text-sm text-text-muted">
              <a href="tel:+919457141414" className="hover:text-accent-gold transition-colors">+91-9457141414</a>
              <a href="tel:+919760141414" className="hover:text-accent-gold transition-colors">+91-9760141414</a>
              <a href="tel:+917078141414" className="hover:text-accent-gold transition-colors">+91-7078141414</a>
            </div>
          </GlassCard>

          <GlassCard borderAccent="gold" className="flex flex-col items-center text-center p-8">
            <div className="w-12 h-12 mx-auto rounded-full border border-border-dark flex items-center justify-center text-accent-gold mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-3xl mb-4">Working Hours</h3>
            <p className="font-sans text-sm text-text-muted">
              Monday – Friday<br/>
              9:00 AM – 5:00 PM (IST)<br/>
              <span className="text-xs text-border-dark">(Closed on National Holidays)</span>
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 3. WHATSAPP & FORM SECTION */}
      <section className="py-24 bg-surface-1 border-y border-border-dark">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-16">
          
          {/* Left CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-5xl mb-6 text-glow-gold">Fast-track your inquiry.</h2>
            <p className="font-sans text-text-muted text-lg mb-10 leading-relaxed">
              For immediate quotes on scrap pricing, logistics arrangements, or urgent consulting requirements, messaging us directly on WhatsApp is the fastest channel.
            </p>
            <a 
              href="https://wa.me/919457141414" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors py-4 px-8 font-heading text-2xl tracking-wide rounded-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] max-w-md"
            >
              <MessageCircle className="w-6 h-6" /> Message us on WhatsApp
            </a>
          </div>

          {/* Right Form */}
          <div className="bg-surface-2 p-8 border border-border-dark shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-accent-blue"></div>
            <h3 className="font-heading text-4xl mb-8">Send an Email</h3>
            
            <form action="https://formspree.io/f/placeholder" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Name</label>
                  <input type="text" name="name" required className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Company</label>
                  <input type="text" name="company" className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Phone</label>
                  <input type="tel" name="phone" required className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Email</label>
                  <input type="email" name="email" required className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Service Interested In</label>
                <select name="service" className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary appearance-none">
                  <option value="scrap">Scrap Processing</option>
                  <option value="waste">Waste Management</option>
                  <option value="trading">Materials Trading</option>
                  <option value="consulting">Sustainable Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-text-muted">Message</label>
                <textarea name="message" rows={4} required className="bg-background border border-border-dark px-4 py-3 font-sans focus:outline-none focus:border-accent-gold transition-colors text-text-primary resize-none"></textarea>
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-text-primary text-background hover:bg-accent-gold transition-colors py-4 font-mono text-sm uppercase tracking-widest font-bold mt-2">
                Submit Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. MAP EMBED */}
      <section className="h-[500px] w-full bg-surface-2 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.626815349544!2d77.726593!3d29.283181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c3cfc79e7df11%3A0xe67ca3ce45d7d9f2!2sKhatauli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border-t-4 border-accent-gold/50"></div>
      </section>

    </div>
  );
}
