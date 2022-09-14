import React from "react";

import { Fade } from "react-reveal"
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const About = () => {

  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about1  "
    >
  <Fade top duration={1000} distance="40px">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <Fade top duration={1000} distance="40px">
        <p className="text-xl mt-5">
    Hello! My name is Vinod Chaudhari and I enjoy creating things that live on the internet.
        </p>
        </Fade>
        <br />
        <Fade top duration={1000} distance="40px">
        <p className="text-xl">
       I'm a passionate Developer with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.<br />  <br />
       As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.<br /> <br />
       Fast Forwarding to today,I built a number of web applications and 3 major projects. Learned a great deal about teamwork, leadership and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer. 
            </p>
            </Fade>
      </div>
      </Fade>
    </div>
  );
};

export default About;
