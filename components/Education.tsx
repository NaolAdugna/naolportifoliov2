const Education = () => {
  return (
    <div className="pb-20 pt-36 " id="education">
      <main>
        <section>
          <header className="pl-5 pb-4 text-center text-3xl">
            <h1 className="heading">
              Educational <span className="text-purple">Background</span>
            </h1>
            {/* <h1>EDUCATION Background</h1> */}
          </header>
          <div className="px-6 border-t-4 grid grid-cols-2  mt-10 gap-6">
            <div className="relative p-8 border-2 mt-4 rounded-xl hover:scale-105 transition-all hover:cursor-pointer duration-300 gap-2 flex flex-col">
              <h1 className="text-xl underline">Masters Degree</h1>
              <h3>2020-2022</h3>
              <p>
                Masters degree in Guidance and Psychological Counseling 3.29 GPA
                (Near East University) June 2022 G.C.
              </p>
            </div>
            <div className="relative p-8 border-2 hover:scale-105 rounded-xl hover:cursor-pointer transition-all duration-300 gap-2 mt-4 flex flex-col">
              <h1 className="text-xl underline">Bachelor Degree</h1>
              <h3>2013-2017</h3>
              <p>
                Bachelor degree in Social Work 3.09 GPA (University of Gonder)
                July 2017 G.C.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
