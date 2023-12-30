import React from "react";
import FadeIn from "../components/FadeIn";
import contactImg from "../assets/images/contactImg.png";
import { FaHome, FaFax,FaWhatsapp } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto w-full  poppins mt-5 md:mt-10 ">
      <FadeIn delay={0.2} direction="middle" padding fullWidth>
        <h1 className="text-center font-bold text-4xl my-5  text-red-600">
          Contact <span className="text-black">Information</span>
        </h1>
      </FadeIn>

      {/* contact info */}
      <div className="flex flex-row m-5 items-center ">
        <div className="hidden md:flex">
          <FadeIn delay={0.2} direction="right" padding fullWidth>
            <img src={contactImg} alt="" className=" rounded-xl" />
          </FadeIn>
        </div>

        <div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <FaHome className="text-4xl text-green-700" />
            </div>

            <div>
              <p>
                <span className="text-2xl font-semibold text-slate-800 ">
                  LBN KEY RESOURCE (PVT) LTD,
                  <br />
                </span>
                NO.250D/2, PANNIPITIYA ROAD, THALAWATHUGODA, <br />
                SRI LANKA.
              </p>
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <IoIosCall className="text-4xl text-green-700" />
            </div>

            <div>
              <p>Call us for any Queries</p>
              <ul className="ml-5">
                <li>+94 11 279 6116</li>
                <li>+94 77 350 1689</li>
              </ul>
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <FaWhatsapp className="text-4xl text-green-700" />
            </div>

            <div>
              <p>Send a text message on whatsapp<br />
                <span className="ml-5">+94 77 350 1689</span></p>
              
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <FaFax className="text-4xl text-green-700" />
            </div>

            <div>
              <p>
                Fax <br />
                <span className="ml-5">+94 11 279 6116</span>
              </p>
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <IoIosMail className="text-4xl text-green-700" />
            </div>

            <div>
              <p>
                Send us email for any Information <br />
                <span className="ml-5">info@lbnkeyresource.com</span><br />
                <span className="ml-5">lbnkeyresource99@gmail.com</span>
              </p>
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
          <div className="flex flex-row gap-4 items-center">
            <div>
              <CiClock2 className="text-4xl text-green-700" />
            </div>

            <div>
              <p>
              Office Hours<br />
                <span className="ml-5">9.00 am - 4.00 pm</span>
              </p>
            </div>
          </div>
          <hr className="bg-gray-100 border-0 rounded h-1 my-2" />
        </div>
      </div>

    

      {/* location */}
      <div></div>
    </div>
  );
}
