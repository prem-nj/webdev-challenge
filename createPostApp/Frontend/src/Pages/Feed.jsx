import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Feed = () => {


  
const [feed, setfeed] = useState([{
 

  // _id: '6a293953621af3fe5dc68f5a',

  // image: 'https://ik.imagekit.io/jaideep/image_RMSlhg6MC.jpg',

  // caption: 'this is created',




}])

useEffect(() => {
    axios.get("http://localhost:3000/post").then((res)=>{
setfeed(res.data.posts)

  })

}, [])


  return (
  	
 <div className='h-screen bg-[#E9E9E9] flex gap-4'>  
 
 {feed.map(function(elem,indx){
return (
 <div key={indx} className='w-[339px] h-[344px]  rounded-2xl  ml-3 mt-4'>
  <div className='flex  flex-col '>

<div><button></button></div>
<img src={elem.image} alt="" className='object-cover' />

 <div className='w-full text-sm text-black  mt-2 rounded-2xl '>
  {elem.caption}
 </div>
  </div>
  
 </div>
)

 })}
 
 
 </div>



  
    )
  
}

export default Feed