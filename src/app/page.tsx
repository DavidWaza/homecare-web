"use client";
import Banner from "@/components/Banner/Banner";
import AboutSection from "@/components/AboutSection/AboutSection";
import HealthServices from "@/components/HealthServices/HealthServices";
import Values from "@/components/Values/Values";
import ContactSection from "@/components/ContactSection/ContactSection";
import Faq from "@/components/Faq/Faq";
import Testimonial from "@/components/Testimonials/Testimonial";
import Overview from "@/components/Overview/Overview";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-white">
        <Banner />
        <Overview />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden md:block"
        >
          <AboutSection />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <HealthServices />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Values />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <ContactSection />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Faq />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden md:block"
        >
          <Testimonial />
        </motion.div>
      </main>
    </PageWrapper>
  );
}
