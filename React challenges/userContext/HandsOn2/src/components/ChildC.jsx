import React from 'react'
import { useContext } from 'react'
import { Usercontext } from '../App'

const ChildC = () => {
  const { Theme,setTheme } = useContext(Usercontext);

  function toggleClick(){
    if (Theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div  className='w-full h-full flex justify-center items-center'  >
<button className='uppercase bg-black p-4 text-amber-50' onClick={toggleClick}>
  change Theme
  
  </button>

    </div>
  )
}

export default ChildC