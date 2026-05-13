"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn ui button
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";


export default function Hero() {
  // Animation variants for staggered cinematic reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 pt-24 text-center">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Subtle Grid Pattern for a 'Tech/Systems' feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
                backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }} 
      />
      
      {/* Deep cinematic orange glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />


      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* System Status Badge */}
        {/* <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse glow-orange" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground font-inter">
              Revenue Systems Agency
            </span>
          </div>
        </motion.div> */}

        {/* Headline */}
        {/* "Build a stronger brand, smarter systems, and a better sales engine." */}
        <motion.h1 
          variants={itemVariants}
          className="font-inter text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.05]"
        >
          Build Stronger Presence, {' '}
          <br className="hidden md:block" />
          <span className="text-primary relative whitespace-nowrap">
            Better Sales Engine.

            {/* Underline decorative accent */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
            </svg>
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        {/* "Culmerin Technologies helps businesses create the brand, software, automation, and CRM systems they need to attract leads, streamline operations, and close more sales." */}
        <motion.p 
          variants={itemVariants}
          className="font-outfit mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
        >
          Culmerin Technologies helps B2B businesses create the brand, software, automation, and CRM systems they need to attract leads, streamline operations, and close more sales.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 font-inter text-base bg-primary hover:bg-primary/90 text-white rounded-full glow-orange transition-all duration-300 group relative overflow-hidden">
                <Link 
                    href="/#contact"
                >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    <span className="relative z-10 flex items-center">
                        Book a Strategy Call
                        <ArrowRight 
                            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        />
                    </span>
                </Link>
            </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-14 px-8 font-inter text-base border-border hover:bg-secondary hover:text-foreground text-muted-foreground rounded-full transition-all duration-300"
          >
            Explore our growth systems
          </Button>
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="font-outfit text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary opacity-70" />
          <ChevronDown className="w-5 h-5 text-primary opacity-70" />
        </motion.div>
      </motion.div>

    </section>
  );
}