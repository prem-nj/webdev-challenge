import React from "react";
import { ArrowUpRight } from "lucide-react";
import Arrow from "./Arrow";
import Hero from "./hero";

const Section1 = () => {
  return (
    <div className=" w-1/3 h-full text-black rounded-xl flex flex-col mt-[30px]">
      
    
      <div className=" flex flex-col justify-between h-full p-7 mt-3 ">
       <Hero/>
       <Arrow/>
      </div>


    </div>
  );
};

export default Section1;