import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";

import menu from "./images/burger.png";
import close from "./images/cross.png";
import logo from './images/logo.svg'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav>
      <ul className="uppercase font-semibold text-[#ffffff] pl-[60px] justify-center items-center text-[0.9rem] bg-[#0d0723e1] list-none lg:space-x-[150px] space-x-[60px] hidden lg:flex">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1}
            activeClass=" text-light-green"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={1}
            activeClass=" text-light-green"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={1}
            activeClass=" text-light-green"
          >
            <img src={logo} className="w-[50px]" />
          </Link>
        </li>
        <li>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={1}
            activeClass=" text-light-green"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1}
            activeClass="text-light-green"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Small screens */}
      <div className="relative">
        <div className="absolute right-[10px] top-[10px] lg:hidden cursor-pointer z-40">
          <img
            src={isOpen ? close : menu}
            onClick={toggleMenu}
            alt="Menu Icon"
          />
        </div>

        {/* Backdrop */}
        {isOpen && <div className="backdrop" onClick={closeMenu}></div>}

        {/* Menu */}
        <ul
          ref={menuRef}
          className={`menu  px-[20px]  shadow-lg shadow-[#ccccd1] space-y-[20px]  ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="absolute top-[15px] lg:hidden z-40 cursor-pointer">
            <img src={close} onClick={toggleMenu} alt="Close Icon" />
          </div>
          <li className="cursor-pointer w-[60px] pt-10 hover:text-[#0d0723e1]">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={1}
              onClick={toggleMenu}
              activeClass="text-light-green"
            >
              <img src={logo} className="w-[50px]" />
            </Link>
          </li>
          <li className="cursor-pointer w-[60px] hover:text-[#0d0723e1]">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1}
              onClick={toggleMenu}
              activeClass="text-light-green"
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer w-[60px] hover:text-[#0d0723e1]">
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={0}
              duration={1}
              onClick={toggleMenu}
              activeClass="text-light-green"
            >
              Skills
            </Link>
          </li>

          <li className="cursor-pointer w-[60px] hover:text-[#0d0723e1]">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={1}
              onClick={toggleMenu}
              activeClass="text-light-green"
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer w-[60px] hover:text-[#0d0723e1]">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1}
              onClick={toggleMenu}
              activeClass="text-light-green"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
