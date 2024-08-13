"use client";
import React, { useState } from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationDot } from "react-icons/fa6";
import { TracingBeam } from "./ui/tracing-beam";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const Experience = () => {
  const [careClicked, setCareClicked] = useState(false);
  const [ukClicked, setUkClicked] = useState(false);
  const [africaClicked, setAfricaClicked] = useState(false);
  const [BDSClicked, setBDSClicked] = useState(false);
  const [hanaClicked, setHanaClicked] = useState(false);

  let handleCare = () => {
    setCareClicked((prev) => !prev);
  };
  let handleUk = () => {
    setUkClicked((prev) => !prev);
  };
  let handleAfrica = () => {
    setAfricaClicked((prev) => !prev);
  };
  let handleBDS = () => {
    setBDSClicked((prev) => !prev);
  };
  let handleHana = () => {
    setHanaClicked((prev) => !prev);
  };
  return (
    <div className="py-20 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <main className="w-[80%] m-auto sm:w-[96%] md:w-[92%] ">
        <div className="px-6 mt-10 gap-6">
          <section>
            <TracingBeam>
              <div className="relative p-8 sm:p-2 md:p-3 border-2 mt-4 rounded-xl  transition-all  hover:scale-105   duration-300 gap-4 flex flex-col">
                <h1 className="text-xl underline">Digital Addis </h1>
                <div className="flex items-center justify-between">
                  <small>Specialist- Gender and Accountability</small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Addis Ababa, Ethiopia
                  </span>
                </div>
                <ul className="list-disc pl-5 gap-2 flex flex-col">
                  <li className="text-[x]16p">
                   Collaborated closely with cross-functional teams, including designers, developers, and QA
                   analysts, to deliver high-quality web solutions on time and within budget. Achieved a 97%
                   client satisfaction rate based on post-launch feedback.
                  </li>
                  <li className="text-[x]16p">
                    Implemented performance optimization techniques such as caching and image
                    optimization, resulting in a 4% reduction in bounce rates.
                  </li>
                  <li className="text-[x]16p">
                    Conducted regular reviews and provided mentorship to other developers, fostering a
                    culture of continuous learning and follow to best practices in coding standards.
                  </li>
                  {/* <li className="text-[x]16p">
                    Work with project team to identify strategic actions and
                    improve the quality of project implementation
                  </li> */}

                  {/* {careClicked ? (
                    <div className="gap-2 flex flex-col">
                      {" "}
                      <li>
                        Effectively build capacity of staff, government
                        partners, and community groups in applying both gender,
                        accountability and child protection approaches, tools,
                        and best practices.
                      </li>{" "}
                      <li>
                        Effectively identified gaps, developed manuals and
                        training materials, planned, and facilitate training and
                        workshops related to gender, life skills,
                        entrepreneurship, and accountability tools
                      </li>{" "}
                      <li>
                        Coach and mentor field level staff and community to
                        facilitate change{" "}
                      </li>{" "}
                      <li>
                        Ensure program quality and impact in line with the
                        project goals and objectives at field office level
                      </li>{" "}
                      <li>
                        Advocate and influence the inclusion of gender, youth,
                        and other social issues
                      </li>{" "}
                      <li>
                        Ensure commitment to principles of gender equity,
                        diversity, inclusion, and PSEAH (safeguarding)
                      </li>{" "}
                      <li>
                        Represent CARE as a focal point for gender and
                        Prevention of Sexual Harassment and Abuse at field level
                      </li>{" "}
                      <li>
                        Support health extension workers on Psychosocial support
                        service
                      </li>{" "}
                    </div>
                  ) : (
                    ""
                  )} */}
                </ul>
                {/* <div onClick={handleCare}>
                  {careClicked ? (
                    <FaAngleUp className=" text-xl hover:cursor-pointer " />
                  ) : (
                    <FaAngleDown className=" text-xl hover:cursor-pointer " />
                  )}
                </div> */}
              </div>
            </TracingBeam>
            {/* <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl transition-all duration-300 gap-4 mt-4 flex flex-col">
                <h1 className="text-xl underline">
                  Uk Oncall Interpreter and Translation{" "}
                </h1>
                <div className="flex items-center justify-between">
                  <small>
                    Project Manager,Freelance Interpreter/Translator, Booking
                    Officer{" "}
                  </small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Turkish Republic of Northern Cyprus,
                    Cyprus
                  </span>
                </div>
                <ul className="list-disc pl-5 gap-2 flex flex-col">
                  <li className="text-[x]16p">
                    Coordinated staff for effective project activities, client
                    assistance and interpretation or translation.
                  </li>
                  <li className="text-[x]16p">
                    Managed resource allocation for each activity based on the
                    specific characteristics of project and clients.
                  </li>
                  <li className="text-[x]16p">
                    Remote freelance interpretation for refugees and social
                    service users in England, Malta, and Greece.
                  </li>
                  <li className="text-[x]16p">
                    Booked appointments in different sectors of the United
                    Kingdom, like hospitals and social services for refugees and
                    asylum seekers.
                  </li>
                  {ukClicked ? (
                    <div className="gap-2 flex flex-col">
                      {" "}
                      <li>
                        Oversaw effective organization and documentation of
                        project financial and activity reports
                      </li>{" "}
                      <li>
                        Supervised confidential documentation of clients’
                        personal information, feedback and reports
                      </li>{" "}
                      <li>
                        Translation, interpretation proper linkages of clients
                        and documentation of cases for social service
                        organizations like Tower Hamlet Children Service, Solace
                        Women’s Aid, Imperial Health Service NHS, from Amharic
                        to English and From Affan Oromo to English and vice
                        versa.
                      </li>{" "}
                      <li>
                        Assisted interpreters and clients on different project
                        activities
                      </li>{" "}
                      <li>
                        Bridged clients to project staff by providing proper
                        information and guidance for both staff and clients
                      </li>{" "}
                      <li>
                        Preparation of reports for the company on daily basis
                      </li>{" "}
                      <li>
                        Organizing and preparation of feedback documents from
                        client
                      </li>{" "}
                      <li>
                        Confidential documentation and data management, related
                        to client sensitive issue in refugee status
                      </li>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
                <div onClick={handleUk}>
                  {ukClicked ? (
                    <FaAngleUp className=" text-xl hover:cursor-pointer " />
                  ) : (
                    <FaAngleDown className=" text-xl hover:cursor-pointer " />
                  )}
                </div>
              </div>
            </TracingBeam> */}
            {/* <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl  transition-all duration-300 gap-4 mt-4 flex flex-col">
                <h1 className="text-xl underline">
                  Sub-Saharan Africa Research and Training Center (SART) PLC
                </h1>
                <div className="flex items-center justify-between">
                  <small>Assistant Researcher (Client - World Bank)</small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Addis Ababa, Ethiopia
                  </span>
                </div>

                <ul className="list-disc pl-5 gap-2 flex flex-col text-justify">
                  <li className="text-justify">
                    Prepared narrative reports after collecting and organized
                    observation data for Understanding Gender Dynamics in
                    Agricultural Extension System in Ethiopia project:
                    observation of activities of development agents’ (DA) and
                    health extension workers’ (HEW) activities in the community.
                  </li>
                  <li>
                    Conducted focus group discussion (FGD) and individual
                    interviews with participant of cluster farmers.
                  </li>
                  <li>
                    Documented observation of women’s participation in
                    agricultural activities.
                  </li>
                  <li>
                    Observation of services in different sectors for women
                    farmers and report preparation.
                  </li>
                </ul>
               
              </div>
            </TracingBeam> */}
            {/* <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl  transition-all duration-300 gap-2 mt-4 flex flex-col">
                <h1 className="text-xl underline">
                  BDS-Center for Development Research/CDR/
                </h1>

                <div className="flex items-center justify-between">
                  <small>Assistant Researcher (Client- UNICEF)</small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Gambela, Ethiopia
                  </span>
                </div>
                <ul className="list-disc pl-5 gap-2 flex flex-col text-justify">
                  <li className="text-justify">
                    Collected and transcribed FGD and individual interview data
                  </li>
                  <li>
                    Conducted key informant interviews with stakeholders of
                    different government sectors at the woreda and kebele level.
                  </li>
                  <li>
                    Observation of community discussions and individual
                    discussions with health extension workers at different
                    woredas.
                  </li>
                  <li>
                    Observation and analysis of Productive Safety Net Program
                    (PSNP) interventions at kebele level
                  </li>
                  {BDSClicked ? (
                    <div className="gap-2 flex flex-col">
                      {" "}
                      <li>
                        Write narrative reports of collected interview and
                        observation data for the main research team
                      </li>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
                <div onClick={handleBDS}>
                  {BDSClicked ? (
                    <FaAngleUp className=" text-xl hover:cursor-pointer " />
                  ) : (
                    <FaAngleDown className=" text-xl hover:cursor-pointer " />
                  )}
                </div>
              </div>
            </TracingBeam> */}
            {/* <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl  transition-all duration-300 gap-2 mt-4 flex flex-col">
                <h1 className="text-xl underline">Hana Orphans’ Home</h1>

                <div className="flex items-center justify-between">
                  <small>Social Worker</small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Addis Ababa, Ethiopia
                  </span>
                </div>
                <ul className="list-disc pl-5 gap-2 flex flex-col text-justify">
                  <li className="text-justify">
                    Supervised wellbeing and performance of children at their
                    homes and respective schools.
                  </li>
                  <li>
                    Organized and conducted group counseling sessions for
                    children with similar behavioral or emotional challenges .
                  </li>
                  <li>
                    Conducted individual counseling for children and caregivers
                    based on need and observational diagnosis.
                  </li>
                  <li>
                    Identified gaps, prepared materials, and facilitated
                    trainings for children, parents, and guardians in the
                    community.
                  </li>
                  {hanaClicked ? (
                    <div className="gap-2 flex flex-col">
                      {" "}
                      <li>
                        Conducted group counseling and trainings for caregivers
                      </li>{" "}
                      <li>
                        Conducting continuous need assessments for children and
                        strategized interventions based on findings
                      </li>{" "}
                      <li>
                        Reported all project activities to stakeholders and
                        report doners
                      </li>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
                <div onClick={handleHana}>
                  {hanaClicked ? (
                    <FaAngleUp className=" text-xl hover:cursor-pointer " />
                  ) : (
                    <FaAngleDown className=" text-xl hover:cursor-pointer " />
                  )}
                </div>
              </div>
            </TracingBeam> */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Experience;
