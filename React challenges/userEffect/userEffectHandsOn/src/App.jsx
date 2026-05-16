import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({color:"Traffic",val:0})


  
  function redclick(){
    setCount(prev => ({
      color: "RED",
      val: prev.color === "RED" ? prev.val + 1 : 1
    }));
  }  
  function greenclick(){
    setCount(prev => ({
      color: "GREEN",
      val: prev.color === "GREEN" ? prev.val + 1 : 1
    }));
  }  
  function yellowclick(){
    setCount(prev => ({
      color: "YELLOW",
      val: prev.color === "YELLOW" ? prev.val + 1 : 1
    }));
  }


  return (
  
    
    
    <div className='h-screen bg-gray-500 flex flex-col items-center justify-center gap-8'>


    
    
<div className="box  bg-gray-500 flex items-center justify-center">
  <div className='dispaly w-full h-full py-9 px-10  bg-gray-300 rounded-3xl justify-center items-center'>
<div className="signal flex gap-13 items-center justify-center">
   <h3 className='text-3xl text-shadow-white-200 text-center uppercase font-stretch-semi-condensed '>Trafic signal</h3>

   <button className='click bg-black p-2 rounded-2xl     ' onClick={greenclick}>
    
<p className='bg-green-500 p-4 text-white uppercase  rounded-4xl'>Green</p>
    </button> 
    
      <button className='click bg-black p-2 rounded-2xl ' onClick={yellowclick}>
    

<p className='bg-yellow-400 uppercase p-4 rounded-4xl'>YELLOW</p>

    </button>   
    
    <button className='click bg-black p-2 rounded-2xl ' onClick={redclick}>
    
<p className='bg-red-500 p-4  rounded-4xl'>RED</p>
    </button>

</div>
</div>
  </div>
  <div className="main w-70 h-20 bg-gray-400 rounded-4xl text-2xl text-gray-200 text-center  gap-1.5">
    <p className='text-2xl text-black font-bold uppercase '>{count.color} signal</p>
<div className=' main w-70 h-20 bg-gray-600 rounded-4xl text-2x text-center flex justify-center items-center'>
<p className='text-3xl font-extrabold'>{count.val}</p>
</div>
  
  </div>  




    </div>
    

  )
}

export default App
