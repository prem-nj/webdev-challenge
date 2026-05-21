import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='w-full h-20 bg-gray-900 text-white flex items-center justify-between px-10 shadow-lg'>

      {/* Logo */}
      <div className='text-3xl font-bold tracking-wide cursor-pointer'>
        TimerApp
      </div>

      {/* Links */}
      <ul className='flex gap-10 text-lg font-medium'>

        <li className='hover:text-amber-400 cursor-pointer transition duration-300'>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className='hover:text-amber-400 cursor-pointer transition duration-300'>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className='hover:text-amber-400 cursor-pointer transition duration-300'>
          <NavLink to="/info">Info</NavLink>
        </li>

      </ul>

      {/* Button */}
     

    </nav>
  )
}

export default Navbar