import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg  mx-auto flex flex-col items-center
      justify-center h-full md:flex-row text-white"
      >
        <div className="flex flex-col justify-center h-full mt-6 mx-5">
          <h2 className="text-1xl sm:text-3xl">Hello, My name is</h2>
          <h2 className="text-3xl sm:text-5xl">Shreyas Dongare</h2>
          <h2 className=" text-4xl sm:my-3 ">I'm a <span className="text-rose-600">React Developer</span></h2>
          <p className="sm:my-2">
            I have total 3 years of experiance production and sales. Currently,
            I love to work on building and desigining Single Page Web
            Application using technology like ReactJs, HTML5, CSS, Tailwind,
            Bootstrap.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="w-1/3 group flex justify-center items-center cursor-pointer  bg-gradient-to-l from-sky-700 to-teal-600 rounded-md px-5 py-3">
             Portfolio
              <span className="mx-1 group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="ShreyasImage"
            className=" mx-auto  rounded-2xl w-2/3   "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
