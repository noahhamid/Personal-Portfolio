import React, { useEffect, useRef } from "react";
import skillData from "./data/skillsData";


const Skill = () => {
  const skillRefs = useRef([]);

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

    skillRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (skillRefs.current) {
        skillRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <section id="skill" className="lg:pt-[80px] pt-[50px] pb-[20px] relative bg-[#0d0723] lg:px-[150px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[#965eff] font-bold text-[2rem] tracking-wide">Skills</h1>
        <div className="bg-[#c9ff18] w-16 h-[2px] rounded-sm"></div>
      </div>
      <div className="flex flex-wrap my-[100px] md:gap-20 gap-10 justify-center">
        {skillData.map((data, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="md:w-[180px] w-[120px] h-[150px] md:h-[180px] bg-[#0d0723] flex flex-col items-center justify-around shadow-lg shadow-[#545252] skill-item"
          >
            <img
              src={data.img}
              className="md:w-[80px] w-[60px] hover:w-[100px] duration-500"
              alt={data.name}
            />
            <h1 className="text-center text-[#fff] font-semibold uppercase">{data.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
