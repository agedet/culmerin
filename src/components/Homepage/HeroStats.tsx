"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Capability & Performance Stats (Honest, yet highly impressive for B2B)
const statsData = [
  {
    value: 15,
    suffix: "+",
    label: "Enterprise Integrations",
    description: "Native connections to HubSpot, Salesforce, Stripe, and more.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Automated Workflows",
    description: "Zero manual data entry from lead capture to CRM routing.",
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster Sales Cycles",
    description: "Engineered pipelines that convert attention into revenue quicker.",
  },
  {
    value: 0,
    suffix: "",
    label: "Fragmented Silos",
    description: "Complete consolidation of your business operations and data.",
  },
];

// Reusable Counter Component for the cinematic number tick-up effect
const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      
      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for a smooth slow-down at the end
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(easeOutQuart * (to - from) + from);
        
        if (nodeRef.current) {
          nodeRef.current.textContent = currentNumber.toString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (nodeRef.current) nodeRef.current.textContent = to.toString();
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, from, to, duration, hasAnimated]);

  return <span ref={nodeRef}>{from}</span>;
};

export default function StatsSection() {
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
    <section className="relative w-full bg-background py-24 px-6 overflow-hidden border-t border-border/50">
      
      {/* Cinematic Background Line & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-border/50"
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`flex flex-col items-center text-center ${index !== 0 ? "pt-8 sm:pt-0" : ""}`}
            >
              {/* Animated Number */}
              <div className="font-inter text-5xl md:text-6xl font-bold text-foreground mb-4 flex items-center justify-center">
                <Counter to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              
              {/* Label & Description */}
              <h3 className="font-inter text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="font-outfit text-sm text-muted-foreground leading-relaxed max-w-[250px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}