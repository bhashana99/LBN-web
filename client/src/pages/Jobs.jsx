import React from "react";
import { useState } from "react";
import Flag from "react-world-flags";
import construction from "./../assets/images/construction.jpeg";
import garment from "./../assets/images/garment.jpeg";
import FadeIn from "./../components/FadeIn";
import hotel from "./../assets/images/hotel.jpeg";
import medical from "./../assets/images/medical.jpeg";
import transport from "./../assets/images/transport.jpeg";
import garage from "./../assets/images/garage.jpeg";
import scientists from "./../assets/images/scientists.jpeg";
import engineer from "./../assets/images/engineer.jpeg";
import teacher from "./../assets/images/teacher.jpeg";
import artist from "./../assets/images/artist.jpeg";

export default function Jobs() {
  const JAPAN = "JP";
  const BAHARAIN = "BH";
  const QATAR = "QA";
  const DUBAI = "AE";
  const POLAND = "PL";
  const MALDIVES = "MV";

  const [selectedJob, setSelectedJob] = useState("null");

  const handleJobClick = (jobId) => {
    setSelectedJob((prevJob) => (prevJob === jobId ? null : jobId));
  };

  const jobPositions = [
    {
      title: `CONSTRUCTION`,
      id: `construction`,
      image: construction,
      jobs: [
       `Unskilled Labors Janitors`,
       `Assistants to Carpenter / Mason / Plumber/ Electrician`,
       `Cook, Carpenter, Mason, Electrician,H/E Operator, Plumber, Welder, Mechanic Clerk, Store-Keeper, Concrete finisher ,Tile Layer`,
       `Categorized & Specialized Workers`,
       `Forman, Warehouseman, Junior Administrator, Senior Clerk`,
       `Surveyor, Draughtsman, Part qualified or professionally Qualified Accountant`,
       `Junior Engineer, Qualified Accountant, Senior Administrator`,
       `Medical Doctor (MBBS)`
      ],
    },
    {
      title: `GARMENT INDUSTRY`,
      id: `garment`,
      image: garment,
      jobs: [
        `Helper `,
        `Mechanic Operator / Ironer `,
        `Supervisor`,
        `Designer Pattern Maker (Junior)`,
        `Designer, pattern maker (Senior)`,
        `Assistant Manager`,
        `Factory / Production Manager`,
      ],
    },
    {
      title: `HOTEL`,
      id: `hotel`,
      image: hotel,
      jobs: [
        `Cleaner`,
        `Bell Boy, Security Guard, Valet Boy,
Chauffeur, Room Attendant, Waiter`,
        `Clerk, Telephone/Telex, Operator,
Store man`,
        `Backer Butcher`,
        `Cashier/ Auditor/ Accountant`,
        `Bell/ waiter Captain Floor/
Maintenance Supervisor`,
        `Sectional Manager`,
        `Executive House – Keeper, F&B
Manager`,
      ],
    },
    {
      title: `MEDICAL / HOSPITAL`,
      id: `medical`,
      image: medical,
      jobs: [
        `Janitor`,
        `Assistant Nurse`,
        `Midwife`,
        `Nurse/Midwife, Lab Technician,
        Physiotherapist`,
        `Specialized Service Nurse, Senior
        Physiotherapist`,
        `Head Nurse`,
        `Dental Surgeon (B.D.S)`,
        `Medical Officer (MBBS)`,
        `Surgeon/ Dental or Medical, Specialist
        (Should be FRC qualified)`,
      ],
    },
    {
      title: `TRANSPORT SERVICE`,
      id: `transport`,
      image: transport,
      jobs: [
        `Light Vehicle Driver`,
        `Bus Drivers`,
        `Heavy Vehicle Driver`,
        `Scammel Trailer Driver`,
        `Heavy Equipment Mechanic`,
      ],
    },
    {
      title: `VEHICLE MAINTENANCE`,
      id: `garage`,
      image: garage,
      jobs: [
        `Gas/Service Station Attendant`,
        `Tire/Upholstery Repairman`,
        `Lubricator (Battery)`,
        `Serviceman`,
        `Auto Painter, Body Repair, Mechanic
        Auto/Diesel Manager`,
      ],
    },
    {
      title: `PHYSICAL,LIFE SCIENTISTS & TECHNICIANs`,
      id: `technicians`,
      image: scientists,
      jobs: [`Biologist`, `Horticulturist`],
    },
    {
      title: `ARCHITECTS, ENGINEERS & RELATED TECHNICAL`,
      id: `engineers`,
      image: engineer,
      jobs: [
        `Draughtsman`,
        `Engineer`,
        `Engineer-Biomedical`,
        `Engineer-Chartered`,
        `Quality Controller`,
        `Surveyor`,
        `Surveyor-Chartered Land`,
        `Surveyor Quantity`,
        `Technician-Lab`,
      ],
    },
    {
      title: `EDUCATION`,
      id: `education`,
      image: teacher,
      jobs: [
        `Primary School Principal`,
        `Primary Teacher`,
        `Principal`,
        `Teacher`,
        `Trained Teacher`,
        `Vice Principal`,
      ],
    },
    {
      title: `LITERARY, CREATIVE & PERFORMING ARTIST`,
      id: `artist`,
      image: artist,
      jobs: [`Designer`, `Artist`],
    },
   
  ];

  return (
    <div className=" max-w-6xl  mx-auto w-full mb-10 mt-10">
      <div>
        <div>
          <h4 className="text-center text-4xl font-semibold">
            <span className="text-red-700 font-bold">THE COUNTRIES</span> <br />{" "}
            WITH OUR CLIENT BASE
          </h4>
        </div>
        <div className="bg-slate-400 mx-5 p-5 mt-5">
          <ul className="flex flex-col gap-5  md:flex-row justify-between">
            <li className="flex  flex-row items-center gap-4 ">
              <Flag code={JAPAN} style={{ width: "50px", height: "auto" }} />
              <p>Japan</p>
            </li>
            <li className="flex flex-row items-center gap-4">
              <Flag code={BAHARAIN} style={{ width: "50px", height: "auto" }} />
              <p>BAHARAIN</p>
            </li>
            <li className="flex flex-row items-center gap-4">
              <Flag code={QATAR} style={{ width: "50px", height: "auto" }} />
              <p> DOHA QATAR</p>
            </li>
            <li className="flex flex-row items-center gap-4">
              <Flag code={DUBAI} style={{ width: "50px", height: "auto" }} />
              <p>DUBAI</p>
            </li>
            <li className="flex flex-row items-center gap-4">
              <Flag code={POLAND} style={{ width: "50px", height: "auto" }} />
              <p>POLAND</p>
            </li>
            <li className="flex flex-row items-center gap-4">
              <Flag code={MALDIVES} style={{ width: "50px", height: "auto" }} />
              <p>MALDIVES</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-center text-4xl font-semibold mt-10 mb-5">
            CATOGARY OF WORKERS
          </h4>
        </div>
        <div className="flex justify-center ml-10">
          <ul className="list-disc">
            {jobPositions.map((job) => (
              <li
                key={job.id}
                className="hover:underline hover:text-blue-600"
                onClick={() => handleJobClick(job.id)}
              >
                <a href={`#${job.id}`}>{job.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      

      {jobPositions.map((job) => (
        <div key={job.id} id={job.id} className="my-10 max-w-4xl mx-auto">
          {selectedJob === job.id && (
            <FadeIn delay={0.3} direction="middle" padding fullWidth>
              <div>
                <h3 className="text-3xl">
                  <span className="text-red-700">{job.title} </span>
                </h3>
                <hr className="bg-rose-200  border-0 rounded h-1 my-2 w-1/4" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 justify-center mx-5">
                <div className="basis-2/4 ">
                  <img src={job.image} alt="" className="rounded-lg" />
                </div>
                <div>
                  <div className="flex flex-col gap-4  ">
                    <div>
                      {job.jobs.map((d) => (
                        <p className="font-semibold flex  mt-3">{d}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      ))}
    </div>
  );
}
