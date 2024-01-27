import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination,Autoplay} from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';

import img1 from '../assets/images/cover/tim-mossholder-GOMhuCj-O9w-unsplash.jpg';
import img2 from '../assets/images/cover/home-background.jpg';
import img3 from '../assets/images/cover/home-background5.jpg';
import img4 from '../assets/images/cover/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg';
export default function Home() {
  SwiperCore.use([Navigation]);

  const imageUrls = [img1, img2,img4,img3];
  

  return (
    <div className="min-w-full">
      <Swiper modules={[Navigation,Pagination,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {imageUrls.map((url, index) => (
           <SwiperSlide key={index}>
           <div
             className="h-[500px] transition-transform transform origin-center"
             style={{
               backgroundImage: `url(${url})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
           ></div> 
         </SwiperSlide>
        ) )}
       
      </Swiper>
    </div>
  );
}
