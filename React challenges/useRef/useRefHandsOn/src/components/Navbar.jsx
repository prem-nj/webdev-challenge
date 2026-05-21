import React from 'react'

const Navbar = () => {
  return (
 <div className='w-full bg-black h-1/13 relative py-4 '>
       <ul className='flex text-white uppercase gap-15 absolute bottom-0.5  ml-10'>
<li > <a href="/home">Home</a></li>
<li><a href="/contact">contact</a></li>
<li><a href="/about">about</a></li>
<li><a href="/info">INFO</a></li>

       </ul>

      </div>
  )
}

export default Navbar