import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/Hero";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import MyservicesSection from "../components/Myservices";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import SkillsSection2 from "../components/SkillsSection2";
import MyTestimonials from "../components/Testimonials";
import VideoSection from "../components/VideoSection";
import VoiceoverShowcase from "../components/VoiceoverShowcase";
// import Hero from "./components/Hero";
// import Previousworks from "./components/PreviousWorksSection";
import PreviousWorksSection from "../components/PreviousWorksSection";

const MainPage = () => {
    const contactRef = useRef(null);
    return(
        <>
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutMe /></div>
      <div id="Myservices"><MyservicesSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="voiceovers"><VoiceoverShowcase /></div>
      <VoiceoverShowcase isFemale={true} />
      <div id="videos"><VideoSection /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="skills2"><SkillsSection2 /></div>
      <div id="previousWorksSection"><PreviousWorksSection /></div>
      <div id="mytestimonials"><MyTestimonials /></div>
      <div id="clients"><ClientsSection /></div>
      <div id="contact" ref={contactRef}><ContactSection /></div>
        </>
    )
}

export default MainPage;
