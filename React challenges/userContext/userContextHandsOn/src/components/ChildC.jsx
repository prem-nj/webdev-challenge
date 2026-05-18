import React, { useContext } from 'react'
import { usercontext } from '../App'

const ChildC = () => {

const user = useContext(usercontext)

  return (
    <div className='text-2xl w-full h-1/2 bg-amber-200 flex items-center justify-center'>
      <h2>

      hello i am childC the name is {user.username} and age is {user.age}
      </h2>
      
      
      </div>
  )
}

export default ChildC