import React from 'react'

const Cards = ({elem}) => {
  return (
        
       
<a  href={elem.url}>
                    <div>
                        <div>
                            <img src={elem.download_url} alt="" className='w-70 h-70 object-cover rounded-2xl' />
                            <div>{elem.author}</div>
                        </div>
                    </div>
                </a>

   

        

      
  )
}

export default Cards