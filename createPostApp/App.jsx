import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";




function App() {
  const [count, setCount] = useState(0)



  return (
    <>
 <div className="flex gap-5 text-xl uppercase items-center p-4 bg-gray-20">
  <Link to="/" className="font-semibold hover:text-blue-500">
    New Post
  </Link>

  <Link to="/feed" className="font-semibold hover:text-blue-500">
    Feed
  </Link>
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  )
}

export default App
