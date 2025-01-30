import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import HeroStats from "@/components/HeroStats";
import ServiceSection from "@/components/ServiceSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroStats />
      <ServiceSection />
      <Contact />

    </div>
  );
}
