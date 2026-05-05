import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
   
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" srcset="" />
          <div id='mark'>
          <button id='savebtn'><p>save</p> <Bookmark size={16}/></button>

          </div>
        </div>
        <div className="center">
          <div className='tag'>
          <h3>{props.company}<span> {props.datePosted} </span></h3>

          <h2>Senior UI/UX developer</h2>
          </div>
          <div id='info'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          

          <button>Apply Now</button>
          
        </div>
      
      
     
     </div>
  )
}

export default Card