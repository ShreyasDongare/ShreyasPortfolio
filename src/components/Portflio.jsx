import React from 'react'
import navbar from '../assets/portfolio/navbar.jpg'
import nursery from '../assets/portfolio/nursery.png'
import menu from '../assets/portfolio/menu.jpg'

const Portflio = () => {
    const projects = [
        {
            id: 1 ,
            image: navbar,
        },
        {
            id: 2 ,
            image: nursery,
        },
        {
            id: 3  ,
            image: menu,
        },
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white'>
      <div className='max-w-screen-lg px-4 m-auto  flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl inline border-b-4 rounded-sm border-gray-500'>Portfolio</p>
            <p className='py-6'> here are some projects that have worked on</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                projects.map((item)=>{
                    const {id,image}=item
                     return (
                       <div key={id} className="flex flex-col justify-between shadow-md  shadow-gray-600 rounded-lg ">
                         <img
                           src={image}
                           alt=""
                           className="object-cover h-3/4 rounded-md duration-200 hover:scale-105"
                         />
                         <div className="flex item-center justify-center">
                           <button className="w-1/2 px-6 py-3 duration-200 scale-105">
                             Demo
                           </button>
                           <button className="w-1/2 px-6 py-3 duration-200 scale-105">
                             Code
                           </button>
                         </div>
                       </div>
                     );
                })
            }
            
        </div>
      </div>
    </div>
  )
}

export default Portflio
