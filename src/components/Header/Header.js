import React from 'react'
import  HeaderCSS  from "./Header.module.css";
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import { IconContext } from "react-icons";
const Header = () => {
  return (
    <div>
     <div className='flex'> 
          <div className="flex flex-col flex-1">
           <div  className={`mt-52 ml-16 text-white text-7xl ${HeaderCSS.title}`}>Volkan Vural </div>
           <div className={`mt-4 ml-8 text-white `}>Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With
over 1 year self-taught and almost  1 year  experience as a Frontend Developer, I will step in and make an immediate contribution
to your company continued success

You are seeking someone who can direct sofware development while keeping usability,efficiency
and user requirements in mind, and thats exactly what I am prepared todo. 
</div>
<div className='flex flex-row mt-8 justify-center items-center'>
<IconContext.Provider value={{ color: "#C6A15A", className: "global-class-name" }}>
  <a href='https://www.linkedin.com/in/volkan-vural-software/'>
    
    <BsLinkedin size={44} />
  </a>
</IconContext.Provider>
<IconContext.Provider value={{ color: "#C6A15A", className: "global-class-name" }}>
  <a href='https://github.com/Volkansoftware' className='mx-8'>
    
    <AiFillGithub size={44} />
  </a>
</IconContext.Provider>


</div>
           
           </div>
           
          <div className="flex flex-1">
           <img className={`mt-8 ml-24  h-screen max-width`} src={require('../../assets/kurukafa.png')} alt="asd" />
           </div>
           </div>
    </div>
  )
}

export default Header