import React, { useState } from 'react'

const App = () => {


  const [num, seta] = useState(0);
  function increase(){
    seta(num+1);
  }
 function decrease(){
    seta(num-1);
  }
 function jumpbyfive(){
    seta(num+5);
  }

  
  return (


    <div className='flex  items-center justify-center   mw-full h-screen '>

      
          <div className='text-4xl absolute top-19 w-65 h-65 rounded-full bg-black flex  justify-center'><p className='text-white mt-8'>{num}</p></div>
      <div className='flex flex-col  relative items-center w-1/2 h-1/2 justify-center rounded-4xl bg-gray-800'>
        <div className='buttons flex gap-10  justify-center items-center w-1/2 h-1/2 rounded-4xl bg-white-200'>
          <button className='increase rounded-2xl w-1/2 h-1/3 text-2xl text-white uppercase bg-amber-100 px-10 ' ><span className='text-black ' onClick={increase} >increase</span></button>
          <button className='decrease rounded-2xl w-1/2 h-1/3 text-2xl text-white uppercase  bg-amber-100 px-10'><span className='text-black ' onClick={decrease}>decrease</span></button>
          <button className='decrease rounded-2xl  h-1/3 text-2xl text-white uppercase  bg-amber-100 px-10'><p className='text-black text-center text-nowrap' onClick={jumpbyfive}>jump by 5</p></button>
        </div>
      </div>

    </div>
  )
}

export default App