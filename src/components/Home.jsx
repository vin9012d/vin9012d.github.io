import React from "react";
import HeroImage from "../assets/vin.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
  const {text} = useTypewriter({
    words: [" I'm a Full Stack Developer"],
    loop: 100,
    Cursor:"|",
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home1 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
          
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full  w-2/3">
          <h2 className="text-4xl text-white font-bold">Hello,  my name is</h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-4 ">
           Vinod Chaudhari
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            {text}
            <Cursor />
          </h2>
         

          <div className="portfolio-btn">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen hover:scale-110 duration-500 pl-10 flex justify-end w-1/3 ">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-full mx-auto  w-2/3 md:w-4/5  text-end "
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
