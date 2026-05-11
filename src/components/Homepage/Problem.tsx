"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// The 6 exact phrases broken down with custom cinematic typography classes
const phrases = [
  {
    text: "Why Do Growing SMEs\nLose Revenue?",
    className: "text-5xl md:text-7xl font-bold text-foreground font-inter tracking-tight whitespace-pre-line",
  },
  {
    text: "Many businesses lose opportunities because their brand is unclear,",
    className: "text-3xl md:text-5xl font-medium text-muted-foreground font-outfit",
  },
  {
    text: "their digital tools are disconnected,",
    className: "text-3xl md:text-5xl font-medium text-muted-foreground font-outfit",
  },
  {
    text: "and their sales process depends entirely on manual follow-up.",
    className: "text-3xl md:text-5xl font-medium text-primary font-outfit glow-orange-text",
  },
  {
    text: "In our experience auditing B2B workflows, we consistently see the same patterns: leads come in but are not captured properly, teams spend excess hours on repetitive admin work, and customer data lives in siloed spreadsheets.",
    className: "text-xl md:text-3xl font-normal text-muted-foreground font-outfit leading-relaxed max-w-4xl mx-auto",
  },
  {
    text: "Growth slows down because the business lacks a unified system.",
    className: "text-4xl md:text-6xl font-bold text-foreground font-inter tracking-tight",
  },
];

// Sub-component to handle the precise math for each sentence's entrance/exit
const ScrollPhrase = ({
  phrase,
  index,
  total,
  progress,
}: {
  phrase: typeof phrases[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // Calculate the segment of the scroll this specific phrase owns
  const start = index / total;
  const end = (index + 1) / total;
  
  // Create a buffer so the text stays fully visible in the center for a moment before moving out
  const buffer = (1 / total) * 0.3;
  const fadeInEnd = start + buffer;
  const fadeOutStart = end - buffer;

  // Map scroll progress to opacity: 0 -> 1 (hold) -> 1 -> 0
  const opacity = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );

  // Map scroll progress to Y position: bottom(100px) -> center(0) -> hold(0) -> top(-100px)
  const y = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [100, 0, 0, -100]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-6 text-center"
    >
      <h2 className={phrase.className}>{phrase.text}</h2>
    </motion.div>
  );
};

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track the scroll progress of the entire 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // The wrapper is 400vh tall to create a long scroll track
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      
      {/* Sticky container locks to the screen while you scroll through the 400vh track */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient background glow to give it depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Map through the phrases and pass the scroll progress to each */}
        {phrases.map((phrase, index) => (
          <ScrollPhrase
            key={index}
            phrase={phrase}
            index={index}
            total={phrases.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
      
    </section>
  );
}