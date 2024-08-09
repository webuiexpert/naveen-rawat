import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import Calendly from "./Calendly";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


function Navbar() {

  useGSAP( () => {
    gsap.from(".logo", {
      duration: 1.6,
      y:10,
      scale:0.7,
      opacity: 0,
    }) 


  gsap.from(".lists ul li",
      {
        duration: 0.6,
        y: -10,
        opacity: 0,
        stagger:0.5,

      });
      gsap.from(".Calendlybtn",
        {
          duration: 0.6,
          delay:1.9,
          y: -10,
          opacity: 0,
          stagger:0.5,
          })
        })



 
  return (
    <div
    
      className=" navbar bg-[#4b006d] w-full sticky left-0 top-0 z-50 py-5"
    >
      <div className="container flex justify-between h-24  lg:gap-0 gap-16  items-center px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="logo lg:w-[25%]  w-[40%]">
          <img className="w-[100%]" src={Logo} alt="" />
        </div>
        <div className="lists lg:w-auto w-[60%] flex items-center justify-between gap-10">
          <ul className="hidden sm:hidden md:hidden lg:flex items-center gap-7 text-[20px] text-white font-semibold ">
            <a href="#about">
              <li className="leading-[18px]">About</li>
            </a>
            <a href="#expertise">
              <li className="leading-[18px]">Expertise</li>
            </a>
            <a href="#reviews">
              <li className="leading-[18px]">Reviews</li>
            </a>

            <a href="#contact">
              <li className="leading-[18px]">Contact</li>
            </a>
          </ul>
          <div className="Calendlybtn lg:mt-0 w-full text-center border appontBtn lg:text-[18px] leading-8 lg:px-8 py-2 bg-[#13a300] text-white font-bold">
            {/* <button className=" ">or Book Free Consultant</button> */}
            <Calendly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
