import React from 'react'
import logo from "../assets/JohnsonLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between  py-6'>
        <div className='flex flex-shrink-0 items-center' >
          <img src={logo} alt="logo" className='mx-2 w-12  rounded-md	border-radius: 0.375rem; /* 6px */'  />
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl ' >
            <a href="https://www.linkedin.com/in/johnsonnabaluru/"><FaLinkedin/></a>
            <a href="https://github.com/Johnsonnabaluru"><FaGithub/></a>
            <a href="https://www.instagram.com/_johnson_n/"><FaInstagram/></a>
            <a href="https://x.com/_johnson_n"><FaSquareXTwitter/></a>
          </div>
       
    </nav>
  )
}

export default Navbar
 