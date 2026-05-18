import { createContext, useContext, useState } from 'react'

import ChildA from './components/ChildA'
import './App.css'

const usercontext=createContext();
function App() {
const [user, setuser] = useState({username:"prem",age:34})
  return (
   <usercontext.Provider value={user}>
     <ChildA/>
   </usercontext.Provider>
  )
}

export default App
export {usercontext}