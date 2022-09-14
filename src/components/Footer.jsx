import React from "react";
import { Fade } from "react-reveal";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Footer() {
  const {text} = useTypewriter({
    words: ["Made with ❤️ by Vinod "],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

    return(
      <div class="text-center p-4 bg-black footer">
        <Fade bottom duration={1000} distance="40px">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          
       
          
            
            {text}
            <Cursor />
     
         </h2> </Fade>
        
      </div>
    )
}


export default Footer