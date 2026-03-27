"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { TrendingUp, HandHeart, Users, Coins, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Scrap Operations Manager",
      location: "Muzaffarnagar, UP",
      type: "Full-time",
      dept: "Operations",
      desc: "Oversee daily sorting, processing, and outbound logistics at our primary facility. Must have 5+ years experience in heavy metal handling."
    },
    {
      title: "Field Sales Executive",
      location: "Kanpur, UP",
      type: "Full-time",
      dept: "Business Development",
      desc: "Develop and maintain relationships with large-scale industrial scrap generators. B2B sales experience required."
    },
    {
      title: "Logistics Coordinator",
      location: "Muzaffarnagar, UP",
      type: "Full-time",
      dept: "Supply Chain",
      desc: "Coordinate our pan-India fleet operations ensuring timely pickup and delivery SLAs are met consistently."
    },
    {
      title: "Recycling Plant Supervisor",
      location: "Khatauli, UP",
      type: "Full-time",
      dept: "Processing",
      desc: "Supervise the melting and segregation line. Ensure strict adherence to environmental and safety compliance."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-surface-1 border-b border-border-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-screen bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl uppercase text-text-primary leading-tight mb-6"
          >
            Join the Team Building India's <span className="text-glow-gold text-accent-gold">Sustainable Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-text-muted font-sans"
          >
            We are looking for driven individuals ready to transform the industrial waste sector through innovation, hard work, and integrity.
          </motion.p>
        </div>
      </section>

      {/* 2. WHY WORK WITH US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-5xl mb-16 text-center">Why Ranabalvir Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Growth", icon: <TrendingUp />, desc: "Fast-tracked career progression in a rapidly expanding sector." },
              { title: "Impact", icon: <HandHeart />, desc: "Directly contribute to reducing India's industrial carbon footprint." },
              { title: "Culture", icon: <Users />, desc: "A meritocratic, safety-first environment that values every voice." },
              { title: "Compensation", icon: <Coins />, desc: "Competitive pay, performance bonuses, and health benefits." },
            ].map((feature, i) => (
              <GlassCard key={i} borderAccent={i % 2 === 0 ? "gold" : "blue"} className="p-8">
                <div className="w-12 h-12 rounded-full border border-border-dark flex items-center justify-center mb-6 text-accent-gold">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-3xl mb-3">{feature.title}</h3>
                <p className="font-sans text-sm text-text-muted">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS */}
      <section className="py-24 bg-surface-2 border-y border-border-dark">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="font-heading text-5xl mb-12">Current Openings</h2>
          <div className="flex flex-col gap-6">
            {jobs.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between p-8 bg-surface-1 border border-border-dark hover:border-accent-gold transition-colors rounded-sm group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                
                <div className="mb-6 md:mb-0 md:pr-8 md:w-2/3">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-xs tracking-widest uppercase text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-sm">{job.dept}</span>
                    <span className="flex items-center gap-1 font-sans text-xs text-text-muted"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span className="flex items-center gap-1 font-sans text-xs text-text-muted"><Clock className="w-3 h-3" /> {job.type}</span>
                  </div>
                  <h3 className="font-heading text-3xl mb-3 group-hover:text-accent-gold transition-colors">{job.title}</h3>
                  <p className="font-sans text-text-muted text-sm">{job.desc}</p>
                </div>
                
                <div className="md:w-1/3 flex items-center md:justify-end">
                  <a href="#" target="_blank" rel="noreferrer" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-text-primary text-background hover:bg-accent-gold transition-colors px-6 py-4 font-mono text-sm uppercase tracking-widest font-bold">
                    Apply Now <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION PROCESS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-5xl mb-16 text-center">Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-border-dark"></div>
            
            {[
              { step: "01", title: "Submit Application", desc: "Fill out the Google form with your resume and details." },
              { step: "02", title: "Screening Call", desc: "A brief chat with HR to understand your background." },
              { step: "03", title: "Interview", desc: "In-depth technical or operational assessment." },
              { step: "04", title: "Offer & Onboarding", desc: "Welcome to the Ranabalvir family." },
            ].map((process, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center px-4">
                 <div className="w-24 h-24 rounded-full bg-surface-1 border border-accent-gold flex items-center justify-center font-heading text-4xl text-accent-gold mb-6 shadow-[0_0_20px_rgba(201,168,76,0.1)]">
                   {process.step}
                 </div>
                 <h4 className="font-heading text-2xl mb-2">{process.title}</h4>
                 <p className="font-sans text-sm text-text-muted">{process.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERNSHIP BANNER */}
      <section className="py-16 bg-surface-2 border-t border-border-dark">
        <div className="container mx-auto px-4 md:px-8">
          <GlassCard className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-12 text-center md:text-left gap-8">
            <div>
              <h3 className="font-heading text-4xl text-accent-blue mb-4">Looking for an Internship?</h3>
              <p className="font-sans text-text-muted max-w-lg">
                We offer 3-month immersive internships for engineering and management students looking for hands-on experience in the industrial sector.
              </p>
            </div>
            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center shrink-0 justify-center gap-2 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-background transition-colors px-6 py-4 font-mono text-sm uppercase tracking-widest font-bold">
              Internship Form <ExternalLink className="w-4 h-4" />
            </a>
          </GlassCard>
        </div>
      </section>

    </div>
  );
}
