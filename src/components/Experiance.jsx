import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experiance = () => {

    const technology = [
        {
            id:1,
            image: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id:2,
            image: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id:3,
            image: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id:4,
            image: react,
            title: "ReactJS",
            style: "shadow-blue-600",
        },
        {
            id:5,
            image: github,
            title: "GitGub",
            style: "shadow-gray-500",
        },
        {
            id:6,
            image: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500",
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-slate-800 to-black w-full h-screen text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col  justify-center w-full h-full '>
        <div>
            <p className='text-4xl border-b-4 border-gray-500 inline rounded-sm p-2'>Experience</p>
            <p className='py-6'>These are the technologies that I have worked on</p>
        </div>



        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                technology.map((item)=>{
                    const {id, image,title, style} = item
                    return (
                      <div key={id} className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}>
                        <img src={image} alt={title} className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p> 
                      </div>
                    );
                })
            }
            
        </div>
      </div>
    </div>
  )
}

export default Experiance
