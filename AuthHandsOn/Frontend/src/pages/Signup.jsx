import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
        <div className='w-[90%] max-w-[500px] h-[600px] bg-[#3F3F3F] rounded-2xl
        flex flex-col justify-center items-center 
        
        '>
            <h1 className='text-white text-3xl uppercase font-semibold'> sign up</h1>
<div className='w-[150px] h-[150px] relative mt-8 rounded-full bg-amber-100 flex justify-center items-center overflow-hidden '>
<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" srcset=""  className='object-cover w-[100%] h-[100%]'/>

<div className='w-[100%] h-[100%] bg-black absolute top-0 opacity-0 hover:opacity-30'></div>

</div>

        <form action="" method="post" className='w-[100%] flex flex-col items-center justify-center' >
        <div className='flex flex-col mt-3  mb-4 justify-center items-center gap-[30px] text-amber-50'>
       <input type="text" placeholder='username' className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>
       
        <input type="text" placeholder='Email' className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>       
       
        <input type="text" placeholder='Password' className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>
       
       


         </div>


        </form>

        </div>

        
        </div>
  )
}

export default Signup