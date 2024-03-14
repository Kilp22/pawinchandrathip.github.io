import { useState } from 'react';
import data from '../data/index-data';

const MyservicesSection = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-white">
      <div className='flex flex-col justify-center items-center gap-20'>
        <h2 className='text-3xl md:text-[60px] pb-5 font-bold'>My Services</h2><br /><br />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center w-full gap-y-40 gap-x-0 px-4 md:px-20'>
        {data.myservices.map((myservices) => (
          <div key={myservices.name} className='flex flex-col items-center w-80 h-40 justify-center'>
            <img 
              src={myservices.image} 
              className='w-80 cursor-pointer' 
              alt={`My service, ${myservices.name}`} 
              onClick={() => handleImageClick(myservices.image)} 
            />
            <h3 className='text-2xl text-center font-bold underline'>{myservices.name}</h3>
            <h3 className='text-1xl text-center'>{myservices.description}</h3>
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

export default MyservicesSection;