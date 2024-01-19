import { set } from "mongoose";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MdOutlineLocationCity,MdFlight } from "react-icons/md";
import { TbWorldPin } from "react-icons/tb";
import { FaFile, FaBed, FaClinicMedical } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Vacancy() {
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchVacancy = async () => {
      try {
        setLoading(true);
        const vacancyId = params.id;
        const res = await fetch(`/api/vacancy/get-vacancy/${vacancyId}`);
        const data = await res.json();
        // console.log(data);

        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        setVacancy(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchVacancy();
  }, [params.id]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center text-red-700 my-7 text-2xl">
          Something went wrong!!
        </p>
      )}
      {vacancy && !error && !loading && (
        <div className="max-w-6xl mx-auto w-full  poppins mt-5 md:my-10 ">
          <div className="justify-center text-green-700 my-10">
            <h1 className="text-center font-bold text-4xl my-5  ">
              {vacancy.title}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 items-start">
            <div>
              <img src={vacancy.countryFlag} alt="country flag" className="" />
            </div>
            <div className="ml-3">
              <div>
                <div className="mb-5 ">
                  <h3 className="font-bold">{vacancy.description}</h3>
                </div>
                <div className="flex flex-row gap-5 mb-5 items-center">
                  <TbWorldPin className="text-3xl text-green-500" />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">Country</h4>
                    <p>{vacancy.country}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mb-5 items-center">
                  <MdOutlineLocationCity className="text-3xl text-green-500" />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">Company Address</h4>
                    <p>{vacancy.address}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mb-5 items-center">
                  <FaFile className="text-3xl text-green-500" />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">Contract Period</h4>
                    <p>{vacancy.contractPeriod}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mb-5 items-center">
                  <GiTakeMyMoney className="text-3xl text-green-500" />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">Salary Range</h4>
                    <p>{vacancy.salary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ml-3 justify-between mt-0 md:mt-5 ">
            <div className="flex flex-row gap-5 mb-5 items-center">
              <MdFlight className="text-3xl text-green-500" />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">Air Ticket</h4>
                {vacancy.airTicket ? (
                  <p>Provided</p>
                ) : (
                  <p className="text-rose-400">Not Provided</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-5 items-center">
              <IoFastFoodOutline className="text-3xl text-green-500" />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">Food</h4>
                {vacancy.food ? (
                  <p>Provided</p>
                ) : (
                  <p className="text-rose-400">Not Provided</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-5 items-center">
              <FaBed className="text-3xl text-green-500" />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">Accommodation</h4>
                {vacancy.accommodation ? (
                  <p>Provided</p>
                ) : (
                  <p className="text-rose-400">Not Provided</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-5 items-center">
              <FaClinicMedical className="text-3xl text-green-500" />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">Medical</h4>
                {vacancy.medical ? (
                  <p>Provided</p>
                ) : (
                  <p className="text-rose-400">Not Provided</p>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mb-10 ">
          <button className="w-full  py-5 text-center font-bold text-white bg-green-600 hover:bg-green-700 rounded-md">Apply</button>
          </div>
        </div>
      )}
    </main>
  );
}
