import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationDot } from "react-icons/fa6";
import { TracingBeam } from "./ui/tracing-beam";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <main className="w-[80%] m-auto sm:w-[96%] md:w-[92%] ">
        <div className="px-6 mt-10 gap-6">
          <section>
            <TracingBeam>
              <div className="relative p-8 sm:p-2 md:p-3 border-2 mt-4 rounded-xl hover:scale-105 transition-all hover:cursor-pointer duration-300 gap-4 flex flex-col">
                <h1 className="text-xl underline">CARE Ethiopia </h1>
                <div className="flex items-center justify-between">
                  <small>Specialist- Gender and Accountability</small>
                  <span className="flex items-center gap-1">
                    <FaLocationDot /> Metu, Ethiopia
                  </span>
                </div>
                <ul className="list-disc pl-5 gap-2 flex flex-col">
                  <li className="text-[x]16p">
                    Led gender analysis in the specific implementation area.
                  </li>
                  <li className="text-[x]16p">
                    Co-developed contextualized gender discussion and life
                    skills manuals using gender analysis findings
                  </li>
                  <li className="text-[x]16p">
                    Ensured gender responsiveness by reviewing documents and
                    activities in gender and child labor Lense
                  </li>
                  <li className="text-[x]16p">
                    Work with project team to identify strategic actions and
                    improve the quality of project implementation
                  </li>
                </ul>
              </div>
            </TracingBeam>
            <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl hover:cursor-pointer  transition-all duration-300 gap-4 mt-4 flex flex-col">
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
                </ul>
              </div>
            </TracingBeam>
            <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl hover:cursor-pointer  transition-all duration-300 gap-4 mt-4 flex flex-col">
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
            </TracingBeam>
            <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl hover:cursor-pointer  transition-all duration-300 gap-2 mt-4 flex flex-col">
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
                </ul>
              </div>
            </TracingBeam>
            <TracingBeam>
              <div className="relative p-8 border-2  hover:scale-105 rounded-xl hover:cursor-pointer  transition-all duration-300 gap-2 mt-4 flex flex-col">
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
                </ul>
              </div>
            </TracingBeam>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Experience;
