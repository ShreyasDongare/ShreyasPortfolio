import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
const [nav, setNav]= useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white fixed bg-black">
      <div className="z-10 select-none">
        <h1 className="text-5xl font-signature ml-2 z-10">Shreyas</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-400 z-10  mr-4  md:hidden"
      >
        {nav ? (
            <FaTimes
              className="transition-all duration-300 hover:rotate-180"
              size={30}
            />
            ) : (
                <FaBars
                  className="transition-all duration-300 hover:rotate-180"
                  size={30}
                />
                )}
      </div>
      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 md:hidden">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize text-4xl py-5 my-1"
              >
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
