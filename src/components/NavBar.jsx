import { useState } from 'react';
import data from '../assets/index-assets';
import { Link } from 'react-router-dom';

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
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black">
      <div className="flex justify-between p-4 items-center">
        <img src={data.myLogo} className='w-12' alt="Logo" />
        <button onClick={toggleMenu} className="z-40">
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
      {/* Use fixed, inset-0 to cover the whole screen and flex for centering */}
      <div className={`fixed inset-0 ${isMenuOpen ? 'bg-black bg-opacity-100 flex flex-col items-center justify-center text-2xl md:text-4xl leading-loose md:leading-loose' : 'hidden'}`}>
        <ul>
          <Link to="/" className="block">Home</Link>
          <Link to="/thai-voiceover" className="nav-link">Thai Voiceover</Link>
          <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
          <li><button onClick={() => scrollToSection('Myservices')}>My Services</button></li>
          <li><button onClick={() => scrollToSection('services')}>Showcase</button></li>
          <li><button onClick={() => scrollToSection('voiceovers')}>Voiceovers</button></li>
          <li><button onClick={() => scrollToSection('videos')}>Videos</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('previousWorksSection')}>Projects I Contributed</button></li>
          <li><button onClick={() => scrollToSection('mytestimonials')}>Testimonials</button></li>
          <li><button onClick={() => scrollToSection('clients')}>Clients Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
