import Image from "next/image";
import NaolImage from "../public/naol.png";
// import ElsabethAdugnaCV from "../public/ElsabethAdugnaCV.pdf";
const About = () => {
  return (
    <div className="pb-20 pt-36 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]" id="about">
      <div className="grid grid-cols-custom w-full">
        <section className="relative min-h-80 h-96 z-1 ">
          <Image
            src={NaolImage}
            alt="elsu profile"
            className="w-full h-full object-cover border-4 rounded-xl"
          />
        </section>
        <section className="ml-10 flex flex-col gap-4">
          <h1 className="heading">
            About <span className="text-purple">Me</span>
          </h1>
          <p className="text-justify ">
           My name is Naol Adugna I am a self-taught Full Stack Web Developer with a diverse skill set encompassing HTML, CSS, JavaScript, React JS, Express JS, Node JS, MongoDB, MYSQL, PostMan, Material UI, GitHub, WordPress, and SEO. Through my relentless pursuit of knowledge and hands-on experience, I have mastered the essentials of web development. I am ready to collaborate on projects that push the boundaries of whats possible on the web.
          </p>

          <div>
            <div>
              <span>Name:</span> <span>Naol Adugna</span>
            </div>
            <div>
              <span>Age:</span> <span>22</span>
            </div>
            <div>
              <span>email:</span> <span>naoladugna4747@gmail.com</span>
            </div>
          </div>
          <div>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <a href="./NaolAdugnaResume.pdf" download={true}>
                {" "}
                Download CV
              </a>
            </button>

            {/* <button>Download CV</button> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
