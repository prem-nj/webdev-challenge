import { useState ,createContext} from 'react'
import './App.css'
import ChildA from './components/ChildA';


const Usercontext=createContext()

function App() {
const [Theme, setTheme] = useState("light");
  return (

   <Usercontext.Provider value={{Theme,setTheme}}>
    <div className='w-screen  h-screen bg-gray-600 border-2 flex justify-center items-center'>

   <div className='  w-1/2 h-1/2  border-2 rounded-2xl flex justify-center items-center  '  style={{backgroundColor:Theme=="light"?"pink":"green"}}>

   <ChildA/>
   </div>

    </div>
   
   </Usercontext.Provider>

  )
}

export default App
export {Usercontext}
