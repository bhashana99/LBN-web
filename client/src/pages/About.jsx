import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import FadeIn from "./../components/FadeIn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vision from "./../assets/images/vision.png";
import mission from "./../assets/images/mission.png";
import director from "./../assets/images/director.png";
import avatarBoy from "./../assets/images/avatarBoy.png";
import avatarGirl from "./../assets/images/avatarGirl.png";
import logo from "./../assets/images/LBN.png";

export default function About() {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const teamData = [
    {
      name: `MR. L. B. NEIL LADDUSINGHE`,
      designation: `MANAGING DIRECTOR`,
      image: director,
    },
    {
      name: `MRS. NADEE HETTIARACHCHI`,
      designation: `BOARD OF DIRECTOR`,
      image: avatarGirl,
    },
    {
      name: `MR. WASANTHA PREMATHILAKA`,
      designation: `BOARD OF DIRECTOR`,
      image: avatarBoy,
    },
    {
      name: `MRS. R. RUWANI PERERA`,
      designation: `FINANCE MANAGER`,
      image: avatarGirl,
    },
    {
      name: `MR. K. KUMANAYAKE`,
      designation: `RECRUITING MANAGER`,
      image: avatarBoy,
    },
    {
      name: `MR. SUNIL NISHANTHA`,
      designation: `INTERNATIONAL COORDINATOR`,
      image: avatarBoy,
    },
  ];

  const initialMessage = `I, L B Neil Laddusinghe is an accountant by profession, having
  nearly 17 years of experience in accountancy both in Sri Lanka and
  the overseas.\n\n
  
  After carefully studying and having identified the gaps in
  recruitment for overseas markets and I was passionate to offer a
  fair equity for all the stakeholders in the industry. So that we
  have started LBN Key resource (Pvt) Ltd 17 years ago with a very few
  key staff members. 
  \n\n
  
  In our 17 years of journey as a recruitment agency we have been
  dealing with the customers in Middle East, Eastern Europe and Asia.
  We have successfully worked to export professionals, skilled workers
  and unskilled workers for Qatar, Saudi Arabia, Japan, Poland,
  Bahrain and UAE.`;

  const additionalMessage = `\n\n When we review our records for last 17 years we are proud to state
  that we have provided opportunities for more than 8,000 peoples in
  overseas. Among them there were 1,200 professionals, 1,600 skilled
  workers, 1,400 semi skilled workers and 3,800 unskilled workers.
  Totally we have served 55 companies in 12 countries. Among the total
  vacancies filled more than 70% were offered in Middle East
  countries. 
  \n\n

  Right now we are geared up to handle 04 projects in 03 countries
  especially for skilled and semi skilled employees. The countries are
  Doha Qatar, South Korea and Poland. \n\n
  

  We exert all our efforts to make the efficient and equitable
  pathways for professionals, skilled and unskilled people to benefit
  in overseas employment markets securing interests of both employer
  and employee. We always prioritize the requirements of the client
  the quality is the key pillar in our success. We are operating with
  the best code of practices in the industry and highly valued
  transparency as wellas the higher level of customer satisfaction.
  \n\n

  Our vision is to become the first choice for human resources for
  overseas markets and we are very sure that we will succeed in our
  vision in time to come.`;

  const fullMessage = initialMessage + additionalMessage;

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <div className="bg-white max-w-6xl  mx-auto w-full mb-10">
      <div className=" ">
        {/* agency profile */}
        <div className="mt-10 md:mt-20 mx-3 md:mx-0">
          <div className="uppercase  flex justify-center poppins text-4xl">
            <FadeIn delay={0.2} direction="down" padding fullWidth>
              <h1 className="font-semibold">
                <span className="text-red-700">Agency</span> Profile
              </h1>
            </FadeIn>
          </div>
          <FadeIn delay={0.5} direction="middle" padding fullWidth>
            <div className="max-w-4xl mx-auto text-center bg-slate-300 mt-5 p-4 rounded-lg agencyProfileText font-mono">
              <p className="font-light">
                <span className="font-semibold  text-slate-900">
                  LBN Key Resource (Pvt) Ltd
                </span>{" "}
                was established in 2006, with an experienced staff in the
                recruiting field and has earned a prestigious name both in Sri
                Lanka and abroad and absolutely clean, transparent and high
                professionalism in manpower recruitment field.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* INTRODUCTION */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="flex justify-center poppins">
            <FadeIn delay={0.4} direction="middle" padding fullWidth>
              <h1 className="uppercase  my-5 text-4xl font-semibold ">
                INTRODUCTION
              </h1>
            </FadeIn>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="col-span-3 md:col-span-1">
              <FadeIn delay={0.4} direction="right" padding fullWidth>
                <img src={logo} alt="" className=" h-32 md:h-64" />
              </FadeIn>
            </div>

            <div className="col-span-3 md:col-span-2">
              <ul className="list-disc ">
                <FadeIn delay={0.4} direction="left" padding fullWidth>
                  <li className="mb-3">
                    <p>
                      <span className="font-semibold">
                        LBN Key Resource (Pvt) Ltd
                      </span>{" "}
                      is an authorized employment agency, approved by the bureau
                      of foreign employment of Sri Lanka to act as an agent for
                      foreign principals in recruiting and supplying personnel
                      for all categories of foreign employment.
                    </p>
                  </li>
                </FadeIn>
                <FadeIn delay={0.5} direction="left" padding fullWidth>
                  <li>
                    <p>
                      <span className="font-semibold">
                        LBN Key Resource (Pvt) Ltd
                      </span>{" "}
                      was established in 2006 by a team of young experienced
                      staff with and initial investment of Rs.2 Million. It has
                      gained recognition in Sri Lanka as a one of the market
                      leaders in the field of foreign employment.
                    </p>
                  </li>
                </FadeIn>
                <FadeIn delay={0.8} direction="left" padding fullWidth>
                  <li>
                    The <span className="font-semibold">main business</span> of
                    LBN Key Resource (Pvt) Ltd consists of supplying of
                    professionals, technical, skilled and unskilled man power to
                    foreign principals, ticketing and travel agent.
                  </li>
                </FadeIn>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* vision and mission */}

      <div className="mt-16 md:mt-24 grid grid-cols-1   md:grid-cols-2 gap-4 max-w-4xl mx-3 md:mx-auto vision ">
        <div className="w-full py-[1rem] px-4 bg-amber-200 rounded-lg shadow-lg hover:scale-95">
          <img src={vision} alt="" className="w-20 mx-auto mt-[-3rem] " />
          <div>
            <h2 className="text-2xl font-bold text-center py-4 uppercase text-sky-950">
              Vision
            </h2>
            <p className="text-center text-3xl  font-light">
              <span className="text-4xl font-bold">“</span>We want to be the
              best choice for human resources for overseas market.{" "}
              <span className="text-4xl font-semibold">”</span>
            </p>
          </div>
        </div>

        <div className="w-full py-4 md:py-[1rem] px-4  bg-green-200 rounded-lg shadow-lg md:mt-0 mt-4 hover:scale-95 ">
          <img src={mission} alt="" className="w-20 mx-auto mt-[-3rem] " />
          <div>
            <h2 className="text-2xl font-bold text-center py-4 text-sky-950 uppercase">
              Mission
            </h2>
            <p className="text-center text-xl font-light">
              <span className="text-2xl font-bold">“</span>To make efficient and
              equitable pathways for professionals, skilled and unskilled people
              to benefit in overseas employment markets securing interests of
              both employer and employee.
              <span className="text-2xl font-bold">”</span>
            </p>
          </div>
        </div>
      </div>

      {/* director message */}
      <FadeIn delay={0.2} direction="middle" padding fullWidth>
        <div className="mt-20 mx-3 md:mx-auto ">
          <div className="uppercase  flex justify-center poppins text-3xl ">
            <h2 className="text-slate-950 font-bold  mb-10">
              DIRECTOR’S MESSAGE
            </h2>
          </div>

          <div className="w-full max-w-4xl mx-auto ">
            <img
              src={director}
              className="max-h-48 md:max-h-80 float-left pr-5"
              alt="director image"
            />

            <p className="text-justify roboto">
              {showFullMessage
                ? fullMessage.split("\n\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))
                : initialMessage.split("\n\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
              {showFullMessage && (
                <span
                  className="cursor-pointer flex justify-center rounded-lg text-blue-600 hover:underline hover:opacity-95"
                  onClick={toggleMessage}
                >
                  Show Less..
                </span>
              )}
              {!showFullMessage && (
                <span
                  className=" cursor-pointer flex justify-center  rounded-lg text-blue-600 hover:underline hover:opacity-95"
                  onClick={toggleMessage}
                >
                  Read More..
                </span>
              )}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* our team */}

      <div className="max-w-4xl mx-auto poppins">
        <div className="uppercase  flex justify-center agencyProfile text-3xl mt-20">
          <h2 className="text-slate-950 font-bold">Our Team</h2>
        </div>
        <div className=" pb-10 ">
          <div className="w-4/5 md:w-full m-auto">
            <div className="mt-10  ">
              <Slider {...settings}>
                {teamData.map((d) => (
                  <div className="bg-blue-100 h-[150px] px-5 rounded-xl shadow-2xl hover:scale-95 hover:shadow-none flex justify-center items-center ">
                    <div className="flex flex-col justify-center items-center text-center ">
                      <h3 className="text-xl font-semibold mb-2 md:my-5 text-slate-900">
                        {d.designation}
                      </h3>
                      <p className="text-semibold font-normal text-blue-900 ">
                        {d.name}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* CORPORATE INFORMATION */}
      <div className="max-w-4xl mx-auto poppins">
        <div className="uppercase flex justify-center agencyProfile text-3xl mt-10">
          <h2 className="text-slate-950 font-bold text-center">
            CORPORATE <span className="text-red-500">INFORMATION</span>{" "}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row m-5 items-center gap-6 mx-auto justify-center ">
          <div className="">
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <p>BUSINESS</p>
                <p className="font-semibold ml-5 text-slate-600">
                  LIMITED LIABILITY COMPANY
                </p>
              </div>
            </div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <p>NAME</p>
                <p className="font-semibold ml-5 text-slate-600">
                  LBN KEY RESOURCE (PVT) LTD
                </p>
              </div>
            </div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center ">
              <div>
                <p className="bg-rose-200">COMPANY REGISTRATION NUMBER</p>
                <p className="font-semibold ml-5 text-slate-600">
                  P V 00214762
                </p>
              </div>
            </div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <p>OBJECT</p>
                <p className="font-bold ml-5 text-slate-600">
                  RECRUITER OF MAN POWER FOR <br />
                  OVERSEAS MARKET
                </p>
              </div>
            </div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <div className="flex flex-row gap-4 items-center">
              <div>
                <p>ACCREDITATION</p>
                <p className="font-bold ml-5 text-red-600">LICENSE NO: 2227</p>
              </div>
            </div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2 hidden md:flex" />
          </div>

          <div>
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            <h4 className="text-center  my-4">Bank Details</h4>
            
            <div className="flex flex-row gap-4 items-center my-2">
              <div>
                <p>
                BANKERS
                </p>
                <p className="font-semibold ml-5 text-slate-600">NDB BANK-MALABE BRANCH</p>
              </div>
            </div>
            <hr />
            
            <div className="flex flex-row gap-4 items-center my-2">
              <div>
                <p>
                ACCOUNT NAME
                </p>
                <p className="font-semibold ml-5 text-slate-600">LBN KEY RESOURCE (PVT) LTD</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row gap-4 items-center my-2">
              <div>
                <p>
                ACCOUNT NO
                </p>
                <p className="font-semibold ml-5 text-slate-600">101000865835</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row gap-4 items-center my-2">
              <div className="flex flex-row gap-4 text-center justify-center ">
                <div>
                  <p>BANK CODE</p>
                  <p className="font-semibold  text-slate-600">7214</p>
                </div>
                <div>
                  <p>BRANCH CODE</p>
                  <p className="font-semibold  text-slate-600">31</p>
                </div>
              </div>
             
            </div>
            <div className="text-center">
                <p>SWIFT CODE</p>
                <p className="font-semib text-slate-600">NDBSLKLX</p>
              </div>
            
            <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
