import React from 'react'
import { ArrowRight } from 'lucide-react';


const Card = (props) => {
  return (
    <div className='h-full w-[300px] flex shrink-0 flex-col relative  rounded-2xl '>
        <img src={props.image} className="w-full h-full object-cover rounded-2xl" alt="card image" />
        <div className="number rounded-full bg-white  absolute top-3 left-1.5 p-5 w-5 h-5 text-2xl text-center flex justify-center items-center">
          <span>{props.index}</span></div>
         
          
         <div className="bottom-1 p-1.5 absolute flex flex-col justify-between">
         <p className='leading-normal text-white  text-2sx rounded-2xl p-8"'>{props.intro}</p>
         <div className="bottombtn mb-20 flex justify-between items-center mt-2">

         <button className=' p-1.5 rounded-2xl bg-blue-600 text-white flex justify-center items-center '>
                   <div className='uppercase'>{props.tag}</div> 
          </button> 
          <button className=' px-3 py-1.5 rounded-full w-10 h-10 bg-blue-600 text-white  flex item-center justify-center'>
            <div>

                      <ArrowRight  />
            </div>


          </button>
         </div>
         </div>

        </div>
  )
}

export default Card