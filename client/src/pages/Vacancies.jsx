import { set } from "mongoose";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";


export default function Vacancies() {
  const [showVacancyError, setShowVacancyError] = useState(false);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        setShowVacancyError(true);
        console.log(showVacancyError);
      }
    };

    fetchVacancies();
  });

  return (
    <div className="bg-rose-50 pt-20 min-h-screen flex flex-col items-center justify-center">
      {loading ? (
        <PropagateLoader color="#B81818FB" />
      ) : (
      <div className=" max-w-4xl  mx-auto w-full py-10 ">
        <div>
          <h1 className="text-xl md:text-3xl ml-5 md:ml-0 font-bold text-rose-700 underline mb-5">
            Vacancies
          </h1>
        </div>
        <div>
          { showVacancy.length > 0 ? (
            <div className="">
              {showVacancy.map((vacancy) => (
                <div
                  key={vacancy._id}
                  className="flex flex-col md:flex-row  gap-2 md:gap-5 border-solid border-2 border-slate-200 mb-4 shadow-2xl md:shadow-lg hover:shadow-2xl mx-5 md:mx-0 bg-white"
                >
                  <div className="basis-1/4">
                    <img
                      src={vacancy.countryFlag}
                      alt="country flag"
                      className="h-32 md:h-40  text-center md:text-start w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 basis-2/4 ml-3 md:ml-0">
                    <div className="">
                      <h3 className="font-semibold mt-2 text-lg md:text-2xl">
                        {vacancy.title}
                      </h3>
                    </div>
                    <div>
                      <p className="line-clamp-3">{vacancy.description}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-green-800 font-bold">
                        {vacancy.salary}
                      </p>
                    </div>
                  </div>

                  <div className="basis-1/4 flex items-center justify-center text-center mb-5 md:mb-0 bg-green-700 md:bg-transparent mx-5 md:mx-0 ">
                    <Link to={`/vacancy/${vacancy._id}`}>
                      <button className="bg-green-700 rounded-lg p-2 md:p-4 my-auto text-white">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ):
          <div className="flex justify-center items-center h-40">
          <p className="text-red-700">No vacancies available</p>
        </div>
          }
        </div>
      </div>
      )}
    </div>
  );
}
