import { useState } from 'react';
import data from '../data/index-data';

const MyTestimonials = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-white text-black">
      <div className='flex flex-col justify-center items-center gap-0'>
        <h2 className='text-3xl md:text-[60px] font-bold'>Testimonials</h2><br /><br />
        <h3 className='text-1xl md:text-[20px] pb-1 font-bold'>From Upwork and Fiverr</h3><br />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center w-full gap-y-0 gap-x-0 px-4 md:px-20'>
        {data.testimonials.map((testimonials) => (
          <div key={testimonials.name} className='flex flex-col items-center w-80 h-40 justify-center'>
            <img 
              src={testimonials.image} 
              className='w-80 cursor-pointer' 
              alt={`My Testimonials ${testimonials.NoID} ${testimonials.name}: ${testimonials.description}`} 
              onClick={() => handleImageClick(testimonials.image)} 
            />
            <h3 className='text-1xl text-center font-bold '>{testimonials.name}</h3>
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

export default MyTestimonials;