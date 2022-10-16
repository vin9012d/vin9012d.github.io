import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Fade } from 'react-reveal';
export const Calender = () => {
  return (
    <div
    name="calender"
    className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white calender1  "
    >
      
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
      
          <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 py-2">
            Github Calender
          </p>
          </div>
          <Fade top duration={1000} distance="40px">  
              <div className='border-2 justify-center  mx-auto'>
                  
              <div className=' justify-center px-4 lg:px-20 py-3 mx-auto mt-7'>
                  
                  <GitHubCalendar username="vin9012d" />
                  
          </div>
          <div className='flex justify-center mx-auto mb-5  gap-3 w-10/12'>
            <div className=''>
              <img align="center" src="https://github-readme-stats.vercel.app/api?username=vin9012d&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark" alt="vinodstats"  className='-mb-2 h-40' /></div>
            <div className=''>            <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=vin9012d&layout=compact&hide=Shell&border_radius=0&theme=dark" alt="vinodlang"  className='h-40' />
            </div></div>

          </div>
          </Fade>
        </div>
       
    </div>
  )
}
