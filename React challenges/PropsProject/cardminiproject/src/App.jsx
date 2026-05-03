import { useState } from 'react'
import {Bookmark} from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" alt="" srcset="" />
          <div id='mark'>
          <button id='savebtn'><p>save</p> <Bookmark size={16}/></button>

          </div>
        </div>
        <div className="center">
          <div className='tag'>
          <h3>Amazon <span> 5 days ago </span></h3>

          <h2>Senior UI/UX developer</h2>
          </div>
          <div id='info'>
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$13/hr</h3>
            <p>Mumbai ,India</p>
          </div>
          

          <button>Apply Now</button>
          
        </div>
      </div>  
      
     
     </div>
    </>
  )
}

export default App
