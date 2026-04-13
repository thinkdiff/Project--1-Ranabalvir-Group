"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { Shield, Leaf, Lightbulb, CheckCircle2, Handshake, Users2, Award } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    { year: "2008", title: "Inception", desc: "Founded in Muzaffarnagar with a vision to organize scrap metal trading." },
    { year: "2012", title: "First Industrial Client", desc: "Started servicing large scale steel plants in Uttar Pradesh." },
    { year: "2016", title: "Processing Facility", desc: "Opened a state-of-the-art 5-acre segregation and melting unit." },
    { year: "2020", title: "Green Initiative", desc: "Expanded into comprehensive industrial waste management with ISO certifications." },
    { year: "2024", title: "Pan-India Reach", desc: "Operations running across 5 states, processing over 50,000 tons annually." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000&auto=format&fit=crop"
            alt="Scrap Metal Processing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-8xl tracking-wider uppercase text-glow-gold"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl text-text-muted max-w-2xl mx-auto font-sans"
          >
            Pioneering the circular economy through organized, compliant, and scale-driven material recovery.
          </motion.p>
        </div>
      </section>

      {/* 2. OUR STORY (Timeline) */}
      <section className="py-24 bg-surface-1">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="font-heading text-5xl mb-16 text-center text-text-primary">Journey Built on Steel</h2>
          
          <div className="relative border-l border-border-dark md:border-none">
            {/* Desktop timeline center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-dark -translate-x-1/2 shrink-0"></div>
            
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 p-4 md:px-12 pl-8 md:text-right flex flex-col justify-center">
                    <h3 className="font-heading text-4xl text-accent-gold mb-2">{item.year}</h3>
                    <h4 className="font-mono uppercase tracking-widest text-text-primary mb-2 text-sm">{item.title}</h4>
                    <p className="text-text-muted font-sans text-sm">{item.desc}</p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-auto w-3 h-3 bg-accent-gold rounded-full shadow-[0_0_10px_#C9A84C]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="relative py-32 bg-background overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard borderAccent="gold" className="h-full p-8 md:p-12">
                <h3 className="font-heading text-5xl mb-6 text-text-primary">Mission</h3>
                <p className="text-xl text-text-muted leading-relaxed font-sans">
                  To provide world-class, environmentally responsible industrial waste management and metal recycling solutions. We minimize ecological impact while maximizing the economic value of secondary raw materials for our partners.
                </p>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard borderAccent="blue" className="h-full p-8 md:p-12">
                <h3 className="font-heading text-5xl mb-6 text-text-primary">Vision</h3>
                <p className="text-xl text-text-muted leading-relaxed font-sans">
                  To establish Ranabalvir Group as the premier catalyst in India's transition to a circular economy, setting universal benchmarks for integrity, efficiency, and sustainable processing in the materials trading sector.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP */}
      <section className="py-24 bg-surface-2">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl text-text-primary mb-4">Leadership</h2>
            <p className="font-mono text-accent-gold tracking-widest uppercase text-sm">Guiding the Vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="text-center p-10 flex flex-col items-center group">
              <div className="w-32 h-32 mx-auto rounded-full border border-border-dark bg-background flex items-center justify-center mb-6 group-hover:border-accent-gold transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="font-heading text-4xl text-accent-gold">PR</span>
              </div>
              <h3 className="font-heading text-3xl mb-1">Mr. Pranav Rana</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-4">Managing Director & Proprietor</p>
              <p className="text-text-muted font-sans text-sm max-w-xs">
                With deep expertise in heavy metal trading and industrial operations, Pranav leads the strategic expansion and compliance rigor of the Ranabalvir network.
              </p>
            </GlassCard>

            <GlassCard className="text-center p-10 flex flex-col items-center group" borderAccent="blue">
              <div className="w-32 h-32 mx-auto rounded-full border border-border-dark bg-background flex items-center justify-center mb-6 group-hover:border-accent-blue transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="font-heading text-4xl text-accent-blue">SK</span>
              </div>
              <h3 className="font-heading text-3xl mb-1">Mr. Shivam Kathait</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-gold mb-4">Director</p>
              <p className="text-text-muted font-sans text-sm max-w-xs">
                A veteran in scrap segregation and melting processes, Shivam ensures the highest quality output and operational efficiency across all processing facilities.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5. VALUES GRID */}
      <section className="py-24 bg-background border-t border-border-dark">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-5xl mb-16 text-center text-text-primary">Our Core Values</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Integrity", icon: <Shield />, desc: "Unwavering honesty in our pricing, audits, and business dealings." },
              { title: "Sustainability", icon: <Leaf />, desc: "Committing every resource to reduce the industrial carbon footprint." },
              { title: "Innovation", icon: <Lightbulb />, desc: "Continually adopting superior technology for metal recovery." },
              { title: "Reliability", icon: <CheckCircle2 />, desc: "SLA-driven logistics and uninterrupted processing." },
              { title: "Transparency", icon: <Eye />, desc: "Complete visibility into our operations and recycling processes." },
              { title: "Partnership", icon: <Handshake />, desc: "Treating clients as long-term allies in growth." },
            ].map((val, i) => (
              <div key={i} className="p-8 border border-border-dark bg-surface-1 rounded-sm hover:border-accent-gold transition-colors group">
                <div className="text-text-muted group-hover:text-accent-gold transition-colors mb-6">
                  {val.icon}
                </div>
                <h4 className="font-heading text-2xl tracking-wide mb-3">{val.title}</h4>
                <p className="font-sans text-text-muted text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS */}
      <section className="py-16 bg-surface-1 border-t border-border-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="font-mono text-accent-gold tracking-widest uppercase text-sm mb-8">Registered & Compliant</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 px-6 py-3 border border-border-dark rounded-full bg-background">
              <Award className="text-accent-blue w-5 h-5" />
              <span className="font-sans text-sm tracking-wide">Companies Act 2013</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-border-dark rounded-full bg-background">
              <CheckCircle2 className="text-accent-blue w-5 h-5" />
              <span className="font-sans text-sm tracking-wide">GST Compliant</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-border-dark rounded-full bg-background">
              <Shield className="text-accent-blue w-5 h-5" />
              <span className="font-sans text-sm tracking-wide">Ministry of Corporate Affairs</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-border-dark rounded-full bg-background">
              <Leaf className="text-accent-blue w-5 h-5" />
              <span className="font-sans text-sm tracking-wide">Environmental Standards</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Temporary Eye icon component since it was omitted in imports
function Eye(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
