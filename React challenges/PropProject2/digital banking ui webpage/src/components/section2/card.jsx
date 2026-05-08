import React from 'react'
import { ArrowRight } from 'lucide-react';


const Card = () => {
  return (
    <div className='h-full w-1/3 flex shrink-0 flex-col relative  rounded-2xl '>
        <img src="https://i.pinimg.com/736x/16/35/2b/16352b1b70d94f7da4aca0764a6c099a.jpg"  className='object-cover w-full h-full  rounded-2xl'/>
        <div className="number rounded-full bg-white  absolute top-3 left-1.5 p-5 w-5 h-5 text-2xl text-center flex justify-center items-center"><span>1</span></div>
         
          
         <div className="bottom-1 p-1.5 absolute flex flex-col justify-between">
         <p className='leading-normal text-white  text-2sx rounded-2xl p-4 "'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sequi debitis quod libero accusamus minima vel sit eligendi possimus ex vero magnam distinctio fuga quisquam dolore, quidem, ducimus qui. Quia.</p>
         <div className="bottombtn mb-20 flex justify-between items-center mt-2">

         <button className=' p-1.5 rounded-2xl bg-blue-600 text-white flex justify-center items-center '>
                   <div className='uppercase'>Statisfied</div> 
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