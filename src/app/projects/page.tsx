"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { Building2, MapPin, IndianRupee, Landmark } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Lucknow Development Authority (LDA)",
      location: "Lucknow, Uttar Pradesh",
      type: "Government Infrastructure",
      value: "5 Million",
      description: "Comprehensive waste management and material supply for major infrastructure development projects under the Lucknow Development Authority.",
      tags: ["Infrastructure", "Waste Management", "Urban Development"],
    },
    {
      title: "Ordinance Factory",
      location: "India",
      type: "Defense Manufacturing",
      value: "Undisclosed",
      description: "Secure and compliant scrap metal processing and disposal services for strategic defense manufacturing facilities.",
      tags: ["Defense", "Scrap Processing", "Secure Logistics"],
    },
    {
      title: "Municipal Corporation of Delhi (MCD)",
      location: "Delhi NCR",
      type: "Civic Infrastructure",
      value: "Ongoing",
      description: "Partnering with MCD for large-scale urban waste segregation and sustainable processing initiatives across the capital region.",
      tags: ["Municipal", "Waste Segregation", "Public Works"],
    },
    {
      title: "Chapra Railway Division",
      location: "Chapra, Bihar",
      type: "Railway Infrastructure",
      value: "Contractual",
      description: "Processing and recycling of decommissioned railway materials and tracks, ensuring high recovery rates back into the supply chain.",
      tags: ["Railways", "Metal Recovery", "Heavy Scrap"],
    },
    {
      title: "Defense Research and Development Organization (DRDO)",
      location: "National Facilities",
      type: "R&D Installations",
      value: "Strategic",
      description: "Providing specialized, secure material handling and recycling solutions for national R&D operations.",
      tags: ["R&D", "Specialized Handling", "Secure Recycling"],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541888086430-81f18fc6dc98?q=80&w=2000&auto=format&fit=crop"
            alt="Infrastructure Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-8xl tracking-wider uppercase text-glow-gold"
          >
            Current Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl text-text-muted max-w-2xl mx-auto font-sans"
          >
            Driving sustainable infrastructure and industrial growth through strategic partnerships with national institutions.
          </motion.p>
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="relative py-24 bg-background overflow-hidden min-h-screen">
        <ParticleBackground />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl text-text-primary mb-4">Strategic Engagements</h2>
            <p className="font-mono text-accent-gold tracking-widest uppercase text-sm">National Scale Operations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={idx === 0 ? "lg:col-span-2" : ""}
              >
                <GlassCard 
                  borderAccent={idx === 0 ? "gold" : "blue"} 
                  className={`h-full p-8 md:p-10 ${idx === 0 ? "md:p-12 relative overflow-hidden" : ""}`}
                >
                  {/* Distinct styling for the premier project */}
                  {idx === 0 && (
                    <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                      <Building2 className="w-96 h-96" />
                    </div>
                  )}
                  
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className={`text-xs font-mono tracking-wider px-3 py-1 rounded-full border ${idx === 0 ? "border-accent-gold/40 text-accent-gold/80 bg-accent-gold/5" : "border-accent-blue/40 text-accent-blue/80 bg-accent-blue/5"}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className={`font-heading mb-4 ${idx === 0 ? "text-4xl md:text-5xl text-glow-gold" : "text-3xl text-text-primary"}`}>
                        {project.title}
                      </h3>
                      
                      <p className={`font-sans leading-relaxed text-text-muted mb-8 ${idx === 0 ? "text-lg md:text-xl max-w-3xl" : "text-base"}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-border-dark/50">
                      <div className="flex items-start gap-3">
                        <MapPin className={`w-5 h-5 ${idx === 0 ? "text-accent-gold" : "text-accent-blue"} shrink-0 mt-0.5`} />
                        <div>
                          <p className="text-xs font-mono uppercase tracking-widest text-text-muted/60 mb-1">Location</p>
                          <p className="font-sans text-sm text-text-primary">{project.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Landmark className={`w-5 h-5 ${idx === 0 ? "text-accent-gold" : "text-accent-blue"} shrink-0 mt-0.5`} />
                        <div>
                          <p className="text-xs font-mono uppercase tracking-widest text-text-muted/60 mb-1">Sector</p>
                          <p className="font-sans text-sm text-text-primary">{project.type}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 col-span-2 lg:col-span-1 border-t lg:border-t-0 border-border-dark/50 pt-4 lg:pt-0">
                        <IndianRupee className={`w-5 h-5 ${idx === 0 ? "text-accent-gold" : "text-accent-blue"} shrink-0 mt-0.5`} />
                        <div>
                          <p className="text-xs font-mono uppercase tracking-widest text-text-muted/60 mb-1">Scale</p>
                          <p className={`font-sans text-sm font-semibold ${idx === 0 ? "text-accent-gold" : "text-text-primary"}`}>{project.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 bg-surface-1 border-t border-border-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Partner on Your Next Industrial Project</h2>
          <p className="font-sans text-text-muted max-w-2xl mx-auto mb-10">Contact our development team to discuss compliance-driven material recovery and supply capabilities for your upcoming tenders.</p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-background font-heading text-lg hover:bg-white transition-colors uppercase tracking-wider">
            Initiate Contact
          </a>
        </div>
      </section>

    </div>
  );
}
