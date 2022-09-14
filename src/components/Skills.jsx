import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import dsa from "../assets/dsa.png"
import ts from "../assets/ts1.png"  
import mongoose from "../assets/mongoose.png"


import { Fade } from "react-reveal"


const Skills = () => {
  const techs = [
  
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },  {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },

    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 6,
      src: mongoose,
      title: "Mongoose",
      style: "shadow-white",
    },
  
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
  
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

   
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

 
  
    {
      id: 13,
      src: dsa,
      title: "DSA",
      style: "shadow-red-500",
    },
    {
      id: 14,
      src: ts,
      title: "Typescript",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen  skills xl:pt-52  experience1"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Skills
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
               <Fade top duration={1000} distance="40px">   <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
                </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
