"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-background py-40 px-6 overflow-hidden border-t border-border/50">
      
      {/* --- CINEMATIC BACKGROUND EFFECTS --- */}
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />
      
      {/* Central deep orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --- CONTENT --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        
        {/* System Status Indicator */}
        {/* <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse glow-orange" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground font-inter">
              System Ready
            </span>
          </div>
        </motion.div> */}

        {/* Headline */}
        <motion.h2 
          variants={itemVariants}
          className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.05]"
        >
          Ready to build a better <br className="hidden sm:block"/>
          <span className="text-primary">growth system?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p 
          variants={itemVariants}
          className="font-outfit text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Book a strategy call and let’s discuss the exact architecture needed for your next phase of business operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto h-16 px-10 font-inter text-lg bg-primary hover:bg-primary/90 text-white rounded-full glow-orange transition-all duration-300 group overflow-hidden relative"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            
            <span className="relative z-10 flex items-center">
              Book your strategy call
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
          
          {/* <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-16 px-10 font-inter text-lg border-border hover:bg-secondary hover:text-foreground text-muted-foreground rounded-full transition-all duration-300"
          >
            View pricing & plans
          </Button> */}
        </motion.div>

      </motion.div>
    </section>
  );
}