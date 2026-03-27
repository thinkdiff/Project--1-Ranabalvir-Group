"use client";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { GlassCard } from "@/components/ui/GlassCard";
import { Leaf, Wind, Droplets, Zap, ShieldCheck } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-border-dark">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(#2A6EBB 1px, transparent 1px), linear-gradient(90deg, #2A6EBB 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl uppercase text-text-primary mb-6"
          >
            Engineering a <span className="text-accent-blue text-glow-blue">Greener Tomorrow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-text-muted font-sans max-w-3xl mx-auto"
          >
            At Ranabalvir Group, sustainability isn't an afterthought—it's the core operational principle driving our entire processing network.
          </motion.p>
        </div>
      </section>

      {/* 2. STATS (Animated CO2) */}
      <section className="py-24 bg-surface-1">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl mb-6 text-accent-blue">The Impact of Metal Recovery</h2>
              <p className="font-sans text-text-muted leading-relaxed mb-6">
                Recycling steel requires 74% less energy than producing it from virgin iron ore. Our large-scale operations directly mitigate the need for primary extraction, preserving natural landscapes and drastically reducing greenhouse gas emissions.
              </p>
              <div className="flex items-center gap-4 text-sm font-mono text-accent-gold uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5" /> Audited Environmental Compliance
              </div>
            </div>

            <GlassCard borderAccent="blue" className="text-center p-12">
              <Wind className="w-16 h-16 text-accent-blue mx-auto mb-6 opacity-80" />
              <div className="font-heading text-6xl text-text-primary mb-2 shadow-text">
                <Counter end={125000} duration={3} suffix="+" />
              </div>
              <p className="font-sans text-text-muted font-medium mb-2">Tons of CO₂ Emissions Prevented</p>
              <p className="font-mono text-xs text-accent-blue uppercase tracking-widest">Since 2020</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3. GREEN COMMITMENTS */}
      <section className="py-24 bg-surface-2 border-y border-border-dark">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-5xl mb-16 text-center text-text-primary">Our Environmental Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Zero Landfill Policy", icon: <Leaf />, desc: "100% of the scrap material moving through our facilities is segregated, processed, and reintroduced into the industrial lifecycle." },
              { title: "Water Conservation", icon: <Droplets />, desc: "Closed-loop cooling systems in our melting units reduce fresh water consumption by over 80% compared to legacy plants." },
              { title: "Energy Efficiency", icon: <Zap />, desc: "State-of-the-art shedding and baling equipment minimizes power draw per ton of processed material." },
            ].map((pillar, i) => (
              <GlassCard key={i} borderAccent="blue" className="p-8">
                <div className="text-accent-blue mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-3xl mb-4 text-text-primary">{pillar.title}</h3>
                <p className="font-sans text-text-muted leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AATMANIRBHAR BHARAT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-surface-1 border-2 border-accent-gold flex items-center justify-center mb-8">
             <ShieldCheck className="w-10 h-10 text-accent-gold" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-text-primary">Aligned with Aatmanirbhar Bharat</h2>
          <p className="font-sans text-text-muted text-lg leading-relaxed">
            By establishing a robust secondary raw material supply chain within India, we directly support the nation's <strong>"Self-Reliant India"</strong> (Aatmanirbhar Bharat) initiative. Minimizing reliance on imported scrap and raw metals ensures economic resilience and fosters domestic industrial growth.
          </p>
        </div>
      </section>

    </div>
  );
}
