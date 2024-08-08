import React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className='bg-[#4b006d] w-full sticky left-0 top-0 z-50'>
         <div className="container flex justify-between h-24  items-center px-4 sm:px-6 md:px-8 lg:px-0">
   <div className="logo">
   <img className='lg:w-[60%] w-[50%]' src={Logo} alt="" />
   </div>
   <div className="lists">
   <ul className="hidden sm:hidden md:hidden lg:flex items-center gap-7 text-[20px] text-white font-semibold ">
           <li className="leading-[18px]">About</li>

              
         
            <a href="#expertise">
              <li className="leading-[18px]">Expertise</li>
            </a>
            <a href="#reviews">
              <li className="leading-[18px]">Reviews</li>
            </a>
            <a href="#casestudies">
              <li className="leading-[18px]">Casestudies</li>
            </a>
            <a href="#contact">
              <li className="leading-[18px]">Contact</li>
            </a>
          </ul>
   </div>
    </div>
    </div>
  )
}

export default Navbar