import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/LBN.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaMapLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-300 pb-3 md:pb-0 relative left-0 right-0 bottom-0 shadow-md">
      <div className="flex flex-col mx-5 md:grid  md:grid-cols-8  md:gap-2 md:mx-10  md:p-10">
        {/* logo */}
        <div className=" md:col-span-3 ">
          <div className="grid grid-cols-3 items-center">
            <div>
              <Link to="">
                <img src={logo} alt="" className="w-28 md:w-40 " />
              </Link>
            </div>
            <div className="col-span-2  ">
              <h2 className="text-justify">
                <span className="font-semibold">
                  LBN Key Resource (Pvt) Ltd{" "}
                </span>
                is an authorized employment agency, approved by the bureau of
                foreign employment of Sri Lanka to act as an agent for foreign
                principals in recruiting and supplying personnel for all
                categories of foreign employment.
              </h2>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold text-start md:text-center">Our Links</h1>
          <hr className="w-36 h-1 md:mx-auto my-1  bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700" />
          <div className="flex flex-col  mt-2 text-start items-start md:items-center justify-start">
            <ul className="list-disc">
              <li className="hover:underline hover:text-blue-900">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline hover:text-blue-900">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="hover:underline hover:text-blue-900">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:underline hover:text-blue-900">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contact */}
        <div className="flex flex-col md:col-span-3">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
          <hr className="w-36 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700" />
          <div className="gird grid-row-2 ">
            <div className="grid grid-rows-2 grid-flow-col gap-1">
              <div className="flex flex-row gap-3 items-center mb-2">
                <FaMapLocationDot className="text-2xl text-green-800" />
                <div >
                  <p>No.250D/2, Pannipitiya Road,Thalawathugoda, </p>
                  <p>Sri Lanka.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 ">
                <BsFillTelephoneFill className="text-xl text-green-800" />
                <div>
                  <p>+94 112 796 116</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdEmail className="text-2xl text-green-800" />
                <div >
                  <p>info@lbnkeyresource.com</p>
                  <p>lbnkeyresource99@gmail.com </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 ">
                <FaWhatsapp className="text-2xl text-green-800" />
                <p> +94 773 501 689</p>
              </div>
            </div>
            {/* social media */}
            <div className=" mt-[-40px] flex  ">
              <Link
                to="https://www.facebook.com/LBNKEYRESOURCEPVTLTD?mibextid=ZbWKwL "
                target="_blank"
              >
                <FaFacebookSquare className="text-2xl text-blue-600 mr-2" />
              </Link>

              <FaLinkedin className="text-2xl text-blue-800 mr-2" />
              <FaSquareXTwitter className="text-2xl text-black mr-2" />
              <FaInstagram className="text-2xl text-rose-600 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
