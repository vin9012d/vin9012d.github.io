import React from "react";


import dsaa from "../assets/dsaa.png"


import backend from "../assets/bend.jpg"
import comm from "../assets/comm.jpg"
import frontend from "../assets/fend.png"

import { Fade } from "react-reveal"


const Workskills = () => {
  const techs = [
  
    {
      id: 11,
      src: backend,
      title: "Backend Development",
      style: "shadow-red-500",
    },  {
      id: 5,
      src: frontend,
      title: "Frontend Development",
      style: "shadow-green-400",
    },

    {
      id: 10,
      src: comm,
      title: "Communication Skills",
      style: "shadow-white",
    },
    {
      id: 6,
      src: dsaa,
      title: "Data Structure and Algoritham",
      style: "shadow-blue-600",
    }
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen  workskill xl:pt-52  workskill1"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
               <Fade top duration={1000} distance="40px">   <img src={src} alt="" className="w-32 mx-auto" />
                <p className="mt-4">{title}</p>
                </Fade>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Workskills;
