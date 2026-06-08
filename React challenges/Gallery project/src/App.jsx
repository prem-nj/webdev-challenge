

import { useState, useEffect } from 'react'
import Cards from './Components/Cards'
import Button from './Components/Button'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setdata] = useState([])
  const [move, setmove] = useState(1)

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${move}&limit=30`
    )
    setdata(response.data)
  }

  useEffect(() => {
    getdata()
  }, [move])

  let PrintuserData = (
    <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Loading...
    </h3>
  )

  if (data.length > 0) {
    PrintuserData = data.map((elem) => (
      <Cards elem={elem} />
    ))
  }

  return (
    <div className='h-screen w-screen bg-black text-white overflow-auto'>
      <div className='flex flex-wrap justify-center items-center gap-3'>
        {PrintuserData}
      </div>

      <Button
        moved={move}
        setmove={setmove}
        setdata={setdata}
      />
    </div>
  )
}

export default App