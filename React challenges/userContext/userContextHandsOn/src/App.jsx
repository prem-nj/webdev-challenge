import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const usecontext=createContext();
  return (
   <usecontext.Provider>
     <childA/>
   </usecontext.Provider>
  )
}

export default App
