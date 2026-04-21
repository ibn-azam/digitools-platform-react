import React from "react";
import Group from "../../../src/assets/group-5.png";
import Banner from "../../../src/assets/banner.png";
import PlayIcon from "../../../src/assets/Play.png";


const Homepage = () => {
  return (
    <header className="my-10 flex flex-col lg:flex-row px-6 sm:px-12 lg:px-20 py-10 items-center justify-center gap-10">
      
      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        
        
        <span className="bg-[#e1e7ff] flex gap-1 items-center justify-center rounded-full p-1 px-3 mb-4">
          <img
            className="animate-ping duration-100 w-4 h-4"
            src={Group}
            alt="Icon"
          />
          <p className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-sm">
            New: AI-Powered Tools Available
          </p>
        </span>

        
        <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] text-[#101727] font-bold leading-tight mb-4">
          Supercharge Your <br className="hidden sm:block" /> Digital Workflow
        </h2>

      
        <p className="mb-6 text-[#627382] text-sm sm:text-base max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

       
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <button className="px-6 py-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full">
            Explore Products
          </button>

          <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full">
            <span className="absolute -inset-0.5 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] -z-10" />
            <img src={PlayIcon} alt="Play Icon" className="w-4 h-4" />
            <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-semibold">
              Watch Demo
            </span>
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <img
          src={Banner}
          alt="Banner"
          className="w-full h-auto object-contain"
        />
      </div>

    </header>
  );
};

export default Homepage;