import { useState } from "react";
import React from "react";
import vision from "./../assets/vision.png";
import mission from "./../assets/mission.png";
import director from "./../assets/director.png";

export default function About() {
  const [showFullMessage, setShowFullMessage] = useState(false);

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

  const fullMessage = initialMessage  + additionalMessage;

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };
 

  return (
    <div className="bg-white max-w-6xl  mx-auto w-full mb-10">
      {/* agency profile */}
      <div className="mt-10 md:mt-20 mx-3 md:mx-0">
        <div className="uppercase  flex justify-center agencyProfile text-4xl">
          <h1 className="font-semibold">
            <span className="text-red-700">Agency</span> Profile
          </h1>
        </div>
        <div className="max-w-4xl mx-auto text-center bg-slate-300 mt-5 p-4 rounded-lg agencyProfileText font-mono">
          <p className="font-light">
            <span className="font-semibold  text-slate-900">
              LBN Key Resource (Pvt) Ltd
            </span>{" "}
            was established in 2006, with an experienced staff in the recruiting
            field and has earned a prestigious name both in Sri Lanka and abroad
            and absolutely clean, transparent and high professionalism in
            manpower recruitment field.
          </p>
        </div>
      </div>

      {/* vision and mission */}

      <div className="mt-16 md:mt-24 grid grid-cols-1   md:grid-cols-2 gap-4 max-w-4xl mx-3 md:mx-auto vision ">
        <div className="w-full py-[1rem] px-4 bg-amber-200 rounded-lg shadow-lg">
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

        <div className="w-full py-4 md:py-[1rem] px-4  bg-green-200 rounded-lg shadow-lg md:mt-0 mt-4 ">
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
      <div className="mt-20 mx-3 md:mx-auto ">
        <div className="uppercase  flex justify-center agencyProfile text-3xl ">
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

<p className="text-justify directorMessage">
  
  {showFullMessage
    ? fullMessage.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br/>
          
        </React.Fragment>
      ))
    : initialMessage.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br/><br/>
        </React.Fragment>
      ))
  }
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

    </div>
  );
}
