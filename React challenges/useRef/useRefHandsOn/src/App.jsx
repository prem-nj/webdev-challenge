import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='w-screen h-screen bg-gray-500'>
      
      <div className='w-full bg-black h-1/13 relative py-4 '>
       <ul className='flex text-white uppercase gap-15 absolute bottom-0.5  ml-10'>
<li > <a href="/home">Home</a></li>
<li><a href="/contact">contact</a>contact us</li>
<li><a href="/about"></a>about</li>
<li><a href="/info"></a>INFO</li>

       </ul>

      </div>

     </div>
  )
}

export default App
