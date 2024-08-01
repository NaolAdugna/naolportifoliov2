import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationDot } from "react-icons/fa6";
import { TracingBeam } from "./ui/tracing-beam";

const Training = () => {
  return (
    <div className="py-20 w-full" id="training">
      <h1 className="heading">
        Training <span className="text-purple">Taken </span>
      </h1>

      <main className="w-[80%] m-auto sm:w-[96%] md:w-[92%] ">
        <div className="px-6 mt-10 gap-6">
          <section>
            <TracingBeam>
              <ul className="flex justify-between ">
                <li className="border-2 rounded-xl p-3 text-center hover:scale-110 hover:cursor-pointer transition-all duration-300">
                  By CARE Ethiopia
                </li>
                <li>By ONCALL Interpreters</li>
                <li>By European Asylum Seeker Union</li>
                <li>By Hana Orphans</li>
              </ul>
            </TracingBeam>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Training;
