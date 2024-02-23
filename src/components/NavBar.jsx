import { useState } from 'react';
import data from '../assets/index-assets';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between p-4 items-center">
        <img src={data.myLogo} className='w-12' alt="Logo" />
        <button onClick={toggleMenu} className="z-20">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Menu Items */}
      <div className={`transition-all ease-in-out ${isMenuOpen ? 'bg-black bg-opacity-20' : ''}`}>
        <ul className={`flex flex-col items-center w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('voiceovers')}>Voiceovers</button></li>
          <li><button onClick={() => scrollToSection('videos')}>Videos</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
