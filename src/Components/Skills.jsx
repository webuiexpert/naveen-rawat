import React from "react";
import WordpressProjects from "./WordpressProjects";
import Projects1 from "./Projects1";

function Skills() {
  return (
    <div className="w-full">
      <div className="container relative h-full py-20 flex-col px-4 sm:px-6 md:px-8 lg:px-0">
        <h3 className="text-center font-bold text-[28px]">In the past few years I have worked on lots of web and Graphic related projects</h3>
        <h4 className="text-center text-[24px]">Below are the list of few projects that will showcase my strength.</h4>
        <ul className="w-full relative mx-auto grid mt-16 max-w-full lg:grid-cols-4 grid-cols-2  gap-5">
          <li className=""> 
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="yes"
              name="answer"
              id="yes"
              defaultChecked
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:border-black peer-checked:bg-[#13a300] peer-checked:text-white font-semibold transition-all duration-500 ease-in-out"
              htmlFor="yes"
            >
              Wordpress
            </label>
            <div className="absolute bg-white left-0 lg:mt-24 mt-64 rounded-lg w-[100%] mx-auto transition-all duration-500 ease-in-out translate-x-0 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-[0]">
              <Projects1 />
            </div>
          </li>
          <li>
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="no"
              name="answer"
              id="shopify"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:border-black peer-checked:bg-[#13a300] peer-checked:text-white font-semibold transition-all duration-500 ease-in-out"
              htmlFor="shopify"
            >
              Shopify
            </label>
            <div className="absolute bg-white shadow-lg left-0 lg:mt-24 mt-64 rounded-lg w-[100%] mx-auto transition-all duration-500 ease-in-out translate-x-0 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-[0]">
              <WordpressProjects />
            </div>
          </li>
          <li>
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="no"
              name="answer"
              id="webflow"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-white font-semibold peer-checked:bg-[#13a300] transition-all duration-500 ease-in-out"
              htmlFor="webflow"
            >
              Webflow
            </label>
            <div className="absolute bg-white shadow-lg left-0 lg:mt-24 mt-48 rounded-lg w-[100%] mx-auto transition-all duration-500 ease-in-out translate-x-0 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-[0]">
              <WordpressProjects />
            </div>
          </li>
          <li>
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="no"
              name="answer"
              id="Etemplate"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-white font-semibold peer-checked:bg-[#13a300] transition-all duration-500 ease-in-out"
              htmlFor="Etemplate"
            >
              Email Template
            </label>
            <div className="absolute bg-white shadow-lg left-0 lg:mt-24 mt-48 rounded-lg w-[100%] mx-auto transition-all duration-500 ease-in-out translate-x-0 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-[0]">
              <WordpressProjects />
            </div>
          </li>
          <li>
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="no"
              name="answer"
              id="figma/html"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-white font-semibold peer-checked:bg-[#13a300] transition-all duration-500 ease-in-out"
              htmlFor="figma/html"
            >
              Figma to HTML
            </label>
            <div className="absolute bg-white shadow-lg left-0  p-6 border mt-20 border-indigo-300 rounded-lg w-[80%] mx-auto transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
              consequatur error nulla quaerat rem fugit provident tempore nihil
              a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia?
              Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum?
            </div>
          </li>
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="no"
              name="answer"
              id="figma/react"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-white font-semibold peer-checked:bg-[#13a300] transition-all duration-500 ease-in-out"
              htmlFor="figma/react"
            >
              Figma to React/Tailwind CSS
            </label>
            <div className="absolute bg-white shadow-lg left-0  p-6 border mt-20 border-indigo-300 rounded-lg w-[80%] mx-auto transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
              consequatur error nulla quaerat rem fugit provident tempore nihil
              a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia?
              Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum?
            </div>
          </li>
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              defaultValue="yesno"
              name="answer"
              id="marketing"
            />
            <label
              className="col-span-6 flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-white font-semibold peer-checked:bg-[#13a300] transition-all duration-500 ease-in-out "
              htmlFor="marketing"
            >
              Marketing Landing. Pages
            </label>
            <div className="absolute bg-white shadow-lg left-0  p-6 border mt-20 border-indigo-300 rounded-lg w-[80%] mx-auto transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
              consequatur error nulla quaerat rem fugit provident tempore nihil
              a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia?
              Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
              rem fugit provident tempore nihil a aspernatur ad laboriosam,
              dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
              consequatur error nulla quaerat rem fugit provident tempore nihil
              a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia?
              Nostrum?
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
