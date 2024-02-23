import { useState, useEffect, useRef } from 'react';

const SkillsSection2 = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const sectionRef = useRef(null); // Ref for the Skills section

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 2; // Trigger halfway through the screen

      if (sectionTop <= triggerPoint) {
        setShowFirstLine(true);
        setTimeout(() => setShowSecondLine(true), 400); // Delay for second line
      } else {
        setShowFirstLine(false);
        setShowSecondLine(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center h-screen text-center p-8 text-white">
      <h2 className={`text-6xl md:text-[6rem] opacity-20 transition-all duration-700 ease-in-out ${showFirstLine ? 'translate-x-0' : '-translate-x-full'} top-[100%] z-0 mb-0 leading-none font-valencia`}>
      Skills-Translation & Writing
      </h2>
      <p className={`text-xl sm:text-2xl md:text-[2rem] font-valencia mt-20 transition-all duration-700 ease-in-out ${showSecondLine ? 'translate-x-0' : '-translate-x-full'}`}>
        Scripts Improvement<br />
        Voiceover Script Editing<br />
        <br />
        English-Thai Translation<br />
        Thai-English Translation<br />
        Gaming Localization<br />
        Technical Topics Translation<br />
        Marketing Translation<br />
        Transcription<br />
        Proofreading<br />


        <br />
        Buddhism Content Creation & Voiceover<br />
        Buddha Teachings Checking<br />
      </p>
    </div>
  );
};

export default SkillsSection2;
