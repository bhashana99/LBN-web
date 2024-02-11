import React from "react";
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import welcome from "../assets/images/welcome.jpg";
import FadeIn from "../components/FadeIn";
import img1 from "../assets/images/cover/tim-mossholder-GOMhuCj-O9w-unsplash.jpg";
import img2 from "../assets/images/cover/home-background.jpg";
import img3 from "../assets/images/cover/home-background5.jpg";
import img4 from "../assets/images/cover/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg";
export default function Home() {
  SwiperCore.use([Navigation]);

  const imageUrls = [img1, img2, img4, img3];

  return (
    <div className="min-w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[700px] transition-transform transform origin-center"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FadeIn delay={0.2} direction="middle" padding fullWidth>
      <div className="my-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div>
          <h1 className="text-4xl font-light uppercase font-mono mb-5 text-center md:text-start">
            Welcome to{" "}
            <span className="text-green-400 font-bold">
              LBN Key Resource (Pvt) Ltd
            </span>
          </h1>
          <p className="text-justify mx-5 md:mx-0">
            <span className="font-bold">LBN Key Resource (Pvt) Ltd</span> is an
            authorized employment agency, approved by the bureau of foreign
            employment of Sri Lanka to act as an agent for foreign principals in
            recruiting and supplying personnel for all categories of foreign
            employment.
          </p>
          <div className="flex flex-wrap">
            <p className="mt-5 text-xl ">You can find jobs in </p>
            <ReactTyped
              className="mt-5 text-xl pl-2 font-bold text-black "
              strings={[
                "Japan",
                "Dubai",
                "Poland",
                "Maldives",
                "Baharain",
                "Doha Qatar",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <p className="mt-5 text-xl ">through us.</p>
          </div>
        </div>
        <div>
          <img src={welcome} alt="" />
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
