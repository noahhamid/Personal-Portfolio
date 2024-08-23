import React, { useEffect, useRef } from "react";
import about from "./images/about.png";
import resume from "./images/resume.pdf";

const About = () => {
  const aboutRefs = useRef([]);

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

    aboutRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (aboutRefs.current) {
        aboutRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0d0723] px-[10px] lg:px-[150px] pb-[110px] lg:pt-[150px] pt-[50px] relative z-10"
    >
      <div className="lg:flex text-white items-center lg:space-x-20">
        <div
          ref={(el) => (aboutRefs.current[0] = el)}
          className="about-content"
        >
          <div className="flex flex-col items-center lg:items-start duration-500">
            <h1 className="text-[#965eff] font-bold text-[2rem] tracking-wide">
              About Me
            </h1>
            <div className="bg-[#c9ff18] w-24 h-[2px] rounded-sm mb-16"></div>
          </div>
          <h1 className="mb-3 text-center lg:text-left">Hello, welcome!</h1>
          <p className="text-[0.9rem] text-center lg:text-left">
            I’m <span className="text-[#c9ff18] font-semibold">Noah Hamid</span>
            , a Front-End Web Developer dedicated to crafting engaging and
            user-friendly websites. Combining creativity with technical
            expertise, I build responsive and interactive web experiences that
            stand out.
          </p>
          <div className="mt-[30px] mb-20 lg:mb-0 text-center lg:text-left">
            <a
              href={resume}
              download
              className="bg-[#4a32ff] py-2 px-5  text-white"
            >
              Download CV
            </a>
          </div>
        </div>
        <div
          ref={(el) => (aboutRefs.current[1] = el)}
          className="about-image max-w-[600px] mt-[50px] lg:mt-0 px-[10px] mx-auto"
        >
          <img src={about} alt="About me image" />
        </div>
      </div>
    </section>
  );
};

export default About;
