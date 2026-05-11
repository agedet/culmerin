"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LuInstagram, LuLinkedin, LuX } from "react-icons/lu";
import Image from "next/image";

export default function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background pt-24 pb-8 px-6 overflow-hidden border-t border-border/50">
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Positioning Column (Takes up 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div>
                <Image
                  src="/culmerinlogowhite.png" 
                  alt="Culmerin Logo" 
                  width={100} 
                  height={100} 
                  className="w-full h-full" 
                />
              </div>
            </Link>
            <p className="font-outfit text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Turning disconnected business activity into a visible revenue system. We build the architecture that helps SMEs close more sales with less friction.
            </p>
            
            {/* Socials - Prioritizing LinkedIn per strategy */}
            <div className="flex items-center gap-4">
                <a href="#" className="p-2.5 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors duration-300 text-muted-foreground">
                    <LuLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="p-2.5 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors duration-300 text-muted-foreground">
                    <LuInstagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="p-2.5 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors duration-300 text-muted-foreground">
                <LuX className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-inter text-sm font-semibold text-foreground tracking-widest uppercase mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "") === "home" ? "" : link.toLowerCase().replace(" ", "")}`} className="font-outfit text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-3">
            <h4 className="font-inter text-sm font-semibold text-foreground tracking-widest uppercase mb-6">Capabilities</h4>
            <ul className="flex flex-col gap-4">
              {[
                "Brand Strategy & Identity", 
                "Full-Stack Engineering", 
                "AI Automations", 
                "CRM Integrations", 
                "Sales Systems"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="font-outfit text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          {/* <div className="lg:col-span-3">
            <h4 className="font-inter text-sm font-semibold text-foreground tracking-widest uppercase mb-6">Reach Out</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3 text-sm font-outfit text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Lagos, Nigeria <br/>(Serving Global B2B)</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-outfit text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@culmerin.com" className="hover:text-primary transition-colors duration-300">
                  hello@culmerin.com
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* --- BOTTOM SECTION (Legal & Copyright) --- */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-outfit text-sm text-muted-foreground/70">
            &copy; {currentYear} Culmerin Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-outfit text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-outfit text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>

      {/* --- MASSIVE BACKGROUND WATERMARK --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[15vw] font-inter font-black text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter">
        CULMERIN
      </div>

    </footer>
  );
}