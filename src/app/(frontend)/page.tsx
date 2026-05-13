// import Contact from "@/components/Contact/Contact";
// import HeroSection from "@/components/Homepage/HeroSection";
import HeroStats from "@/components/Homepage/HeroStats";
// import ServiceSection from "@/components/Homepage/ServiceSection";
// import BlogSection from "@/components/Homepage/BlogSection";
// import Cta from "@/components/Homepage/Cta";
// import ProblemSection from "@/components/Homepage/ProblemSection";
import Hero from "@/components/Homepage/Hero";
import Problem from "@/components/Homepage/Problem";
import Services from "@/components/Homepage/Services";
import SolutionSection from "@/components/Homepage/Solutions";
import WhoWeServe from "@/components/Homepage/WhoweServer";
import ProcessSection from "@/components/Homepage/OurProcess";
import ContactSection from "@/components/Homepage/Contact-Landing";
import FinalCTA from "@/components/Homepage/FinalCta";
// import Navbar from "@/components/Global/Navbar";
// import FooterNew from "@/components/Global/FooterNew";
import ProofSection from "@/components/Homepage/Proof";
// import ServicesSection from "@/components/Homepage/Services";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <Hero />
      <Problem />
      <SolutionSection />
      <Services />
      <WhoWeServe />
      <ProcessSection />
      <HeroStats />
      <ProofSection />
      <ContactSection />
      <FinalCTA />
      {/* <FooterNew /> */}
    </main>
  );
}
