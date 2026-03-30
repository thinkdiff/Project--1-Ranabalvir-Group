"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Leaf, ShieldCheck, MapPin, Users, Clock, Settings, Factory, Recycle, Scale } from "lucide-react";

import { HeroGearCanvas } from "@/components/3d/HeroGearCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Counter } from "@/components/ui/Counter";

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 768px)", () => {
      // Horizontal Scroll for Business Divisions
      if (horizontalRef.current && containerRef.current) {
        const sections = gsap.utils.toArray(".horizontal-item");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            start: "top top",
            end: () => "+=" + containerRef.current!.offsetWidth,
          }
        });
      }
    });

    return () => matchMedia.revert();
  }, []);

  // Title Reveal Stagger
  const headlineWords = "Building Trust. Driving Growth.".split(" ");

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <HeroGearCanvas />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center h-full pt-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-6xl md:text-8xl tracking-wider uppercase text-text-primary leading-[1.1]">
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 0.8, ease: "easeOut" }}
                >
                  {word === "Trust." ? <span className="text-accent-gold">{word}</span> : word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-text-muted max-w-lg font-sans leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              India's premier industrial conglomerate specializing in sustainable recycling, scrap metal processing, and massive-scale materials trading.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Link href="/services">
                <MagneticButton variant="primary">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton variant="outline">
                  Contact Us
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-mono text-xs text-accent-gold tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-accent-gold/30 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-accent-gold absolute top-0"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. MARQUEE STRIP */}
      <section className="bg-accent-gold text-background py-4 overflow-hidden flex whitespace-nowrap border-y border-border-dark relative z-20">
        <motion.div 
          className="flex font-heading text-2xl md:text-3xl tracking-widest uppercase items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="px-8 flex items-center gap-8">
              <span>Scrap Processing</span>
              <span className="w-2 h-2 rounded-full bg-background/50"></span>
              <span>Metal Recycling</span>
              <span className="w-2 h-2 rounded-full bg-background/50"></span>
              <span>Industrial Waste Management</span>
              <span className="w-2 h-2 rounded-full bg-background/50"></span>
              <span>Materials Trading</span>
              <span className="w-2 h-2 rounded-full bg-background/50"></span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* 3. ABOUT SNAPSHOT */}
      <section className="py-24 md:py-32 bg-surface-1 relative">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-accent-gold tracking-widest text-sm mb-4 uppercase">/// Who We Are</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary leading-tight">
              Transforming Industrial Waste Into <span className="text-accent-blue">Future Value.</span>
            </h3>
            <p className="text-text-muted text-lg mb-8 leading-relaxed font-sans">
              Ranabalvir Group Private Limited stands at the forefront of India's circular economy. Based in Muzaffarnagar, we provide end-to-end sustainable recycling solutions that help heavy industries minimize footprint and maximize resource recovery.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-mono text-accent-gold hover:text-text-primary transition-colors hover-glow">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative h-[500px] rounded-sm overflow-hidden border-l-4 border-b-4 border-accent-gold/50 ml-4 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-background/40 z-10 mix-blend-overlay"></div>
            <Image 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop"
              alt="Industrial Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="py-16 bg-background border-y border-border-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-border-dark/50">
            {[
              { label: "Years Experience", value: 3, suffix: "+" },
              { label: "Clients Served", value: 500, suffix: "+" },
              { label: "Tons Processed", value: 50000, suffix: "+" },
              { label: "States Operations", value: 5, suffix: "" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <div className="font-heading text-5xl md:text-6xl text-accent-gold mb-2 text-glow-gold">
                  <Counter end={stat.value} duration={2.5} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-sm tracking-widest text-text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUSINESS DIVISIONS (Horizontal Scroll) */}
      <section ref={containerRef} className="bg-surface-2 overflow-hidden hidden md:block" style={{ height: "100vh" }}>
        <div className="h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 md:px-8 mb-12 shrink-0">
            <h2 className="font-mono text-accent-blue tracking-widest text-sm mb-2 uppercase">/// Divisions</h2>
            <h3 className="font-heading text-5xl text-text-primary">Our Core Expertise</h3>
          </div>
          
          <div ref={horizontalRef} className="flex w-[300vw] h-[60vh] pl-8">
            {[
              { title: "Scrap Processing", icon: <Settings className="w-12 h-12" />, desc: "Collection, segregation, cutting, melting, and disposal of ferrous & non-ferrous scrap." },
              { title: "Waste Management", icon: <Leaf className="w-12 h-12" />, desc: "End-to-end industrial waste handling meeting strict environmental standards." },
              { title: "Metal Recycling", icon: <Recycle className="w-12 h-12" />, desc: "Scientific metal recycling recovering reusable industrial raw materials." },
              { title: "Materials Trading", icon: <Factory className="w-12 h-12" />, desc: "Wholesale trading network across 5 states for industrial materials." },
            ].map((item, i) => (
              <div key={i} className="horizontal-item w-[60vw] h-full p-4 flex-shrink-0">
                <GlassCard className="h-full flex flex-col justify-between p-12" borderAccent={i % 2 === 0 ? "gold" : "blue"} isHoverable={false}>
                  <div>
                    <div className={i % 2 === 0 ? "text-accent-gold mb-8" : "text-accent-blue mb-8"}>
                      {item.icon}
                    </div>
                    <h4 className="font-heading text-4xl mb-4">{item.title}</h4>
                    <p className="font-sans text-text-muted text-xl max-w-lg leading-relaxed">{item.desc}</p>
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-accent-gold transition-colors mt-8">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mobile fallback for Business Divisions */}
      <section className="py-24 bg-surface-2 md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-accent-blue tracking-widest text-sm mb-2 uppercase">/// Divisions</h2>
          <h3 className="font-heading text-4xl text-text-primary mb-12">Our Core Expertise</h3>
          <div className="flex flex-col gap-6">
            {[
              { title: "Scrap Processing", icon: <Settings className="w-8 h-8" />, desc: "Collection, segregation, cutting, melting of scrap." },
              { title: "Waste Management", icon: <Leaf className="w-8 h-8" />, desc: "End-to-end industrial waste handling." },
              { title: "Metal Recycling", icon: <Recycle className="w-8 h-8" />, desc: "Scientific metal recycling into raw materials." },
              { title: "Materials Trading", icon: <Factory className="w-8 h-8" />, desc: "Wholesale trading across 5 states." },
            ].map((item, i) => (
              <GlassCard key={i} borderAccent={i % 2 === 0 ? "gold" : "blue"}>
                <div className={(i % 2 === 0 ? "text-accent-gold" : "text-accent-blue") + " mb-4"}>{item.icon}</div>
                <h4 className="font-heading text-2xl mb-2">{item.title}</h4>
                <p className="font-sans text-text-muted text-sm">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Built on Integrity. Driven by Innovation.</h2>
            <p className="text-text-muted font-sans">Partnering with India's largest heavy industries requires unwavering reliability. We deliver on every metric.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Transparent Operations", icon: <ShieldCheck />, desc: "100% compliant processing with complete audit trails." },
              { title: "Eco-Responsible", icon: <Leaf />, desc: "Exceeding environmental standards in every operation." },
              { title: "Pan-India Network", icon: <MapPin />, desc: "Logistics capability spanning multiple states." },
              { title: "Expert Team", icon: <Users />, desc: "Decades of combined industrial experience." },
              { title: "Timely Delivery", icon: <Clock />, desc: "SLA-driven execution for zero downtime." },
              { title: "Certified Processes", icon: <Scale />, desc: "Registered under Companies Act & GST Compliant." },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-border-dark rounded-sm hover:border-accent-gold/50 transition-colors bg-surface-1 group">
                <div className="w-12 h-12 bg-surface-2 rounded-full flex items-center justify-center text-accent-gold mb-6 group-hover:bg-accent-gold group-hover:text-background transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-heading text-2xl tracking-wide mb-3">{feature.title}</h4>
                <p className="font-sans text-sm text-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="relative py-24 bg-surface-2 overflow-hidden">
        <div className="absolute inset-0 bg-accent-gold/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-heading text-5xl md:text-7xl mb-8 max-w-4xl mx-auto text-glow-gold">
            Ready to transform your industrial waste into value?
          </h2>
          <Link href="/contact">
            <MagneticButton variant="primary">
              Partner With Us <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </Link>
        </div>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "4rem 4rem" }}></div>
      </section>

    </div>
  );
}
