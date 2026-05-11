"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Clock, Layers, Zap, CheckCircle2, XCircle } from "lucide-react";

// The operational metrics based on your strategic outcomes
const metrics = [
  {
    title: "Lead Response Time",
    before: "4+ Hours",
    after: "< 5 Minutes",
    icon: <Clock className="w-5 h-5 text-primary" />,
    description: "Automated routing ensures prospects are engaged while intent is highest.",
  },
  {
    title: "Tool Consolidation",
    before: "5 Fragmented Apps",
    after: "1 Unified CRM",
    icon: <Layers className="w-5 h-5 text-primary" />,
    description: "Eliminated data silos and subscription bloat for a single source of truth.",
  },
  {
    title: "Manual Admin Workflow",
    before: "15 hrs/week",
    after: "100% Automated",
    icon: <Zap className="w-5 h-5 text-primary" />,
    description: "AI-assisted data entry frees up your team to focus exclusively on closing.",
  }
];

// Internal builds / Demo case studies to show competence
const demoBuilds = [
  {
    category: "Internal Build",
    title: "B2B Service Revenue System",
    description: "A complete end-to-end architecture featuring a Next.js frontend, integrated HubSpot CRM, and automated email nurturing sequences.",
    tags: ["Brand Identity", "Web Dev", "CRM Automation"],
  },
  {
    category: "Workflow Demo",
    title: "Real Estate Lead Engine",
    description: "An AI-powered qualification funnel that scores incoming property inquiries and automatically books meetings for high-net-worth leads.",
    tags: ["AI Routing", "Sales Funnel", "Lead Scoring"],
  }
];

export default function ProofSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-background py-32 px-6 overflow-hidden border-t border-border/50">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50">
            <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">Proof of Competence</span>
          </div>
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Results Driven by <br />
            <span className="text-primary">Systematic Structure</span>
          </h2>
          <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
            We believe good work should be easy to understand, easy to trust, and easy to measure. Here is how our engineered systems translate into operational efficiency.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-16"
        >
          {/* --- TOP ROW: Before/After Metric Dashboard --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-8 bg-card border border-border rounded-2xl relative overflow-hidden hover:border-primary/40 transition-colors duration-500"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-primary/5 to-transparent transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-background border border-border">
                      {metric.icon}
                    </div>
                    <h3 className="font-inter text-lg font-semibold text-foreground">
                      {metric.title}
                    </h3>
                  </div>

                  {/* Before vs After Visualizer */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                      <span className="font-outfit text-sm text-muted-foreground flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-muted-foreground/50" />
                        Old Way
                      </span>
                      <span className="font-inter font-medium text-muted-foreground line-through decoration-destructive/50">
                        {metric.before}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/30 shadow-[0_0_15px_rgba(223,62,13,0.1)]">
                      <span className="font-outfit text-sm text-primary flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Culmerin System
                      </span>
                      <span className="font-inter font-bold text-foreground">
                        {metric.after}
                      </span>
                    </div>
                  </div>

                  <p className="font-outfit text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- BOTTOM ROW: Internal Builds & Workflows --- */}
          <div>
            <motion.h3 
              variants={itemVariants}
              className="font-inter text-2xl font-bold text-foreground mb-8 text-center md:text-left"
            >
              Demo Builds & Workflows
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {demoBuilds.map((build, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col sm:flex-row gap-6 p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors duration-500 cursor-pointer"
                >
                  {/* Left Side: Mock UI/Code Graphic Placeholder */}
                  <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-secondary/50 rounded-xl border border-border relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                    {/* Simulated code/dashboard lines */}
                    <div className="absolute inset-4 flex flex-col gap-3 opacity-30">
                      <div className="h-2 w-3/4 bg-foreground rounded-full" />
                      <div className="h-2 w-1/2 bg-primary rounded-full" />
                      <div className="h-2 w-full bg-foreground rounded-full" />
                      <div className="h-2 w-5/6 bg-foreground rounded-full" />
                      <div className="h-2 w-2/3 bg-foreground rounded-full" />
                    </div>
                  </div>

                  {/* Right Side: Copy & Tags */}
                  <div className="flex flex-col justify-center flex-grow">
                    <span className="font-inter text-xs font-semibold text-primary tracking-widest uppercase mb-2 block">
                      {build.category}
                    </span>
                    <h4 className="font-inter text-xl font-bold text-foreground mb-3">
                      {build.title}
                    </h4>
                    <p className="font-outfit text-sm text-muted-foreground leading-relaxed mb-6">
                      {build.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {build.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Arrow */}
                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary bg-background">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}