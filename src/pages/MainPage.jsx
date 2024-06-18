import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/Hero";

import ContactSection from "../components/ContactSection";
import MyservicesSection from "../components/Myservices";
import ServicesSection from "../components/ServicesSection";
// import SkillsSection from "../components/SkillsSection";
// import SkillsSection2 from "../components/SkillsSection2";
// import MyTestimonials from "../components/Testimonials";
// import ClientsSection from "../components/ClientsSection";

// import VoiceoverShowcase from "../components/VoiceoverShowcase";
// import VideoSection from "../components/VideoSection";
// import PreviousWorksSection from "../components/PreviousWorksSection";

const MainPage = () => {
    const contactRef = useRef(null);
    return(
        <>
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutMe /></div>
      <div id="Myservices"><MyservicesSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="contact" ref={contactRef}><ContactSection /></div>
        </>
    )
}

export default MainPage;
