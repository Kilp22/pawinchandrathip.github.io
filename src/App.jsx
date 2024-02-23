import { useRef } from 'react';
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/ServicesSection";
import NavBar from "./components/NavBar";
import VoiceoverShowcase from "./components/VoiceoverShowcase";
import VideoSection from "./components/VideoSection";
import Skills from "./components/SkillsSection";
import Skills2 from "./components/SkillsSection2";
import Previousworks from "./components/PreviousWorksSection";

const App = () => {
  const contactRef = useRef(null);

  // const scrollToContact = () => {
  //   contactRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="bg-teal-600 text-white">
      <NavBar />
      <div id="home"><Hero /></div>
      <div id="about"><AboutMe /></div>
      <div id="services"><ServicesSection /></div>
      <div id="voiceovers"><VoiceoverShowcase /></div>
      <VoiceoverShowcase isFemale={true} />
      <div id="videos"><VideoSection /></div>
      <div id="Skills"><Skills /></div>
      <div id="Skills2"><Skills2 /></div>
      <div id="PreviousWorksSection"><Previousworks /></div>
      <div id="clients"><ClientsSection /></div>
      <div id="contact" ref={contactRef}><ContactSection /></div>
      <Footer />

      {/* Floating Button */}
      {/* <button
        onClick={scrollToContact}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Contact
      </button> */}
    </div>
  );
}

export default App;
