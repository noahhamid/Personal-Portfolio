import { Link } from 'react-scroll';

import React from "react";
import Nav from "./navbar";
import ParticlesComponent from "./particles";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen">
      <ParticlesComponent />
      <div className="fixed top-0 w-full z-20 ">
        <Nav />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#fff] text-center">
        <h1 className="font-[800] px-2 md:text-[3rem] text-[2.8rem] animate-name">
          Hey, I'm <span className="text-[#965eff] md:inline-flex inline-block"> Noah Hamid</span>
        </h1>
        <h2 className="font-semibold animate-info">Front End Web Developer</h2>

        <Link to="contact" spy={true} smooth={true} offset={0} duration={1}>
          <button className="bg-[#4a32ff] py-2 px-5 font-bold mt-4 animate-button">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
