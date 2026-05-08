import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Navbar from './components/Navbar/Navbar'
import Page2 from './components/page2/page2'

const App = () => {
  return (

    <div className='h-screen w-screen px-4'>
        <Navbar/>
    <div className='flex items-center justify-center gap-7 h-full '>
        <Section1/>
        <Section2 />
    </div>
      <Page2/>
    </div>
  )
}

export default App
