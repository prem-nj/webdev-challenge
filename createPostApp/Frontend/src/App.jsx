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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  )
}

export default App
