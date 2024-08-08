import React from 'react'
import Progress from './Progress'

function About() {
  return (
    <div className="w-full lg:h-screen">
    <div className="container flex justify-between h-auto items-start lg:pt-20 py-10 gap-10 lg:flex-row flex-col lg:px-0  md:px-8 sm:px-6 px-4">
    <div className="expText lg:w-1/2">
      <h2 className="lg:text-[42px] mb-10 text-[32px] md:leading-9 font-extrabold">
      A Little About me </h2>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em]  lg:mt-0 mt-2">
      I’m a front-end web developer with over 14 years of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices. 
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      I'm Widely work on wordpress using various page builders like Elementor, Oxygen, Beaver, WPBakery etc. and aprt from wordpress I also have strong hold in Clickfunnels, GHL, Unbounce, kartra, Kajabi, Mailchimp, Klaviyo and various landing page builder application.
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      In a quest for always keeping myself updated, I will always search new technologies.
      </p>
      <button className="mt-5 text-[18px] leading-8 px-8 py-2 border text-white font-bold bg-[#13a300]">
        <a href="https://www.thecsshouse.com/wp-content/uploads/2024/07/Raj__Gorai_-_Digital_Marketing__Sales_Strategist_Freelancer.pdf" target="_black">Download Resume</a>
      </button>
    </div>
    <div className="expYear w-full lg:w-1/2 lg:pl-10 flex text-[14px] flex-col gap-5">
    
     <Progress />
    </div>
    </div>
</div>
  )
}

export default About