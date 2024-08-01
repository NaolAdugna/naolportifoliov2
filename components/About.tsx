import Image from "next/image";
import ElsuImage from "../public/elsu.jpg";
const About = () => {
  return (
    <div className="pb-20 pt-36" id="about">
      <div className="grid grid-cols-custom w-full">
        <section className="relative min-h-80 h-96 z-1 ">
          <Image
            src={ElsuImage}
            alt="elsu profile"
            className="w-full h-full object-cover border-4 rounded-xl"
          />
        </section>
        <section className="ml-10 flex flex-col gap-4">
          <h1 className="heading">
            About <span className="text-purple">Me</span>
          </h1>
          <p className="text-justify ">
            Elsabeth Adugna, hold master’s in counselling and psychological
            guidance from Near East university located in Northern Cyprus. In
            addition, Bachelor of Social Work from Gondar university. Gender
            specialist with extensive experience in gender analysis, gender
            programing and capacity building at community as well as government
            stakeholders. Leads partnership and collaboration at community as
            well as implementing partner. In addition to this participated in
            conducting different research assessment and conducted focus group
            discussion (FGD) and individual interviews with participant of
            cluster farmers. Observation and analysis of Productive Safety Net
            Program (PSNP) interventions at kebele level was among the
            responsibilities experience have. Speaks Affan Oromo, Amharic, and
            English. Recently working as gender and accountability specialist at
            Care Ethiopia, on the project which works on child labor reduction
            with gender cross cutting.
          </p>

          <div>
            <div>
              <span>Name:</span> <span>Elsabeth Adugna</span>
            </div>
            <div>
              <span>Age:</span> <span>26</span>
            </div>
            <div>
              <span>email:</span> <span>elsabethadugna0294@gmail.com</span>
            </div>
          </div>
          <div>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Download CV
            </button>

            {/* <button>Download CV</button> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
