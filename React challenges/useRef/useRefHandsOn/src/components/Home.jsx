import React, { useRef, useState } from 'react'
import Navbar from './Navbar';

const Home = () => {
  const [count, setCount] = useState(0);
  const timeref = useRef(null)

  function startcount() {
    timeref.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    if (startref.current) startref.current.style.backgroundColor = 'green'
    if (btnref.current) btnref.current.style.backgroundColor = ''
  }

  function restartcount() {

    clearInterval(timeref.current);
    setCount(0);
    timeref.current = null
    // restore original colors by clearing inline styles so Tailwind classes apply
    if (startref.current) startref.current.style.backgroundColor = ''
    if (btnref.current) btnref.current.style.backgroundColor = ''


  }
  function stopcount() {
    clearInterval(timeref.current);
    timeref.current = null

    if (btnref.current) btnref.current.style.backgroundColor = 'red'
    if (startref.current) startref.current.style.backgroundColor = ''

  }


  let btnref = useRef();
  let startref = useRef();
  return (
    <div className='w-screen h-screen bg-gray-500'>

      <Navbar />

      <div className='w-full h-full flex flex-col items-center justify-center'>

        <div className="timmer w-1/2 h-1/2 bg-gray-400 rounded-2xl relative flex items-center justify-center">

          <div className='absolute left-1/2 -translate-x-1/2 -top-7 bg-amber-50 w-1/3  py-14 shadow text-center rounded-3xl'>
            <span className=' text-6xl'>{count}</span>
          </div>
          <div className="btn flex  gap-11.5 absolute top-54">


            <button className=' start p-3 bg-gray-700   rounded-3xl text-2xl  bottom-1 text-white uppercase ' onClick={startcount} ref={startref}>start</button>
            <button className='stop p-3 bg-gray-700 text-2xl  rounded-3xl bottom-1 text-white uppercase' onClick={stopcount} ref={btnref}>stop</button>
            <button className=' restart p-3 bg-gray-700 text-2xl rounded-3xl  bottom-1 text-white uppercase' onClick={restartcount}>Restart</button>
          </div>

        </div>

      </div>




    </div>

  )
}

export default Home