import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection";
import HeroStats from "@/components/HeroStats";
import ServiceSection from "@/components/ServiceSection";
import BlogSection from "@/components/BlogSection";
import Cta from "@/components/Cta";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroStats />
      <ServiceSection />
      <Contact />
      <BlogSection />
      <Cta />
    </div>
  );
}
