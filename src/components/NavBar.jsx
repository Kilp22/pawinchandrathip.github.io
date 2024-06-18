import { useState } from 'react';
import data from '../assets/index-assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isVoiceoverOpen, setIsVoiceoverOpen] = useState(false);
  // const [isTranslationOpen, setIsTranslationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // const toggleSubmenu = (submenu) => {
  //   if (submenu === 'voiceover') {
  //     setIsVoiceoverOpen(!isVoiceoverOpen);
  //   } else if (submenu === 'translation') {
  //     setIsTranslationOpen(!isTranslationOpen);
  //   }
  // };

  // const scrollToSection = (sectionId) => {
  //   setIsMenuOpen(false);
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black">
      <div className="flex justify-between p-4 items-center">
        <img src={data.myLogo} className='w-12' alt="Logo" />
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:underline">My Services</Link>
          <Link to="/my-skills" className="text-white hover:underline">My Skills</Link>
          <Link to="/voiceover" className="text-white hover:underline">Voiceover</Link>
          {/* <div className="relative">
            <button onClick={() => toggleSubmenu('voiceover')} className="text-white hover:underline">
              Voiceover
            </button>
            {isVoiceoverOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link to="/thai-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Thai Voice
                </Link>
                <Link to="/english-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  English Voice
                </Link>
              </div>
            )}
          </div> */}
          {/* <Link to="/translation" className="text-white hover:underline">Translation</Link> */}
          {/* <div className="relative">
            <button onClick={() => toggleSubmenu('translation')} className="text-white hover:underline">
              Translation
            </button>
            {isTranslationOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link to="/english-to-thai" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  English to Thai
                </Link>
                <Link to="/thai-to-english" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Thai to English
                </Link>
              </div>
            )}
          </div> */}
          {/* <Link to="/why-choose-me" className="text-white hover:underline">Why Choose Me</Link> */}
          <Link to="/previous-projects" className="text-white hover:underline">Previous Projects</Link>
          <Link to="/testimonials" className="text-white hover:underline">Testimonials&Clients</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          {/* Add more menu items */}
        </div>
        <button onClick={toggleMenu} className="md:hidden z-40">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-white"
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
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center text-2xl leading-loose">
          <ul>
          <Link to="/" className="text-white hover:underline" onClick={handleMenuItemClick}>My Services</Link><br />
          <Link to="/my-skills" className="text-white hover:underline" onClick={handleMenuItemClick}>My Skills</Link><br />
          <Link to="/voiceover" className="text-white hover:underline" onClick={handleMenuItemClick}>Voiceover</Link><br />
          {/* <div className="relative">
            <button onClick={() => toggleSubmenu('voiceover')} className="text-white hover:underline">
              Voiceover
            </button>
            {isVoiceoverOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link to="/thai-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Thai Voice
                </Link>
                <Link to="/english-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  English Voice
                </Link>
              </div>
            )}
          </div> */}
          {/* <Link to="/translation" className="text-white hover:underline">Translation</Link> */}
          {/* <div className="relative">
            <button onClick={() => toggleSubmenu('translation')} className="text-white hover:underline">
              Translation
            </button>
            {isTranslationOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link to="/english-to-thai" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  English to Thai
                </Link>
                <Link to="/thai-to-english" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Thai to English
                </Link>
              </div>
            )}
          </div> */}
          {/* <Link to="/why-choose-me" className="text-white hover:underline" onClick={handleMenuItemClick}>Why Choose Me</Link> */}
          <Link to="/previous-projects" className="text-white hover:underline" onClick={handleMenuItemClick}>Previous Projects</Link><br />
          <Link to="/testimonials" className="text-white hover:underline" onClick={handleMenuItemClick}>Testimonials&Clients</Link><br />
          <Link to="/contact" className="text-white hover:underline" onClick={handleMenuItemClick}>Contact</Link>
          {/* Add more menu items */}
            {/* <Link to="/" className="block text-white">My Services</Link>
            <Link to="/about-me" className="text-white hover:underline">About Me</Link>
            <div className="relative">
              <button onClick={() => toggleSubmenu('voiceover')} className="text-white">
                Voiceover
              </button>
              {isVoiceoverOpen && (
                <div className="mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <Link to="/thai-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Thai Voice
                  </Link>
                  <Link to="/english-voiceover" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    English Voice
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleSubmenu('translation')} className="text-white">
                Translation
              </button>
              {isTranslationOpen && (
                <div className="mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <Link to="/english-to-thai" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    English to Thai
                  </Link>
                  <Link to="/thai-to-english" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Thai to English
                  </Link>
                </div>
              )}
            </div>
            <Link to="/why-choose-me" className="text-white hover:bg-gray-700">Why Choose Me</Link><br />
            <Link to="/Projects" className="text-white hover:bg-gray-700">Previous Projects</Link><br />
            <Link to="/testimonials" className="text-white hover:bg-gray-700">Testimonials&Clients</Link><br />
            <Link to="/contact" className="text-white hover:bg-gray-700">Contact</Link> */}
            {/* Add more menu items */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;