import React from "react";
import wprojectImg1 from "../assets/wordpress-project1.png"
import wprojectImg2 from "../assets/wordpress-project2.png"
import wprojectImg3 from "../assets/wordpress-project3.png"
import wprojectImg4 from "../assets/wordpress-project4.png"
import wprojectImg5 from "../assets/wordpress-project5.png"
import wprojectImg6 from "../assets/wordpress-project6.png"
import { CiLocationArrow1 } from "react-icons/ci";


function Projects1() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid grid-cols-3 gap-7">
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg1} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="visitSite flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black transition-all duration-500 ">visit website</p> <CiLocationArrow1 className="arrowsvg border rotate-[45deg]" /> </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg2} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black  ">visit website</p> <CiLocationArrow1 /> </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg3} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black  ">visit website</p> <CiLocationArrow1 /> </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg4} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black  ">visit website</p> <CiLocationArrow1 /> </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg5} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black  ">visit website</p> <CiLocationArrow1 /> </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg ">
            <div className="h-full rounded-lg flex flex-col items-center text-center">
              <img className="flex-shrink w-full h-68 object-cover  object-center mb-4"
                src={wprojectImg6} />
              <div className="w-full flex flex-col items-start">
                <h2 className="title-font text-left font-medium text-lg text-gray-900">
                Figma,HTML, CSS, JS, WordPress Elementor.
                </h2>
                <a className="flex underline hover:no-underline items-center gap-3" href="#"><p className="font-bold text-black  ">visit website</p> <CiLocationArrow1 /> </a>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
}

export default Projects1;
