import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";

const SocialLinks = () => {
  const social = [
    {
      id: 1,
      account: "Linkedin",
      link: "https://www.linkedin.com/in/shreyas-dongare-28302417b/",
      icon: <FaLinkedin size={30} />,
    },
    {
      id: 2,
      account: "Github",
      link: "https://github.com/ShreyasDongare",
      icon: <FaGithub size={30} />,
    },
    {
      id: 3,
      account: "E-mail",
      link: "mailto:dongareshreyas@gmail.com",
      icon: <HiOutlineMail size={30} />,
    },
    {
      id: 4,
      account: "Resume",
      link: "https://docs.google.com/document/d/1EIVOvKLwxFseGKFztEEczCql9P94fO8YJXpdcXznazc/edit?usp=sharing/",
      icon: <BsFillPersonPlusFill size={30} />,
    },
  ];

  

  return (
    <div className=" hidden md:flex flex-col fixed top-[35%] left-0">
      <ul>
        {social.map((links) => {
          const { id, account, link, icon } = links;
          return (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-14
        px-4 bg-gradient-to-r from-sky-500 to-teal-500 ml-[-100px] hover:ml-[-10px] duration-300 rounded-br-xl border-t-2"
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between item items-center w-full text-white"
              >
                <>
                  {account} {icon}
                </>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
