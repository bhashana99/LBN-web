import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { useState,useEffect } from "react";

import img1 from '../assets/images/cover/tim-mossholder-GOMhuCj-O9w-unsplash.jpg';
import img2 from '../assets/images/cover/home-background.jpg';
import img3 from '../assets/images/cover/home-background5.jpg';
import img4 from '../assets/images/cover/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg';
export default function Home() {
  SwiperCore.use([Navigation]);

  const imageUrls = [img1, img2,img4,img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(intervalId); 

  }, []);

  return (
    <div className="min-w-full">
      <Swiper navigation>
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
