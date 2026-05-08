import React from 'react'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Navbar from './Navbar/Navbar'

const Page1 = (props) => {
  return (
    
       <div className='flex flex-col h-screen w-full px-4 overflow-hidden'>
        <Navbar/>
    <div className='flex-1 flex items-center justify-center gap-7 pb-4'>
        <Section1 />
        <Section2 users={props.users}/>
    </div>
      


    </div>
  )
}

export default Page1