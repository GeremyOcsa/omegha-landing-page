import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../assets/slider/01.webp";
import img2 from "../assets/slider/02.webp";
import img3 from "../assets/slider/03.webp";
import img4 from "../assets/slider/04.webp";
import img5 from "../assets/slider/05.webp";

const images = [img1.src, img2.src, img3.src, img4.src, img5.src];

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
        className="mySwiper h-full w-full animate-slide-left md:w-[600px] md:animate-slide-left-desktop"
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
