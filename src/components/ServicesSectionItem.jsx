import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../ServicesSection.css'; // Make sure this path is correct

const ServicesSectionItem = ({ id, title, description, images, audioUrl }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const isEven = parseInt(id) % 2 === 0;

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative text-center p-8 my-20 flex flex-col items-center justify-center h-screen">
      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} text-6xl font-bold p-4`}>{id}</div>

      <div className={`flex w-full h-full ${isEven ? 'flex-row-reverse' : ''}`}>
        {/* Text */}
        <div className={`flex flex-col justify-center w-full md:w-1/2 text-left p-4`}>
          <h3 className="text-2xl md:text-[4rem] mt-2">{title}</h3>
          <p className="text-1xl md:text-[2rem]">{description}</p>
          {audioUrl && (
            <div className="mt-4 w-full md:w-1/2">
              <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
              </audio>
              </div>
          )}
        </div>


        {/* Images */}
        <div className="relative w-1/2 h-full">
          {images.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`${title} ${index + 1}`}
              className={`absolute w-2/3 cursor-pointer transition-all duration-700 ease-in-out max-w-[470px] ${getImagePosition(index, isEven)}`}
              onClick={() => handleImageClick(pic)}
              style={{
                transform: startAnimation ? 'translateX(0)' : 'translateX(-50px)',
                opacity: startAnimation ? 1 : 0,
                transition: `transform 1s ${index * 0.5}s, opacity 1s ${index * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enlarged image with backdrop */}
      {enlargedImage && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-transform duration-700 ease-in-out" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Enlarged" className="max-w-full max-h-full cursor-pointer" />
        </div>
      )}
    </div>
  );
};

ServicesSectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  audioUrl: PropTypes.string
};

function getImagePosition(index, isEven) {
  const positions = [
    'top-0 left-0 transform -translate-x-12 -translate-y-12',
    'top-1/4 left-1/4 transform translate-x-12 -translate-y-12',
    'top-1/2 left-0 transform -translate-x-12 translate-y-12',
    'top-3/4 left-1/4 transform translate-x-12 translate-y-12'
  ];
  return isEven ? positions[index].replace('left', 'right') : positions[index];
}

export default ServicesSectionItem;
