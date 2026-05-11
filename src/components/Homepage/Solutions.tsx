"use client";

import { motion, Variants } from "framer-motion";

export default function SolutionSection() {
  // Variants for the text reveal
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 }, // Delays text until the nodes converge
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  // Coordinates for the scattered nodes before they converge
  // [x, y] format relative to the center
  const scatteredPositions = [
    { x: -150, y: -120 }, // Branding
    { x: 180, y: -80 },   // Software
    { x: -120, y: 150 },  // AI
    { x: 140, y: 140 },   // CRM
    { x: 0, y: -180 },    // Sales
  ];

  // Coordinates for the structured nodes after they lock into the core orbit
  const structuredPositions = [
    { x: -50, y: -50 },
    { x: 50, y: -50 },
    { x: -50, y: 50 },
    { x: 50, y: 50 },
    { x: 0, y: -70 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-background py-32 px-6 overflow-hidden">
      
      {/* Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* --- VISUAL METAPHOR: Scattered to Structured --- */}
        <div className="relative w-64 h-64 mb-16 flex items-center justify-center">
          
          {/* Connecting Lines (Fade in after nodes arrive) */}
          <motion.svg 
            className="absolute inset-0 w-full h-full text-primary/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <line x1="128" y1="128" x2="78" y2="78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="128" y1="128" x2="178" y2="78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="128" y1="128" x2="78" y2="178" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="128" y1="128" x2="178" y2="178" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="128" y1="128" x2="128" y2="58" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          </motion.svg>

          {/* Central Core (The "System") */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-16 h-16 bg-primary rounded-full glow-orange z-20 flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-background/20 rounded-full animate-ping" />
          </motion.div>

          {/* Converging Nodes (The Services) */}
          {scatteredPositions.map((startPos, index) => (
            <motion.div
              key={index}
              initial={{ x: startPos.x, y: startPos.y, opacity: 0 }}
              whileInView={{ x: structuredPositions[index].x, y: structuredPositions[index].y, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1 // Slight stagger for the inward flight
              }}
              className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full z-30"
            />
          ))}
        </div>

        {/* --- COPY & TYPOGRAPHY --- */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.div variants={textItemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground font-inter">
                The Culmerin Architecture
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={textItemVariants}
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-[1.1]"
          >
            How We Build <br />
            <span className="text-primary">Predictable Growth</span>
          </motion.h2>

          <motion.div variants={textItemVariants} className="space-y-6 max-w-2xl mx-auto">
            <p className="font-outfit text-lg md:text-xl text-muted-foreground leading-relaxed">
              We do not just offer standalone services. Culmerin Technologies brings branding, software engineering, AI automation, CRM integration, and sales marketing together into <strong className="text-foreground font-medium">one practical, interconnected growth system.</strong>
            </p>
            <p className="font-outfit text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help businesses move from scattered activity to structured execution. That means a sharper brand identity, faster internal workflows, and a data-backed path from capturing attention to generating revenue.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}