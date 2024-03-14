/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History } from 'swiper/modules';
import 'swiper/css'; // Ensure you import Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add a prop for slides data
const SlickSlider = ({ previousworks }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="bg-black flex justify-center items-center" // Tailwind classes for the Swiper container
      >
        {previousworks.map((slide, index) => (
          <SwiperSlide key={slide.id} data-history={slide.id} className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <img src={slide.image}
              alt={`${slide.name} ${slide.description} ${index + 1}`}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="text-center">
              <p className="text-sm">
              {slide.name}<br />
              {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlickSlider;
