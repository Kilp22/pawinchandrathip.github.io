import { useEffect } from 'react';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';


import MainPage from './pages/MainPage';
import MySkills from './pages/MySkills';
import Voiceover from './pages/Voiceover';
// import ThaiVoiceover from './pages/ThaiVoiceover(Not-now)';
// import EnglishVoiceover from './pages/EnglishVoiceover(Not-now)';
import Translation from './pages/Translation';
// import EnglishToThai from './pages/EnglishToThai(Not-now)';
// import ThaiToEnglish from './pages/ThaiToEnglish(Not-now)';
import WhyChooseMe from './pages/WhyChooseMe';
import PreviousProjects from './pages/PreviousProjects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const App = () => {
  useEffect(() => {
    // Insert the gtag.js script
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=AW-752447096`;
    document.head.appendChild(scriptTag);

    // Insert the inline script to initialize gtag
    const scriptInline = document.createElement('script');
    const inlineCode = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-752447096');
    `;
    scriptInline.textContent = inlineCode;
    document.head.appendChild(scriptInline);

    return () => {
      // Clean up the scripts when the component unmounts
      document.head.removeChild(scriptTag);
      document.head.removeChild(scriptInline);
    };
  }, []);



  
  
  return (
    <div className="bg-teal-600 text-white">
      <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/voiceover" element={<Voiceover />} />
          {/* <Route path="/thai-voiceover" element={<ThaiVoiceover />} />
          <Route path="/english-voiceover" element={<EnglishVoiceover />} /> */}
          <Route path="/translation" element={<Translation />} />
          {/* <Route path="/english-to-thai" element={<EnglishToThai />} />
          <Route path="/thai-to-english" element={<ThaiToEnglish />} /> */}
          <Route path="/why-choose-me" element={<WhyChooseMe />} />
          <Route path="/previous-projects" element={<PreviousProjects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

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
