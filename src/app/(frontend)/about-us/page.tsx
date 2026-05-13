"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Compass, Cpu, Layers, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Core beliefs mapped from the strategy document
const beliefs = [
  {
    title: "Clarity Drives Trust",
    description: "We believe that growing a business should not depend on guesswork, disconnected SaaS tools, or weak communication.",
    icon: <Compass className="w-6 h-6 text-primary" />
  },
  {
    title: "Systems Drive Efficiency",
    description: "Many businesses have tools, but no operational system. We build the architecture that removes friction from your daily workflows.",
    icon: <Cpu className="w-6 h-6 text-primary" />
  },
  {
    title: "Execution Sustains Growth",
    description: "A meticulously engineered brand makes growth easier to sustain, turning captured attention into closed revenue.",
    icon: <Target className="w-6 h-6 text-primary" />
  }
];

export default function AboutPage() {
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
    <main className="min-h-screen bg-background overflow-hidden relative">
      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none z-10" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl relative z-10"
        >
          {/* <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">
                Culmerin Technologies
              </span>
            </div>
          </motion.div> */}

          <motion.h1 
            variants={itemVariants}
            className="font-inter text-3xl md:text-4xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.05]"
          >
            We build brands and systems <br className="hidden md:block" />
            that help businesses <span className="text-primary">grow with clarity.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-outfit text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Culmerin Technologies exists to help B2B companies combine strong market positioning, reliable digital systems, and better execution into one unified growth engine.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. OUR STORY (The Fragmented to Structured Journey) --- */}
      <section className="relative py-24 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Abstract Visual Metaphor */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] rounded-3xl border border-border bg-card overflow-hidden flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Cinematic fragmented rings coming together */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-b-2 border-l-2 border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border-t-2 border-primary/60 animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full glow-orange" />
              </div>
            </div>
          </motion.div>

          {/* Story Copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="font-inter text-4xl font-bold text-foreground mb-8">
              Moving from fragments to <span className="text-primary">precision structure.</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 font-outfit text-lg text-muted-foreground leading-relaxed">
              <p>
                Culmerin Technologies was founded with a singular focus: to help businesses stop working in disjointed fragments and start operating with precision structure.
              </p>
              <p>
                We noticed that many businesses have a brand, but no operational system. Others have expensive digital tools, but no strategic clarity. Some generate traffic, but lack the mechanisms for conversion.
              </p>
              <p className="font-medium text-foreground border-l-2 border-primary pl-4">
                We built this agency to close that gap.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. WHAT WE BELIEVE (Grid) --- */}
      <section className="relative py-32 px-6 bg-secondary/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-inter text-4xl font-bold text-foreground mb-6">Core Beliefs</h2>
            <p className="font-outfit text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles govern every system we architect and every brand we position.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {beliefs.map((belief, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-8 md:p-10 bg-card border border-border rounded-2xl relative overflow-hidden hover:border-primary/40 transition-colors duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-primary/5 to-transparent transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="p-4 inline-block rounded-xl bg-background border border-border mb-6 group-hover:border-primary/30 transition-colors duration-300">
                    {belief.icon}
                  </div>
                  <h3 className="font-inter text-2xl font-semibold text-foreground mb-4">
                    {belief.title}
                  </h3>
                  <p className="font-outfit text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. WHY WORK WITH US (The Ecosystem Approach) --- */}
      <section className="relative py-32 px-6">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            <motion.h2 variants={itemVariants} className="font-inter text-4xl font-bold text-foreground mb-8">
              Why Partner With Us?
            </motion.h2>
            <motion.p variants={itemVariants} className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6">
              Businesses partner with Culmerin Technologies when they require a team that understands both the creative strategy and the deep technical requirements of scaling.
            </motion.p>
            <motion.p variants={itemVariants} className="font-outfit text-lg text-muted-foreground leading-relaxed mb-8">
              We care strictly about business outcomes, not just aesthetics or code. That means we evaluate your entire operational ecosystem:
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-4">
              {[
                "How your brand is perceived by the market.",
                "How efficiently your internal systems function.",
                "How seamlessly your business converts attention into closed revenue."
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-outfit text-foreground text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {/* Minimalist Tech Stats/Cards reflecting competence */}
            <div className="space-y-4">
              <div className="p-8 bg-card border border-border rounded-2xl flex flex-col justify-center min-h-[200px]">
                <Layers className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-inter font-semibold text-foreground">Creative Strategy</h4>
                <p className="font-outfit text-sm text-muted-foreground mt-2">Positioning & Identity</p>
              </div>
              <div className="p-8 bg-secondary/50 border border-border rounded-2xl flex flex-col justify-center min-h-[200px]">
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-inter font-semibold text-foreground">Technical Execution</h4>
                <p className="font-outfit text-sm text-muted-foreground mt-2">Software & Systems</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="p-8 bg-secondary/50 border border-border rounded-2xl flex flex-col justify-center min-h-[200px]">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-inter font-semibold text-foreground">Measurable Outcomes</h4>
                <p className="font-outfit text-sm text-muted-foreground mt-2">Revenue & Conversion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 5. PAGE CTA --- */}
      <section className="relative py-24 px-6 border-t border-border/50 bg-card/30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-inter text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s build something <span className="text-primary">better together.</span>
          </h2>
          <p className="font-outfit text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Culmerin Technologies is built for businesses that want to look sharper, operate smarter, and scale on a foundation of solid systems.
          </p>
          
          <Button 
            size="lg" 
            className="h-14 px-8 font-inter text-base bg-primary hover:bg-primary/90 text-white rounded-full glow-orange transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative z-10 flex items-center">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </section>

    </main>
  );
}