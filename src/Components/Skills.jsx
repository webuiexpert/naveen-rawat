import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Projects1 from "./Projects1";

function Skills() {
  return (
    <div className="w-full">
      <div className="container relative h-full py-20 flex-col px-4 sm:px-6 md:px-8 lg:px-0">
        <h3 className="text-center font-bold text-[28px]">
          In the past few years I have worked on lots of web and Graphic related
          projects
        </h3>
        <h4 className="text-center text-[24px]">
          Below are the list of few projects that will showcase my strength.
        </h4>
        <Tabs className={"mt-16"}>
          <TabList  className={ "grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4"}>
            
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Wordpress</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Shopify</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Webflow</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Email Template</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Figma to HTML</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Figma to React/Tailwind CSS</Tab>
            <Tab  className={ "text-black lg:px-5 px-2 py-2 font-bold text-center rounded-full border lg:-text-[18px] text-[14px]"}>Marketing Landing Pages</Tab>
            
          </TabList>
<div className="py-5 mt-5">
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          <TabPanel>
           <Projects1 />
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Skills;
