"use client";

import { motion, Variants } from "framer-motion";
import { 
  Briefcase, 
  Building2, 
  Cloud, 
  Landmark, 
  ShoppingCart, 
  Globe, 
  Activity 
} from "lucide-react";

// Industry data mapped from the strategy document
const industries = [
  { name: "Professional Services", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Real Estate", icon: <Building2 className="w-6 h-6" /> },
  { name: "B2B SaaS", icon: <Cloud className="w-6 h-6" /> },
  { name: "Financial Services", icon: <Landmark className="w-6 h-6" /> },
  { name: "E-commerce", icon: <ShoppingCart className="w-6 h-6" /> },
  { name: "Logistics", icon: <Globe className="w-6 h-6" /> },
  { name: "Healthcare", icon: <Activity className="w-6 h-6" /> },
];

export default function WhoWeServe() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-background py-32 px-6 overflow-hidden border-t border-border/50">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10 items-start">
        
        {/* LEFT COLUMN: Sticky Header & Copy */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50">
              <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">Target Sectors</span>
            </div>
            
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
              Which Industries Benefit <br />
              <span className="text-muted-foreground">Most from Our Systems?</span>
            </h2>
            
            <p className="font-outfit text-lg text-foreground leading-relaxed mb-6">
              We work alongside founders, SMEs, and growth-stage business leaders who want to improve how they present themselves and convert customers.
            </p>
            
            {/* <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
              Our systemic approach is especially effective for businesses with complex sales cycles or heavy operational workflows. If your business depends on trust and smooth execution, you need an architecture that supports it.
            </p> */}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Industry Grid */}
        <div className="w-full lg:w-7/12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-6 bg-card border border-border rounded-2xl flex items-center gap-4 overflow-hidden cursor-pointer transition-colors duration-500 hover:border-primary/50"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-transparent transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 p-3 rounded-xl bg-background border border-border group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300 text-muted-foreground">
                  {industry.icon}
                </div>
                
                {/* Industry Name */}
                <div className="relative z-10 font-inter text-lg font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">
                  {industry.name}
                </div>

                {/* Subdued Arrow that appears on hover */}
                <div className="absolute right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  &rarr;
                </div>
              </motion.div>
            ))}

            {/* Final "Your Industry" wildcard card */}
            <motion.div
              variants={cardVariants}
              className="group relative p-6 bg-secondary/30 border border-border border-dashed rounded-2xl flex items-center justify-center gap-4 overflow-hidden cursor-pointer hover:border-primary transition-colors duration-500 sm:col-span-1 md:col-span-2 lg:col-span-1"
            >
              <span className="font-inter text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                Don&apos;t see your sector? Let&apos;s talk.
              </span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}