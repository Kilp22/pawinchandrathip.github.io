import '../HeroSection.css'; // Make sure this path is correct

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 
        className="text-8xl mb-4 font-hillbear leading-none"
        style={{
          opacity: 0, // Initial opacity set to 0
          animation: 'moveUp 0.5s ease-in-out forwards 0.5s', // Animation with delay
        }}
      >
        Pawin Chandrathip
      </h1>
      <p 
        className="text-4xl font-light font-valencia"
        style={{
          opacity: 0, // Initial opacity set to 0
          animation: 'moveUp 0.5s ease-in-out forwards 1.3s', // Animation with delay
        }}
      >
        English-Thai Voiceover & Translator
      </p>
    </div>
  );
};

export default HeroSection;
