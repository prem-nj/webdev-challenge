
import React from 'react'
import Card from './card'

const Section2 = (props) => {
  return (
    <div  className=' hero_scrollbar flex gap-5 flex-nowrap overflow-x-auto w-1/2 h-full p-4 mt-4'>
       
       {props.users.map(function(elm,indx){
        return <Card key={indx} image={elm.image} tag={elm.tag} intro={elm.intro} index={indx+1} />
       })}
    
    </div>
  )
}

export default Section2