import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)


return (
  
<Routes>
<Route path='/signup' element={<Signup/>}  />
<Route path='/login' element={<Login/>}  />




</Routes>
  )
}

export default App
