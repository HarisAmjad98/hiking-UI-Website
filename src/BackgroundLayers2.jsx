import React from "react";
import HG from "./assets/HG.png";
import MG from "./assets/MG.png";
import VG from "./assets/VG.png";
import BG from "./assets/BG.png";

export default function BackgroundLayers2() {
  return (
    <div className="absolute top-0 left-0 w-full -z-10 overflow-hidden">
      <div className="w-full h-full bg-no-repeat bg-center relative flex justify-center">
        <img
          src={HG}
          alt="Background Layer"
          className="
            block 
            h-auto                     
            w-[1920px]                
            max-w-[100vw]              
            object-contain              
            transform translate-y-[-10px] md:translate-y-[-200px]
          "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D26]/40 to-[#0B1D26]" />
      </div>

      <div className="w-full h-full bg-no-repeat bg-center relative flex justify-center">
        <img
          src={MG}
          alt="Background Layer"
          className="
            block 
            h-auto                     
            w-[1920px]                
            max-w-[100vw]              
            object-contain              
            transform translate-y-[-150px] md:-translate-y-[450px]
          "
        />

      </div>

      <div
        className="w-full h-full bg-no-repeat bg-center relative flex justify-center">
        <img
          src={VG}
          alt="Background Layer"
          className="
            block 
            h-auto                     
            w-[1920px]                
            max-w-[100vw]              
            object-contain              
            transform translate-y-[-430px] md:-translate-y-[1250px]
      "
        />
      
      </div>

      <div className="w-full h-full bg-no-repeat bg-center relative flex justify-center">
        <img
          src={BG}
          alt="Background Layer"
          className="
            block 
            h-auto                     
            w-[1920px]                
            max-w-[100vw]              
            object-contain              
            transform translate-y-[-550px] md:-translate-y-[1550px]
      "
        />
      </div> 




    </div>
  );
}
