import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import welcome from "../assets/images/welcome.jpg";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";
import img1 from "../assets/images/cover/tim-mossholder-GOMhuCj-O9w-unsplash.jpg";
import img2 from "../assets/images/cover/home-background.jpg";
import img3 from "../assets/images/cover/home-background5.jpg";
import img4 from "../assets/images/cover/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg";

export default function Home() {
  SwiperCore.use([Navigation]);

  const imageUrls = [img1, img2, img4, img3];

  const [showVacancyError, setShowVacancyError] = useState(false);
  const [showVacancy, setShowVacancy] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        setShowVacancyError(false);
        const res = await fetch("/api/vacancy/get-vacancies");
        const data = await res.json();
        if (data.success === false) {
          setShowVacancyError(true);
          return;
        }

        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setShowVacancy(sortedData);
      } catch (error) {
        setShowVacancyError(true);
        console.log(showVacancyError);
      }
    };

    fetchVacancies();
  }, []);

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
        <div className="my-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-4 ">
          <div>
            <h1 className="text-4xl font-light uppercase font-mono mb-5 text-center md:text-start">
              Welcome to{" "}
              <span className="text-green-400 font-bold">
                LBN Key Resource (Pvt) Ltd
              </span>
            </h1>
            <p className="text-justify mx-5 md:mx-0">
              <span className="font-bold">LBN Key Resource (Pvt) Ltd</span> is
              an authorized employment agency, approved by the bureau of foreign
              employment of Sri Lanka to act as an agent for foreign principals
              in recruiting and supplying personnel for all categories of
              foreign employment.
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
                  "Bahrain",
                  "Doha Qatar",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
              <p className="mt-0 md:mt-5 text-xl pl-0 md:pl-2 ">through us.</p>
            </div>
            <Link to="/about">
              <p className="text-blue-400 underline mt-3">
                Get more info about us
              </p>
            </Link>
          </div>
          <div>
            <img src={welcome} alt="" />
          </div>
        </div>
      </FadeIn>

      <div className="my-10 max-w-7xl mx-auto">
        <div>
          <h2 className="uppercase text-blue-500 text-3xl  font-mono">
            Latest vacancies
          </h2>
          <Link to="/vacancies">
            <p className="font-light hover:underline"> show more vacancies</p>
          </Link>
        </div>
        <div>
          {showVacancy && showVacancy.length > 0 && (
            <div className="flex flex-col md:flex-row gap-5 mx-5 mt-5">
              {showVacancy.slice(0, 3).map((vacancy) => (
                <div
                  key={vacancy._id}
                  className="flex flex-col gap-5 border-solid border-2 border-slate-200 mb-4 shadow-2xl md:shadow-lg hover:shadow-2xl w-full md:w-96 hover:scale-95"
                >
                  <div className="basis-1/4">
                    <img
                      src={vacancy.countryFlag}
                      alt="country flag"
                      className="h-40 text-center  w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 basis-2/4 ml-3 md:ml-0 ">
                    <div className="md:ml-3">
                      <h3 className="font-semibold mt-2 text-2xl">
                        {vacancy.title}
                      </h3>
                    </div>
                    <div className="md:ml-3">
                      <p>{vacancy.description}</p>
                    </div>
                    <div className="mt-2 md:ml-3">
                      <p className="text-green-800 font-bold">
                        {vacancy.salary}
                      </p>
                    </div>
                  </div>

                  <div className="basis-1/4 flex items-center justify-center text-center mb-5  bg-green-700 md:bg-transparent mx-5  ">
                    <Link to={`/vacancy/${vacancy._id}`} className="w-full">
                      <button className="bg-green-700 rounded-lg p-4 my-auto text-white w-full">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
