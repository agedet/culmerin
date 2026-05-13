"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactLogic } from "../Contact/useContactLogic";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

export default function ContactSection() {
  const {
    loading,
    error,
    formData,
    handleInputChange,
    handleProjectSelectChange,
    handleChannelSelectChange,
    handleSubmit
  } = useContactLogic();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-background py-32 px-6 overflow-hidden border-t border-border/50" id="contact">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* LEFT COLUMN: Copy & Trust Signals */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-5/12 flex flex-col justify-between"
        >
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50">
              <span className="w-2 h-2 rounded-full bg-primary glow-orange animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-inter">Start the conversation</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="font-inter text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
              Let’s architect your <br />
              <span className="text-primary">next growth phase.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="font-outfit text-lg text-muted-foreground leading-relaxed mb-12">
              Tell us what you are currently working on, the operational bottlenecks you want to eliminate, and the exact business outcomes you need to achieve. We will review your systems and respond with a practical next step.
            </motion.p>
          </div>

          {/* Direct Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-colors duration-300">
              <div className="p-3 rounded-lg bg-secondary/50 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-inter text-sm font-semibold text-foreground mb-1">Global Headquarters</h4>
                <p className="font-outfit text-sm text-muted-foreground">Lagos, Nigeria <br/>(Serving global B2B clients)</p>
              </div>
            </div> */}

            {/* <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-colors duration-300">
              <div className="p-3 rounded-lg bg-secondary/50 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-inter text-sm font-semibold text-foreground mb-1">Direct Email</h4>
                <p className="font-outfit text-sm text-muted-foreground">culmerin@gmail.com</p>
              </div>
            </div> */}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: The Lead Capture Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <div className="p-8 md:p-10 bg-card border border-border rounded-2xl relative overflow-hidden">
            {/* Subtle inner card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

            <form 
              className="relative z-10 flex flex-col gap-6" 
              onSubmit={handleSubmit}
            >
              <div>
                {error && (
                  <p className="text-red-500 text-center mb-2 font-medium">
                    {error}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {/* Full Name */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-full flex flex-col gap-2 group">
                    <label htmlFor="firstName" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      name='firstName'
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name" 
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 group">
                    <label htmlFor="lastName" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      name='lastName'
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name" 
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    />
                  </div>
                </div>
              
                {/* Company Name */}
                {/* <div className="w-full flex flex-col gap-2 group">
                  <label htmlFor="company" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    name='company'
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Acme Corp" 
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  />
                </div> */}

                {/* Email Address */}
                <div className="w-full flex flex-col gap-2 group">
                  <label htmlFor="email" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="enter your email address" 
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                {/* Phone Number */}
                {/* <div className="w-full flex flex-col gap-2 group">
                  <label htmlFor="phone" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name='phone'
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  />
                </div> */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                      <Label>
                          How did you find Culmerin Technologies?
                      </Label>
                      
                      <Select onValueChange={handleChannelSelectChange}>
                          <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                          </SelectTrigger>

                          <SelectContent>
                              <SelectItem value='google'>Google</SelectItem>
                              <SelectItem value='facebook'>Facebook</SelectItem>
                              <SelectItem value='instagram'>Instagram</SelectItem>
                              <SelectItem value='twitter'>Twitter</SelectItem>
                              <SelectItem value='linkedin'>LinkedIn</SelectItem>
                              <SelectItem value='other'>Other</SelectItem>
                          </SelectContent>
                      </Select>
                  </div>
                
                  {/* Primary Service Dropdown */}
                  <div className="w-full flex flex-col gap-2 group">
                    <label htmlFor="service" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                      Primary Service Needed
                    </label>
                    <div className="relative">
                      <Select 
                        onValueChange={handleProjectSelectChange}
                        // className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 cursor-pointer"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an architecture..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand" className="bg-background text-foreground">
                            Brand Strategy & Identity
                          </SelectItem>
                          <SelectItem value="software" className="bg-background text-foreground">
                            Full-Stack Software Engineering
                          </SelectItem>
                          <SelectItem value="crm" className="bg-background text-foreground">
                            CRM & AI Automations
                          </SelectItem>
                          <SelectItem value="sales" className="bg-background text-foreground">
                            Sales & Marketing Systems
                          </SelectItem>
                          <SelectItem value="custom" className="bg-background text-foreground">
                            Custom Solutions
                          </SelectItem>
                        </SelectContent>
                      </Select>
                        {/* <option>
                          Select an architecture...
                        </option>
                        <option 
                          value="brand" 
                          className="bg-background text-foreground"
                        >
                          Brand Strategy & Identity
                        </option>
                        <option 
                          value="software" 
                          className="bg-background text-foreground"
                        >
                          Full-Stack Software Engineering
                        </option>
                        <option 
                          value="crm" 
                          className="bg-background text-foreground"
                        >
                          CRM & AI Automations
                        </option>
                        <option 
                          value="sales" 
                          className="bg-background text-foreground"
                        >
                          Sales & Marketing Systems
                        </option>
                        <option 
                          value="custom" 
                          className="bg-background text-foreground"
                        >
                          Custom Solutions
                        </option> */}
                      
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full flex flex-col gap-2 group">
                  <label htmlFor="details" className="font-inter text-sm font-medium text-foreground group-focus-within:text-primary transition-colors">
                    Project Details & Current Challenges
                  </label>
                  <textarea 
                    id='projectDetails' 
                    name='projectDetails'
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                    rows={4}
                    placeholder="Tell us about your current tech stack, revenue goals, and the bottlenecks holding you back..." 
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-outfit text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                  ></textarea>
                  {/* <p className="font-outfit text-xs text-muted-foreground/70 mt-1">
                    The more context you provide, the better we can prepare for our initial audit.
                  </p> */}
                </div>
              </div>

                {/* Submit Button */}
                <button
                  // size='lg' 
                  type="submit"
                  className="z-10 mt-4 group relative w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-inter text-base font-semibold py-4 rounded-xl glow-orange transition-all duration-300 overflow-hidden disabled:bg-primary/10 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {/* button shine sweep effect on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  
                  <span>{loading ? "Processing..." : "Submit Audit Request"}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}