import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbarbar = () => {
  return (
    <div className=' bg-amber-200  p-4  mb-10'>
  <ul className='flex gap-8'>

        <li>  <NavLink to="/home"  className='uppercase'>HOME</NavLink></li>
        <li> <NavLink to="/about" className='uppercase'>About</NavLink></li>
        <li> <NavLink to="/Contacts" className='uppercase'>Contacts</NavLink></li>
        <li> <NavLink to="/dashboard" className='uppercase'>Dashboard</NavLink></li>

  </ul>


    </div>
 
  )
}

export default Navbarbar