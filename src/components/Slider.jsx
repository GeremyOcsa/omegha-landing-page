import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@styles/global.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

export default function Slider({ gallery }) {
  return (
    <>
      <Swiper
        pagination={{ type: "fraction" }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{ enabled: true }}
        navigation={true}
        modules={[Navigation, Keyboard, Pagination]}
        className="mySwiper max-w-2xl"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
