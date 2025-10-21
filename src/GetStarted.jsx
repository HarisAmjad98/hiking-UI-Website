import React from "react";
import Pic1 from "./assets/Pic1.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function GetStarted() {
  return (
    <section id="sec-01" className="w-full min-h-[80vh] flex items-center px-[15%] py-12 relative">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="relative flex-1 flex flex-col justify-center text-center lg:text-left">
          <span
            aria-hidden
            className="absolute -top-12 left-1/2 -translate-x-1/2 lg:top-[-4rem] -lg:left-6 lg:translate-x-0 lg:-left-24 text-white/10 font-extrabold leading-none select-none text-[6rem] sm:text-[8rem] lg:text-[14rem]"
          >
            01
          </span>
          <div className="relative z-10 flex items-center justify-center lg:justify-start space-x-3 mb-4 mt-[3rem] lg:mt-[4.5rem]">
            <div className="w-10 h-[2px] bg-yellow-500"></div>
            <p className="uppercase tracking-[0.25em] text-yellow-500 text-xs sm:text-sm font-semibold">
              Get Started
            </p>
          </div>
          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            What level of hiker are you?
          </h1>
          <p className="relative z-10 mt-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Determining what level of hiker you are can be an important tool when
            planning future hikes. This hiking level guide helps you plan hikes
            according to different ratings from sites like All Trails and Modern Hiker.
            What type of hiker are you – novice, moderate, advanced, or expert backpacker?
          </p>
          <a
            href="#"
            className="relative z-10 group inline-flex items-center gap-2 mt-6 text-yellow-500 font-medium"
          >
            <span className="underline underline-offset-4 decoration-yellow-500/40 group-hover:decoration-yellow-500">
              read more
            </span>
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <img
            src={Pic1}
            alt="Hiker"
            className="block w-[80vw] max-w-md lg:max-w-[28rem] aspect-[4/5] object-cover rounded-md ring-2 ring-fuchsia-400/70 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
