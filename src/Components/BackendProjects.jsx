import React from "react";
import bprojectImg1 from "../assets/backendprojects/backendproj1.png"
import bprojectImg2 from "../assets/backendprojects/backendproj2.png"
import bprojectImg3 from "../assets/backendprojects/backendproj3.png"
import bprojectImg4 from "../assets/backendprojects/backendproj4.png"
import bprojectImg5 from "../assets/backendprojects/backendproj5.png"
import { CiLocationArrow1 } from "react-icons/ci";

const backendprojectdata = [
  {
      "projectImage": bprojectImg1,
      "title": "E-Com website from where you can buy and customize sports gear.",
      "tools": "Tech: The front end is in React JS and Bootstrap, and the back is in Symfony Framework.",
      "link": "https://www.sportsgearswag.com"
     },
     {
      "projectImage": bprojectImg2,
      "title": "A platform for learning code. Users can practice the code by using this platform.",
      "tools": "Tech: Laravel, MySQL",
      "link": "https://app.vivocoder.com/"
     },
     {
      "projectImage": bprojectImg3,
      "title": "A platform for handling the latest events, new membership registrations, and online payments for a Singapore based society ",
      "tools": "Tech: Codeigniter, MySQL",
      "link": "https://learning.slp.org.sg/"
     },
     {
      "projectImage": bprojectImg4,
      "title": "Real estate website for selling property and posting ads. In development",
      "tools": "Tech: NextJs, MongoDB",
      "link": "https://main.d2dtlafb1s9gfu.amplifyapp.com/auth/login"
     },
     {
      "projectImage": bprojectImg5,
      "title": "Its a web application that allows users to personalize their phone cases by uploading images, customizing designs, materials, finishes, and colors. Users can preview their custom designs and complete the purchase through an integrated payment system.",
      "tools": "Tech: Next.js, TypeScript, PostgreSQL, Prisma ORM, Stripe for Payment, Shadcn/UI.",
      "link": "https://moments-covers.vercel.app/"
     },
  ]


function BackendProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            backendprojectdata.map((pItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg  flex-shrink w-full h-68 object-cover  object-center mb-4" src={pItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{pItem.title}</h2>
              <h2 className="title-font text-left font-medium lg:text-sm my-2 text-sm text-gray-900">{pItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={pItem.link} target="_blank"><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
  );
}

export default BackendProjects;
