import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../assets/slider/inicio001.webp";
import img2 from "../assets/slider/inicio002.jpg";
import img3 from "../assets/slider/inicio003.jpg";
import img4 from "../assets/slider/inicio004.jpg";
import img5 from "../assets/slider/inicio005.jpg";

const images = [img3.src, img1.src, img2.src, img4.src, img5.src];

import { Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full animate-slide-left md:animate-slide-left-desktop"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="Imagenes Slider"
              className="h-full w-full rounded-2xl border-2 border-slate-950 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
