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
  const SouthKorea = "KR";

  const [selectedJob, setSelectedJob] = useState("null");

  const handleJobClick = (jobId) => {
    setSelectedJob((prevJob) => (prevJob === jobId ? null : jobId));
  };

  const pipelineTableData = [
    {
      country: `South Korea`,
      company: [
        {
          clients: `Hyundai Harbor Durban, South Korea`,
          jobs: [
            {
              category: `Skilled`,
              title: [`Shipbuilder`],
            },
          ],
        },
        {
          clients: `DS Corporation Ulsan, South Korea`,
          jobs: [
            {
              category: `Professional`,
              title: [
                `Mechanical Engineer`,
                `Civil Engineer`,
                `Electrical Engineer`,
                `Chemical Engineer`,
              ],
            },
          ],
        },
      ],
    },
    {
      country: `Poland`,
      company: [
        {
          clients: `Hebi Bud SP Z.O.O. 55-040, Tyniec Maly, Poland`,
          jobs: [
            {
              category: `Skilled`,
              title: [`Production Line Worker`],
            },
          ],
        },
      ],
    },
    {
      country: `Qatar`,
      company: [
        {
          clients: `Blue Black Properties P.O.Box.2417, Doha, Qatar`,
          jobs: [
            {
              category: `Professional`,
              title: [
                `Maintenance Engineer`,
                `Facilities Engineer`,
                `AC/QC Engineer`,
                `Project Engineer`,
                `Estimation Engineer`,
              ],
            },
            {
              category: `Skilled`,
              title: [
                `Plumbing Supervisor`,
                `Admin. Assistant`,
                `Logistic Executive`,
                `Maintenance Technician`,
                `Mason-Tile /Bricks`,
                `Carpenter-Finish/Shattering`,
                `Steel Fixer`,
                `Wall Painter`,
                `Plumber`,
                `Electrician`,
                `Welder`,
                `AC Technician`,
              ],
            },
          ],
        },
      ],
    },
  ];

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
        `Medical Doctor (MBBS)`,
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
            CATEGORY OF WORKERS
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
      {/* pipeline */}
      <div>
        <div>
          <h1 className="text-center text-4xl font-semibold mt-10 mb-5">
            PROJECTS IN PIPELINE <br />{" "}
            <span className="text-red-700 text-sm ">
              (FOR THE YEAR 2023 / 2024)
            </span>
          </h1>
        </div>
        <div>
          <table className="mx-auto border-collapse border-2 border-gray-500 table-auto">
            <thead>
              <tr>
                <th className="border border-gray-500 p-3">Country</th>
                <th className="border border-gray-500 p-3">
                  Clients Reference
                </th>
                <th className="border border-gray-500 p-3">Job Category</th>
                <th className="border border-gray-500 p-3">Job Title</th>
              </tr>
            </thead>
            <tbody>
              {pipelineTableData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-500 p-3 ">
                    {data.country}
                  </td>
                  <td className="border border-gray-500 p-3">
                    {data.company.map((company, idx) => (
                      <div key={idx}>{company.clients}</div>
                    ))}
                  </td>
                  <td className="border border-gray-500 p-3">
                    {data.company.map((company, idx) => (
                      <div key={idx}>
                        {company.jobs.map((job, ind) => (
                          <div key={ind}>
                            <p>{job.category}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-500 p-3">
                    {data.company.map((company, idx) => (
                      <div key={idx}>
                        {company.jobs.map((job, ind) => (
                          <div key={ind}>
                            {job.title.map((title, i) => (
                              <p key={i}>{title}</p>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl bg-slate-300 mx-auto">
      <div >
        <div>
          <h2 className="text-3xl font-semibold mt-5 md:mt-16">
            <span className="text-red-700">OUR RECRUITING</span>{" "}
            RESPONSIBILITIES
          </h2>
        </div>
        <div className="mx-3">
          <p className="text-xl mt-5">
            <span className="font-semibold ">LBN Key Resource (Pvt) Ltd</span>{" "}
            will arrange for an interviews to select suitable candidates as per
            the job order.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mt-5 md:mt-16">
            <span className="text-red-700">CLIENT'S </span>{" "}
            RESPONSIBILITIES
          </h2>
        </div>
        <div className="text-start mx-3">
          <p className=" mt-5">
          Client will arrange at their own expense selected candidates Visa, Health Card.
Resident Permit, and any other local requirements as per the law of the Country.
          </p><br />
          <p>Client's representatives traveling to Sri Lanka for conducting interviews will bear
their own cost of lodging and boarding. <span className="font-semibold">LBN Key Resource (Pvt) Ltd</span> will make the
necessary hotel reservations and provide internal travel arrangements for
interviews.</p>
        </div>
      </div>
      </div>

      

      <div className="max-w-4xl mx-auto bg-slate-400">
        <div>
          <h2 className="text-center text-4xl font-semibold mt-5 md:mt-16">
            <span className="text-red-700">RECRUITMENT</span>{" "}
            PROCEDURE
          </h2>
        </div>
        <div className="mx-3 ">
          <p className="text-xl mt-5">
          In terms of Sri Lanka foreign Employment Law <span className="font-semibold">(Sri Lanka Bureau of Foreign Employment Act No, 21 of 1985)</span>,
          </p><br />
          <p>Foreign companies wishing to recruit Sri Lankan personnel are
required to submit the following information and document to LBN
Key Resource (Pvt) Ltd, by courier, Fax or E-mail.
</p>
        
        </div>
      </div>


    </div>
  );
}
