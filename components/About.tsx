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
            className="w-full h-full object-cover border-4-"
          />
        </section>
        <section className="ml-10 flex flex-col gap-4">
          <h1 className="heading">ABOUT ME </h1>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            blanditiis tempora libero autem officiis odio ipsam fugiat inventore
            magni voluptates explicabo delectus repellat ut saepe dolor, eveniet
            nemo totam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rem blanditiis tempora libero autem officiis odio ipsam fugiat
            inventore magni voluptates explicabo delectus repellat ut saepe
            dolor, eveniet nemo totam harum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem blanditiis tempora libero autem
            officiis odio ipsam fugiat inventore magni voluptates explicabo
            delectus repellat ut saepe dolor, eveniet nemo totam harum. dolor,
            eveniet nemo totam harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem blanditiis tempora libero autem officiis odio
            ipsam fugiat inventore magni voluptates explicabo delectus repellat
            ut saepe dolor, eveniet nemo totam harum.
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
