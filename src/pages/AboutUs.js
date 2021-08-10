import React from "react";
import AboutSection from "../components/AboutSection";
import ContactUs from "../pages/ContactUs";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ContactUs />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
