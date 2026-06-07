import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [datainfo, setdata] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log(response.data)
      setdata(response.data)
    } catch (error) {
      // console.error(error)
    }
  }


  return (
    <div>

      <div className="btn">
        <button onClick={getData}>Get Data</button>
      </div>
      
     { datainfo.map(function(indx,elem){

      return   <div>hello {indx} </div>
      })
    }
      
      </div>
  )
}

export default App
