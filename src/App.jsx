import { useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
const [data, setdata] = useState([]);
const getData= async()=>{
 const response= await axios.get("https://picsum.photos/v2/list?page=2&limit=20");
  console.log(response.data);

  setdata(response);
}

  return (
 <div className='bg-black h-screen'>
     response.map(function (elem,indx) {
      <div className='bg-amber-50'>hello</div>
     })
    
    <button onClick={getData}  className='py-2 px-3 bg-amber-200'>click here</button>
 </div>
  )
}

export default App
