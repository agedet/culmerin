"use client";

import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Database, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- MOCK DATABASE (You would typically fetch this from a CMS like Sanity or direct from an API) ---
const servicesData = {
  "brand-strategy": {
    title: "Brand Strategy & Identity",
    subheadline: "Positioning your business to win trust and justify premium pricing.",
    icon: <Layers className="w-8 h-8 text-primary" />,
    seoQuestion: "How Does Brand Strategy Drive B2B Sales?",
    seoAnswer: "A strong brand does more than look good; it helps buyers quickly understand who you are, what you do, and why they should trust you over competitors. We help you define your market position, refine your core message, and create a premium visual identity that matches the quality of your services.",
    deliverables: [
      "Brand discovery and auditing",
      "Positioning and messaging frameworks",
      "Visual identity and design systems",
      "Comprehensive brand guidelines",
      "Conversion-focused website messaging"
    ]
  },
  "software-engineering": {
    title: "Full-Stack Software Engineering",
    subheadline: "Building custom operational tools and web platforms for efficiency.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    seoQuestion: "Why Build Custom Full-Stack Software for Your Business?",
    seoAnswer: "Off-the-shelf software often forces you to change your business to fit the tool. We build practical digital products and business tools tailored to solve your specific operational bottlenecks. From internal employee portals to high-performance customer-facing web apps, we develop secure software that supports efficiency.",
    deliverables: [
      "Web application development",
      "Business tools and client portals",
      "Custom workflow architecture",
      "Frontend and backend development",
      "System architecture support"
    ]
  },
  "crm-integrations": {
    title: "CRM Integrations",
    subheadline: "Centralizing your sales pipeline and customer data.",
    icon: <Database className="w-8 h-8 text-primary" />,
    seoQuestion: "Why Do B2B SMEs Need Custom CRM Integrations?",
    seoAnswer: "Customer data is only actionable when it is organized and centralized. For growing service firms, disconnected tools lead to lost leads. We set up, configure, and integrate CRM systems so your sales pipeline and customer histories live in one secure place, empowering your team to make faster, better-supported business decisions.",
    deliverables: [
      "CRM setup and platform configuration",
      "Cross-platform data integration",
      "Sales pipeline architecture",
      "Contact and lead management setup",
      "Workflow synchronization"
    ]
  }
  // Add "ai-automations" and "sales-systems" here following the same pattern...
};

// Define valid slugs for TypeScript
type ServiceSlug = keyof typeof servicesData;

export default function ServiceDetailedPage({ params }: { params: { slug: string } }) {
  // Check if the route exists in our data
  const slug = params.slug as ServiceSlug;
  const service = servicesData[slug];

  if (!service) {
    notFound(); // Triggers Next.js 404 page if slug is invalid
  }

  // Animation Variants
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
    <main className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
      
      {/* --- CINEMATIC BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mb-32"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(223,62,13,0.1)]">
              {service.icon}
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground font-inter">
                Culmerin Capability
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.1]"
          >
            {service.title}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-outfit text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-primary pl-6"
          >
            {service.subheadline}
          </motion.p>
        </motion.div>


        {/* --- 2. SEO & CONTEXT SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32"
        >
          <div className="lg:col-span-5 relative">
            {/* Abstract visual element replacing a standard image */}
            <div className="aspect-square rounded-2xl bg-secondary/30 border border-border flex items-center justify-center overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border border-primary/60 animate-[spin_10s_linear_infinite_reverse]" />
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-foreground mb-6">
              {service.seoQuestion}
            </h2>
            <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
              {service.seoAnswer}
            </p>
          </div>
        </motion.div>


        {/* --- 3. DELIVERABLES SECTION (Interactive Grid) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 p-8 md:p-16 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
           {/* Ambient inner glow */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <motion.h3 variants={itemVariants} className="font-inter text-3xl font-bold text-foreground mb-12 relative z-10">
            What This Architecture Includes
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
            {service.deliverables.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 p-1 rounded-full bg-background border border-primary/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-outfit text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* --- 4. WHY IT MATTERS (Cross-selling the system) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <h3 className="font-inter text-2xl md:text-3xl font-bold text-foreground mb-6">
            Everything is Connected
          </h3>
          <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
            Most businesses do not fail because of a lack of effort. They struggle because their brand, systems, and sales process are not connected. When this service is engineered to work alongside our other systems, your business becomes easier to understand, easier to trust, and easier to grow.
          </p>
        </motion.div>


        {/* --- 5. PAGE SPECIFIC CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl bg-secondary/50 border border-primary/20 overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h4 className="font-inter text-3xl font-bold text-foreground mb-3">
              Need the right system for your business?
            </h4>
            <p className="font-outfit text-muted-foreground">
              Book a strategy call and we will help you identify your most profitable starting point.
            </p>
          </div>

          <Button 
            size="lg" 
            className="relative z-10 h-14 px-8 font-inter text-base bg-primary hover:bg-primary/90 text-white rounded-full glow-orange transition-all duration-300 group flex-shrink-0 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative z-20 flex items-center">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>

      </div>
    </main>
  );
}