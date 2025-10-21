import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Content() {
  return (
    <section
      id="start"
      role="region"
      aria-label="Start"
      className="
        w-full flex justify-center items-center 
        min-h-screen 
        -mt-50 md:-mt-17 lg:-mt-0
        mr-15         
        scroll-mt-28 lg:scroll-mt-32
      "
    >
      <div className="w-full max-w-3xl text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-6">
          <div className="w-10 h-[2px] bg-yellow-500"></div>
          <p className="uppercase tracking-widest text-yellow-500 text-xs sm:text-sm font-semibold">
            A Hiking Guide
          </p>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
          Be Prepared For The Mountains And Beyond!
        </h1>
        <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 sm:mt-10 animate-bounce">
          <p className="text-yellow-500 text-xs sm:text-sm mb-1">
            Scroll Down
          </p>
          <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>
    </section>
  );
}
