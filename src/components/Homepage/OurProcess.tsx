"use client";

import { motion, Variants } from "framer-motion";
import { Search, PenTool, Terminal, Cpu, TrendingUp } from "lucide-react";

// The 5-step deployment process from the strategy document
const steps = [
  {
    title: "Discover",
    description: "We audit what is currently working and what is leaking revenue.",
    icon: <Search className="w-5 h-5 text-background" />,
  },
  {
    title: "Design",
    description: "We architect the right brand positioning, system, or operational workflow.",
    icon: <PenTool className="w-5 h-5 text-background" />,
  },
  {
    title: "Build",
    description: "Our engineers and designers develop the robust, scalable solution.",
    icon: <Terminal className="w-5 h-5 text-background" />,
  },
  {
    title: "Automate",
    description: "We layer in AI and workflow automation to reduce manual friction.",
    icon: <Cpu className="w-5 h-5 text-background" />,
  },
  {
    title: "Optimize",
    description: "We measure the data and refine the system for maximum conversion.",
    icon: <TrendingUp className="w-5 h-5 text-background" />,
  },
];

export default function ProcessSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-background py-32 px-6 overflow-hidden border-t border-border/50">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] -translate-y-1/2 bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50">
            <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">Implementation</span>
          </div>
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            How We Implement <br />
            <span className="text-primary">Your Systems</span>
          </h2>
          <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
            Our deployment process is clear, practical, and highly structured.
          </p>
        </motion.div>

        {/* The Pipeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Connecting Line */}
          <div className="absolute left-[39px] md:left-[calc(50%-1px)] top-4 bottom-4 w-[2px] bg-border/50" />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Central Node / Icon on the track */}
                  <motion.div 
                    initial={{ scale: 0.8, backgroundColor: "hsl(var(--muted))" }}
                    whileInView={{ scale: 1, backgroundColor: "hsl(var(--primary))" }}
                    viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 border-4 border-background shadow-[0_0_20px_rgba(223,62,13,0.3)] transition-colors"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors duration-500 overflow-hidden">
                      
                      {/* Massive Number Watermark */}
                      {/* <span className="absolute -top-6 -right-4 font-inter text-8xl font-bold text-foreground/5 select-none transition-transform duration-700 group-hover:scale-110">
                        {step.num}
                      </span> */}
                      
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-700 pointer-events-none" />

                      <div className="relative z-10">
                        <h3 className="font-inter text-2xl font-semibold text-foreground mb-3 flex items-center gap-4 justify-start md:justify-[inherit]">
                          {/* <span className="text-primary font-mono text-sm tracking-widest block md:hidden">STEP {step.num}</span> */}
                          {step.title}
                        </h3>
                        <p className="font-outfit text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}