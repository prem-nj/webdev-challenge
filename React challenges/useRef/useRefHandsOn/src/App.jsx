import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Aboutus from './components/Aboutus'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {

  let router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      
      <Home/>
      </div>
  },{
    path:"/info",
    element:
    <div>
      <Navbar/>
      <Info/>
    </div>

  },
  {
    path:"/about",
    element:
    <div>
        <Navbar/>
      <Aboutus/>
    </div>
  }
]);


 
  return (
  <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
