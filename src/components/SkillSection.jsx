import { useState, useEffect } from 'react';

const Skills = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) { // Adjust this value as needed
      setShowFirstLine(true);
      setTimeout(() => setShowSecondLine(true), 400); // Delay for second line
    } else {
      setShowFirstLine(false);
      setShowSecondLine(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8 text-white">
      <h2 className={`text-6xl md:text-[10rem] opacity-20 absolute transition-all duration-700 ease-in-out ${showFirstLine ? 'translate-x-0' : '-translate-x-full'} top-[130%] z-0 mb-0 leading-none font-valencia`}>
        About Me
      </h2>
      <p className={`text-2xl md:text-[2rem] absolute left-[30%] font-valencia mt-20 transition-all duration-700 ease-in-out ${showSecondLine ? 'translate-x-0' : '-translate-x-full'} top-[130%]`}>
        Crafting lively and accurate English-Thai Voiceover & Translation<br />
        is not only my profession, it&apos;s my passion.
      </p>
    </div>
  );
};

export default AboutMe;
