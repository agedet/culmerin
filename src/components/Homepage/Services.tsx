"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Service data updated (removed icons, steps, and features)
const services = [
  {
    title: "Brand Strategy & Identity",
    description: "Positioning your business to win trust and justify premium pricing. We help you define your market position, refine your core message, and create a premium visual identity.",
    image: '/Flexible.jpg', // Image will trigger on index 0 (Card 1)
  },
  {
    title: "Full-Stack Software Engineering",
    description: "Building custom operational tools and web platforms. We develop secure software that supports efficiency and solves your specific operational bottlenecks.",
  },
  {
    title: "AI Automations",
    description: "Eliminating repetitive tasks to speed up your operations. We help businesses save time and reduce manual data entry across their daily workflows.",
    image: '/AI_Engineering.jpg', // Image will trigger on index 2 (Card 3)
  },
  {
    title: "CRM Integrations",
    description: "Centralizing your sales pipeline and customer data. We set up systems so your customer histories live in one secure place, empowering faster decisions.",
  },
  {
    title: "Sales & Marketing Systems",
    description: "Creating automated funnels that convert. We help businesses attract, nurture, and close qualified leads by engineering a clearer sales process.",
    image: '/AI_singapore-1.jpg', // Image will trigger on index 4 (Card 5)
  },
];

export default function ServicesVerticalTrack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the right column
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-background py-32 px-6 overflow-hidden border-t border-border/50">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Parent Flex Container. 
        Because the right column is taller, the sticky left column 
        will remain pinned inside this boundary until the right column finishes. 
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* LEFT COLUMN: Sticky Header Context */}
        {/* "self-start sticky top-32" ensures it sticks correctly within the flex container */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50">
            <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">Our Capabilities</span>
          </div>
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
            What Capabilities Drive <br />
            <span className="text-primary">Our Growth Systems?</span>
          </h2>
          <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-8">
            Each of our services is designed to work together, not in isolation. The result is a business that looks sharper, works faster, and sells better.
          </p>
          
          <button className="group hidden md:flex items-center gap-3 font-inter text-sm font-medium text-foreground hover:text-primary transition-colors duration-300">
            View full technical stack 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT COLUMN: The Vertical Scroll Track */}
        <div className="w-full md:w-2/3 relative" ref={containerRef}>
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, index) => {
              // Determine if this is an odd-numbered card (Card 1, 3, 5 = index 0, 2, 4)
              const isOddCard = (index + 1) % 2 !== 0;

              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Service Card Content */}
                  <div className="group relative p-8 md:p-10 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors duration-500 overflow-hidden">
                    
                    {/* Subtle hover background shift */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10">
                      <h3 className="font-inter text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="font-outfit text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Render an image placeholder ONLY on odd-numbered cards */}
                      {isOddCard && (
                        <div className="mt-8 relative w-full h-[175px] bg-secondary/50 rounded-xl overflow-hidden">
                            <Image 
                              src={
                                typeof service.image === "string"
                                  ? service.image
                                  : "/AI-singapore-1.jpg"
                              } 
                                alt={service.title} 
                                fill 
                                className="object-cover opacity-80 mix-blend-lighten" 
                            /> 
                         
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-outfit text-sm tracking-widest uppercase">
                            
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}