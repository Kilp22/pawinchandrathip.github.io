import { useState } from 'react';
import data from '../data/index-data';

const ClientsSection = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-white">
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl md:text-[45px] pb-5'>Some of My Clients</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center w-full gap-8 px-4 md:px-20'>
        {data.logos.map((logo) => (
          <div key={logo.name} className='flex flex-col items-center w-48 h-40 justify-center'>
            <img 
              src={logo.image} 
              className='w-56 cursor-pointer' 
              alt={logo.name} 
              onClick={() => handleImageClick(logo.image)} 
            />
            <h3 className='text-center'>{logo.name}</h3>
          </div>
        ))}
      </div>



      {/* Enlarged image with backdrop */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Enlarged client" className="max-w-full max-h-full cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default ClientsSection;