import React from 'react'
import Page2 from './components/page2/page2'
import Page1 from './components/Page1/Page1'

const App = () => {
  const users=[
    {image:'https://i.pinimg.com/736x/0f/94/3d/0f943dd6eeba91b71f7268a44ef1622f.jpg',
    intro:'"We transform complex challenges into streamlined solutions that drive measurable growth. By leveraging data-driven strategies and industry expertise, we help businesses scale efficiently. Partner with us to unlock your organization’s full potential and achieve sustainable success.',
    tag:'statisfied'}
    
    ,{image:'https://i.pinimg.com/736x/a2/cc/c6/a2ccc67eb78984bb406d5fbf55920e09.jpg',
    intro:'"Innovation isn’t just about new ideas; it’s about making them real. We blend creative vision with cutting-edge technology to build experiences that captivate and inspire. Join us as we redefine the digital landscape, one bold step at a time."',
    tag:'underserved'}  
    
   ,{image:'https://i.pinimg.com/736x/df/7a/4c/df7a4c9dadb9ee468a785e78c52c4161.jpg',
    intro:'Hi,I believe that great work starts with a clear vision and a passion for detail. Whether you’re looking to elevate your brand or streamline your workflow, I’m here to guide you through every step of the journey with clarity and confidence."',
    tag:'underbaned'}
    
    ,
    {image:'https://i.pinimg.com/736x/ca/8c/c4/ca8cc4c6dfdeacca6821bfdca9e27a62.jpg',
    intro:'Hi,I believe that great work starts with a clear vision and a passion for detail. Whether you’re looking to elevate your brand or streamline your workflow, I’m here to guide you through every step of the journey with clarity and confidence."',
    tag:'underbaned'}
  ]
  return (

    <div className='min-h-screen w-full overflow-x-hidden'>
      <Page1 users={users}/>
      <Page2/>

      
      </div>
  )
}

export default App
