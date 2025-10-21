import React from "react";
import TG from "./assets/TG.jpg";

export default function BackgroundLayers() {
  return (
    <div className="absolute top-0 left-0 w-full -z-10 overflow-hidden">
      <div className="w-full h-full bg-no-repeat bg-center relative flex justify-center">
        <img
          src={TG}
          alt="Background Layer"
          className="
            block 
            h-auto                     
            w-[1920px]                
            max-w-[100vw]              
            object-contain              
            transform translate-y-[-10px] md:translate-y-[-20px] lg:translate-y-[-130px]
          "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D26]/40 to-[#0B1D26]" />
      </div>

    </div>
  );
}
