import React from 'react'
import logo from "../assets/image.png";
import { FaLinkedin, FaGithub,  FaInstagram } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

export const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 h-42 w-52'   src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
            <a href="https://www.linkedin.com/in/niraj-parihar-670a122a5/"><FaLinkedin/></a>
            <a href="https://github.com/Niraj11Parihar"><FaGithub/></a>
            <a href="https://www.instagram.com/n_i_r_a_j.p/"><FaInstagram/></a>
            {/* <FaSquareTwitter/> */}
            
        </div>
    </nav>
  )
}
