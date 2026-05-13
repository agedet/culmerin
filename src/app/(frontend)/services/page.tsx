"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Layers, Code2, Bot, Database, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// The 5 core services mapping to our dynamic routes
const services = [
  {
    title: "Brand Strategy & Identity",
    description: "A strong brand helps people understand who you are, what you do, and why they should trust you. We define your position and create a visual identity that matches the quality of your business.",
    href: "/services/brand-strategy",
    icon: <Layers className="w-8 h-8 text-primary" />,
    tags: ["Positioning", "Visual Identity", "Messaging"],
  },
  {
    title: "Full-Stack Software Engineering",
    description: "We build practical digital products and business tools that solve real operational problems. From custom platforms to internal tools that support growth and efficiency.",
    href: "/services/software-engineering",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    tags: ["Web Apps", "Portals", "Custom Workflows"],
  },
  {
    title: "AI Automations",
    description: "Save time and reduce repetitive work by automating routine processes. Faster response times, better lead handling, and less manual effort across your operations.",
    href: "/services/ai-automations",
    icon: <Bot className="w-8 h-8 text-primary" />,
    tags: ["Workflow AI", "Task Automation", "Efficiency"],
  },
  {
    title: "CRM Integrations",
    description: "Customer data is only useful when it is organized and connected. We set up CRM systems so your sales and customer data live in one place.",
    href: "/services/crm-integrations",
    icon: <Database className="w-8 h-8 text-primary" />,
    tags: ["Pipeline Setup", "Data Sync", "Centralization"],
  },
  {
    title: "Sales & Marketing Systems",
    description: "Attract, nurture, and convert leads with a clearer sales process. This includes messaging, landing pages, conversion flows, and business development systems.",
    href: "/services/sales-systems",
    icon: <Target className="w-8 h-8 text-primary" />,
    tags: ["Lead Gen", "Funnels", "Conversion"],
  },
];

export default function ServicesPage() {
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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 flex flex-col items-center text-center">
        {/* Cinematic ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none z-0" />
        
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
                Our Capabilities
              </span>
            </div>
          </motion.div> */}

          <motion.h1 
            variants={itemVariants}
            className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.05]"
          >
            Services designed to improve <br className="hidden md:block" />
            brand clarity, operations, <br className="hidden md:block" />
            and <span className="text-primary">revenue performance.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-outfit text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Culmerin Technologies combines strategy, design, engineering, automation, and sales support to help businesses grow with less friction.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. THE PHILOSOPHY --- */}
      <section className="relative py-16 px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 border border-border/50 bg-secondary/10 rounded-3xl backdrop-blur-sm"
        >
          <h2 className="font-inter text-2xl md:text-3xl font-semibold text-foreground mb-4">
            We build systems, not isolated tasks.
          </h2>
          <p className="font-outfit text-lg text-muted-foreground">
            We do not treat branding, software, automation, and marketing as separate tasks. We build systems that connect them into one business advantage.
          </p>
        </motion.div>
      </section>

      {/* --- 3. SERVICES GRID --- */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              // Make the last item span 2 columns on medium/large screens for a clean "bento" layout
              const isLast = index === services.length - 1;
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={isLast ? "md:col-span-2 lg:col-span-2" : ""}
                >
                  <Link href={service.href} className="block h-full group">
                    <div className="h-full p-8 md:p-10 bg-card border border-border rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(223,62,13,0.05)]">
                      
                      {/* Hover subtle glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-700 pointer-events-none" />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                          <div className="p-4 rounded-2xl bg-background border border-border group-hover:border-primary/30 transition-colors duration-300">
                            {service.icon}
                          </div>
                          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                        </div>

                        <h3 className="font-inter text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="font-outfit text-muted-foreground leading-relaxed mb-8 flex-grow">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {service.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-background border border-border rounded-md text-foreground flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- 4. BOTTOM CTA --- */}
      <section className="relative py-32 px-6 border-t border-border/50 bg-secondary/5 mt-12">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="font-inter text-4xl md:text-5xl font-bold text-foreground mb-6">
            When everything works together, <br className="hidden md:block"/>
            your business becomes <span className="text-primary">easier to grow.</span>
          </h2>
          <p className="font-outfit text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop working in fragments. Let us audit your current digital stack and engineer a revenue system that scales.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-8 font-inter text-base bg-primary hover:bg-primary/90 text-white rounded-full glow-orange transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative z-10 flex items-center">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 font-inter text-base border-border hover:bg-secondary text-foreground rounded-full transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
        </motion.div>
      </section>

    </main>
  );
}