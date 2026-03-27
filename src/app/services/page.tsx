"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WireframeGlobe } from "@/components/3d/WireframeGlobe";
import { GlassCard } from "@/components/ui/GlassCard";
import { Settings, Leaf, Recycle, Factory, Wrench, Lightbulb, ArrowRight, X, CircleDot } from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: "Scrap Metal Processing",
      icon: <Settings className="w-8 h-8" />,
      shortDesc: "Comprehensive collection, segregation, cutting, melting and disposal of ferrous & non-ferrous scrap.",
      fullDesc: "We provide end-to-end processing for multiple metal types. Using advanced machinery, scrap is rapidly segregated, stripped of impurities, and compressed or melted into standardized blocks suitable for smelters. Our process ensures maximum recovery value and immediate readiness for industrial remelting.",
      color: "gold"
    },
    {
      title: "Industrial Waste Management",
      icon: <Leaf className="w-8 h-8" />,
      shortDesc: "End-to-end waste handling operations tailormade for heavy industries.",
      fullDesc: "Our waste management protocols adhere strictly to environmental compliance. We handle hazardous and non-hazardous by-products from factories, deploying specialized fleets for removal and treatment, thus enabling zero-landfill goals for our enterprise clients.",
      color: "blue"
    },
    {
      title: "Metal Recycling",
      icon: <Recycle className="w-8 h-8" />,
      shortDesc: "Scientific recycling processes converting waste into reusable raw material.",
      fullDesc: "By leveraging metallurgical expertise, we transition mixed-grade scraps into high-purity secondary raw materials. This closed-loop recycling reduces raw material costs for partner industries and drastically cuts carbon emissions compared to primary metal extraction.",
      color: "gold"
    },
    {
      title: "Materials Trading",
      icon: <Factory className="w-8 h-8" />,
      shortDesc: "Large-scale wholesale trading network for bulk metal and non-metal scrap.",
      fullDesc: "With an expansive pan-India logistics network, we ensure reliable supply-chain management for scrap commodities. We bridge the gap between large-scale waste generators and foundries needing consistent secondary feedstock, guaranteeing fair market pricing and SLA-driven delivery.",
      color: "blue"
    },
    {
      title: "Machining & Coating",
      icon: <Wrench className="w-8 h-8" />,
      shortDesc: "Precision treatment, machining, and protective coating of recovered metals.",
      fullDesc: "Beyond basic recovery, our facilities offer value-addition via machining and anti-corrosive treatments. This service is ideal for clients requiring ready-to-use secondary components stripped of rust and primed for immediate industrial application.",
      color: "gold"
    },
    {
      title: "Sustainable Consulting",
      icon: <Lightbulb className="w-8 h-8" />,
      shortDesc: "Advisory solutions assisting conglomerates in optimizing sustainable waste practices.",
      fullDesc: "Our veteran team audits industrial processes to identify waste-reduction opportunities. We design custom frameworks that help operational managers implement greener processes, enhance CSR profiles, and generate fresh revenue streams from process by-products.",
      color: "blue"
    }
  ];

  const processSteps = [
    { title: "Collection", desc: "Structured pick-up from partner sites." },
    { title: "Sorting", desc: "Automated & manual segregation." },
    { title: "Processing", desc: "Cutting, shredding, and melting." },
    { title: "Recovery", desc: "Extracting high-value raw material." },
    { title: "Delivery", desc: "Logistics to final manufacturers." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 border-b border-border-dark overflow-hidden bg-background">
        <WireframeGlobe />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl tracking-wider uppercase text-glow-gold mb-6">
              Our Expertise
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-text-muted max-w-4xl mx-auto font-sans leading-relaxed">
              Powering India's heavy industries with robust <span className="text-accent-gold">Scrap Metal Processing</span>, rigorous <span className="text-accent-blue">Waste Management</span>, and certified recycling protocols. We handle the burden of waste so you can focus on growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 bg-surface-1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <GlassCard 
                key={i} 
                borderAccent={service.color as "gold" | "blue"} 
                className="flex flex-col h-full group cursor-pointer"
              >
                <div onClick={() => setActiveService(i)}>
                  <div className={`mb-6 ${service.color === "gold" ? "text-accent-gold" : "text-accent-blue"}`}>
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-3xl mb-3">{service.title}</h3>
                  <p className="font-sans text-text-muted text-sm mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border-dark flex items-center gap-2 font-mono text-sm tracking-widest uppercase transition-colors group-hover:text-accent-gold text-text-muted">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL FOR SERVICES */}
      <AnimatePresence>
        {activeService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            />
            <motion.div 
              className="relative w-full max-w-2xl bg-surface-2 border border-border-dark p-8 md:p-12 shadow-2xl rounded-sm z-10"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 text-text-muted hover:text-accent-gold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className={`mb-6 ${services[activeService].color === "gold" ? "text-accent-gold" : "text-accent-blue"}`}>
                {services[activeService].icon}
              </div>
              <h3 className="font-heading text-4xl mb-6 text-text-primary">
                {services[activeService].title}
              </h3>
              <p className="font-sans text-lg text-text-muted leading-relaxed mb-8">
                {services[activeService].fullDesc}
              </p>
              <div className="font-mono text-sm uppercase tracking-widest text-accent-gold border-t border-border-dark pt-6">
                RANABALVIR GROUP / Division
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. PROCESS FLOW */}
      <section className="py-24 bg-background border-t border-border-dark overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl mb-4">Our Operational Workflow</h2>
            <p className="font-mono text-accent-blue tracking-widest uppercase text-sm">Efficiency at Every Step</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-[2px] bg-border-dark">
              <motion.div 
                className="h-full bg-accent-gold origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                className="relative z-10 flex flex-col items-center text-center w-full lg:w-48 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-surface-2 border-2 border-border-dark flex items-center justify-center font-heading text-3xl text-text-muted mb-6 group-hover:border-accent-gold group-hover:text-accent-gold transition-colors">
                  0{i + 1}
                </div>
                <h4 className="font-heading text-2xl tracking-wide mb-2">{step.title}</h4>
                <p className="font-sans text-xs text-text-muted">{step.desc}</p>
                <CircleDot className="w-6 h-6 text-border-dark mt-4 lg:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-24 bg-surface-2 border-t border-border-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-5xl mb-12 text-center text-glow-gold">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Steel Plants", "Automotive Manufacturing", "Construction & Infrastructure", "Heavy Engineering", "Government PSUs", "Mining Operations", "Energy & Power"].map((industry, i) => (
                <div key={i} className="px-6 py-4 border border-border-dark bg-surface-1 font-mono text-sm tracking-wide text-text-primary hover:border-accent-blue transition-colors cursor-default">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
