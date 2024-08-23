import React, { useEffect, useRef } from "react";
import Project_Data from "./data/projectData";
import live_icon from "./images/live.svg";
import code_icon from "./images/code.svg";


const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <section
      id="project"
      className="bg-[#0d0723] text-[#fff] relative lg:px-20 px-[10px] lg:pt-[70px] pt-[50px] pb-[100px]"
    >
      <div className="flex flex-col items-center pb-[100px]">
        <h1 className="text-[#965eff] font-bold text-[2rem] tracking-wide">
          Projects
        </h1>
        <div className="bg-[#c9ff18] w-28 h-[2px] rounded-sm"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-y-20 text-center lg:text-left gap-x-10">
        {Project_Data.map((data, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="project-item"
          >
            <img src={data.img} className="w-[700px] mx-auto" alt="Naifty" />
            <div>
              <h1 className="uppercase tracking-[0.3rem] mt-10 text-[0.9rem] text-[#96b923]">
                {data.name}
              </h1>
              <h1 className="md:text-[2rem] text-[1.5rem] capitalize mt-5 font-bona">
                {data.info}
              </h1>
              <div className="md:space-x-10 space-x-5 mt-5">
                <a
                  href={data.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase md:tracking-[.3rem] tracking-[.2rem] text-[10px] border md:px-[30px] md:py-[10px] px-[10px] py-[5px] hover:bg-[#292b6488] duration-500 inline-flex items-center"
                >
                  <img
                    src={live_icon}
                    className="w-[20px] inline mr-3"
                    alt="Live demo icon"
                  />
                  live demo
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase md:tracking-[.3rem] tracking-[.2rem] text-[10px] border md:px-[30px] md:py-[10px] px-[10px] py-[5px] hover:bg-[#292b6488] duration-500 items-center inline-flex"
                >
                  <img
                    src={code_icon}
                    className="w-[20px] inline mr-3"
                    alt="Code icon"
                  />
                  code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
