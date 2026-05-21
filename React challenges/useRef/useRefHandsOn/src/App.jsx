import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-gray-500'>

      <Navbar />
      <div className='w-full h-full flex flex-col items-center justify-center'>

        <div className="timmer w-1/2 h-1/2 bg-gray-400 rounded-2xl relative flex items-center justify-center">

          <div className='absolute left-1/2 -translate-x-1/2 -top-7 bg-amber-50 w-1/3  py-14 shadow text-center rounded-3xl'>
           <span className=' text-6xl'>3</span> 
          </div>
         <div className="btn flex  gap-11.5 absolute top-54">


         <button className=' start p-3 bg-gray-700   rounded-3xl text-2xl  bottom-1 text-white uppercase'>start</button>
        <button className='stop p-3 bg-gray-700 text-2xl  rounded-3xl bottom-1 text-white uppercase'>stop</button>
         <button className=' restart p-3 bg-gray-700 text-2xl rounded-3xl  bottom-1 text-white uppercase'>Restart</button>
         </div>
         
        </div>

      </div>

    </div>
  )
}

export default App
