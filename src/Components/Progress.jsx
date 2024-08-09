import React from "react";
import wordpress from "../assets/svg/wordpress.svg"
import html from "../assets/svg/html.svg"
import css from "../assets/svg/css3.svg"
import webflow from "../assets/svg/webflow.svg"
import clickfunnel from "../assets/svg/clickfunnel.svg"
import ghl from "../assets/svg/wordpress.svg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Progress() {


  useGSAP ( () => {
    gsap.from(".progressLIne span", {
      width: '0%',  // Start with 0% width
      duration: 2.5,
      stagger:0.5,
      scrollTrigger:{
        trigger:".progressLIne",
        start: "top 80%",
        end: "bottom 80%",
      }
      
    });
  }, []);

  return (
    <div>
      
   <div className="flex items-start justify-center flex-col">
   <h2 className="lg:text-[42px] mb-10 text-[32px] md:leading-9 font-extrabold">
   Technical Skills </h2>
  <section className="w-full">
  
    <section className="progressLIne grid grid-cols-1 gap-6">
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={wordpress} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              Wordpress </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className=" h-full bg-custom-pattern block rounded-full w-[85%]"  />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={html} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              HTML5 </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className="h-full bg-custom-pattern w-full block rounded-full" style={{width: '85%'}} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={css} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              CSS3 </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className="h-full bg-custom-pattern w-full block rounded-full" style={{width: '85%'}} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={webflow} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              Webflow </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className="h-full bg-custom-pattern w-full block rounded-full" style={{width: '85%'}} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={clickfunnel} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              Click Funnel </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className="h-full bg-custom-pattern w-full block rounded-full" style={{width: '85%'}} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={ghl} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="font-bold  text-[18px] mr-auto text-black flex items-center">
              GHL </h4>
          </div>
          <div className="overflow-hidden bg-blue-50 h-2 rounded-full w-full">
            <span className="h-full bg-custom-pattern w-full block rounded-full" style={{width: '85%'}} />
          </div>
        </div>
      </div>
      
    </section>

  </section>
</div>

    </div>
  );
}

export default Progress;
