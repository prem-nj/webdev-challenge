import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbarbar = () => {
  return (
    <div className=' bg-amber-200  p-4  mb-10'>
      <ul className='flex gap-8'>

        <li> <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""} >HOME</NavLink></li>
        <li> <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} >About</NavLink></li>
        <li> <NavLink to="/Contacts" className={({ isActive }) => isActive ? "active" : ""} >Contacts</NavLink></li>
        <li> <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""} >Dashboard</NavLink></li>

      </ul>


    </div>

  )
}

export default Navbarbar