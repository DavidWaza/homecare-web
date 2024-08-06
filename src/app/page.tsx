import Banner from "@/components/Banner/Banner";
import AboutSection from "@/components/AboutSection/AboutSection";
import HealthServices from "@/components/HealthServices/HealthServices";
import Values from "@/components/Values/Values";
import ContactSection from "@/components/ContactSection/ContactSection";
import Faq from "@/components/Faq/Faq";
import Testimonial from "@/components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="bg-white">
    
      <Banner />
      <AboutSection />
      <HealthServices />
      <Values />
      <ContactSection />
      <Faq />
      <Testimonial />
    </main>
  );
}
