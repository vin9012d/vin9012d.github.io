import React from "react";
import jcrew from "../assets/portfolio/jcrew.png";
import lifestore from "../assets/portfolio/lifestore.png";
import mynthresa from "../assets/portfolio/mynthresa.png";
import buffer from "../assets/portfolio/buffer.png"
import sudoku from "../assets/portfolio/sudoku.png"
import tictactoe from "../assets/portfolio/tictactoe.png"

import { Fade } from "react-reveal"
import { FaEye,FaGithub} from "react-icons/fa";
const Portfolio = () => {
  const portfolios = [

  
    {

      id: 1,
      src: buffer,
      link: 'https://bufferr.netlify.app/',
      repo: 'https://github.com/vin9012d/Buffer_clone.git',
      text:"Buffer site clone",
      skills: "React, Redux, React-redux, NPM packages,Javascript, Chakra UI, CSS",
      desc:`This project is clone of Buffer.com   which is digital marketing management site. Here I implemented some functionalities like genetate the graph from data,connect the channels..etc  `,
      title:"Buffer Clone"
    

  },
    {
      id: 2,
      src: lifestore,
      link: 'https://lifestoreclone.vercel.app/',
      repo: 'https://github.com/vin9012d/Lifestore_clone.git',
      text: "Lifestore site clone",
      skills: "React, NPM packages,Javascript, Chakra UI, CSS",
      desc: "This project is about building an online e-commerce store. Here with the use of React I implemeted the functionalities of an e-commerce website like filtering,add to cart,checkout..etc  ",
      title:"Lifestore Clone"
    },
    {
      id: 3,
      src: jcrew,
      link: 'http://jcrew-project-clone.netlify.app/',
      repo: 'https://github.com/vin9012d/Jcrew_clone.git',
      text: "Jcrew site clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online e-commerce store. We implemeted all the functionality of an e-commerce store. Here I implemented the checkout with all the functionality as real time application",
      title:"Jcrew Clone"
    },
    {
      id: 4,
      src: mynthresa,
      link: 'https://mynthresaclone.netlify.app/',
      repo: 'https://github.com/vin9012d/Mynthresa_clone.git',
      text: "Mynthresa site clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online e-commerce store. Here I implemeted all the functionalities of an e-commerce website like sorting,add to cart,checkout..etc  ",
      title:"Mynthresa Clone"
    },
    {
      id: 5,
      src: sudoku,
      link: 'https://vinod-sudoku.netlify.app/',
      repo: 'https://github.com/vin9012d/sudoku-game',
      text: "Mynthresa site clone",
      skills: "React,Javascript,HTML,CSS",
      desc: "Sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares. The object of the puzzle is to fill the remaining squares, using all the numbers 1–9 exactly once in each row, column, and the subgrid of 3 ×  3. ",
      title:"Sudoku"
    },
    {
      id: 6,
      src: tictactoe,
      link: 'https://vinod-tictactoe.netlify.app/',
      repo: 'https://github.com/vin9012d/tic_toc_toe',
      text: "Mynthresa site clone",
      skills: "React,Javascript,HTML,CSS",
      desc: "Tic-tac-toe is a game in which two players take turns in drawing either an `O' or  `X' in 1 square of a grid consisting of 9 squares. The winner is the first who to get three of the same symbols in a row.  ",
      title:"Tic Tac Toe"
    }


  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white portfolio1 projects "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo ,title,desc,skills}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
           <Fade top duration={1000} distance="40px">    <img
                src={src}
                alt="projects"
                className="rounded-md hover:scale-110 duration-500 "
              /> </Fade>
              <div className="p-4">
                <p className="text-center text-xl p-2" >{title}</p>
                <p className="text-sm">{ desc}</p>
                <p className="mt-5 text-sm">Tech Stack : { skills}</p>
              </div>
              <div className="flex m-auto items-center justify-between">
                <button className=" px-6 py-1 m-4 duration-200 text-center   hover:scale-110" onClick={ () => window.open(link, '_blank')}>
                  <FaEye size={30} />
                </button>
                <button className=" px-6 py-1 m-4 text-center duration-200 hover:scale-110 " onClick={ () => window.open(repo, '_blank')}>
                  <FaGithub size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;