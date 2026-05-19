import React from 'react'
import { useParams } from 'react-router-dom'

const UserId = () => {
  const parms = useParams();
  return (
    <div>UserId is {parms.id}</div>
  )
}

export default UserId