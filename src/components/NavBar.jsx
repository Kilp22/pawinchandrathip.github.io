import data from '../assets/index-assets';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between p-4">
      <img src={data.myLogo} className='w-12' />
      <ul className="flex gap-5 items-center">
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('voiceovers')}>Voiceovers</button></li>
        <li><button onClick={() => scrollToSection('videos')}>Videos</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </div>
  )
}

export default NavBar;
