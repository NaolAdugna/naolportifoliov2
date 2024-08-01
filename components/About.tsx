import Image from "next/image";
import ElsuImage from "../public/elsu.jpg";
// import ElsabethAdugnaCV from "../public/ElsabethAdugnaCV.pdf";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            reiciendis consectetur eos fugit minima, tenetur quod rerum vero
            harum laborum repellendus sit, eveniet ipsum quaerat officia modi
            tempore veritatis doloribus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore, placeat omnis. Numquam nam quos minus
            delectus reiciendis officiis accusamus quasi perferendis nulla,
            magnam asperiores eum velit nobis dicta optio inventore? Aut esse
            cupiditate, quod impedit dolores voluptate reprehenderit est, maxime
            eveniet enim dolorem aspernatur possimus, harum rerum iure soluta
            fugiat! Enim aut, at tenetur sint veniam facere iure reprehenderit
            cupiditate! Rem, exercitationem deleniti! Quis hic dolores
            voluptatibus culpa omnis voluptatum impedit maxime repellendus
            quidem minus esse, dolorem praesentium debitis voluptas quaerat iure
            velit soluta similique ab aspernatur pariatur aperiam? Expedita.
            Recusandae itaque dolore ut deleniti autem tempora harum. Modi saepe
            et consequuntur neque minus unde a quos, cum quis ea, provident
            maiores distinctio ex! Iste eligendi ut praesentium veritatis
            reprehenderit.
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
              <a href="./ElsabethAdugnaCV.pdf" download={true}>
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
