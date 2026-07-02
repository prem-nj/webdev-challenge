import React, { useContext } from 'react'
import { useState } from 'react'
import { datacontext } from '../../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();
    const {serverUrl} = useContext(datacontext)
    const [username, setusername] = useState("")
    const [email, setuseremail] = useState("")
    const [password, setpassword] = useState("")
    async function handleSignup(e) {

         e.preventDefault();
     try{
         const data=await axios.post(serverUrl+"/signup",
             {username,email,password},{withCredentials:true}
         )
 
   console.log(data);
 
     }catch(error){
         console.log(error.message)
     }
     }
    return (
        <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
            <div className='w-[90%] max-w-[500px] h-[600px] bg-[#3F3F3F] rounded-2xl
        flex flex-col justify-center items-center 
        
        '>
                <h1 className='text-white text-3xl uppercase font-semibold'> sign up</h1>
                <div className='w-[150px] h-[150px] relative mt-8 border-2 border-amber-50 rounded-full bg-amber-100 flex justify-center items-center overflow-hidden '>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className='object-cover w-[100%] h-[100%]' />

                    <div className='w-[100%] h-[100%]  bg-black absolute top-0 opacity-0 text-white font-bold   hover:opacity-30 flex justify-center items-center cursor-pointer'>
                        <span className='text-3xl text-white font-bold'>+</span>
                    </div>
                </div>

                <form action="" method="post" className='w-[100%] flex flex-col items-center justify-center' onSubmit={handleSignup} >
                    <div className='flex flex-col mt-3  mb-4 justify-center items-center gap-[30px] text-amber-50'>
                        <input type="text" placeholder='username' value={username} onChange={(e) => { setusername(e.target.value) }} className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>

                        <input type="text" placeholder='Email' value={email} onChange={(e) => { setuseremail(e.target.value) }} className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>

                        <input type="Password" placeholder='Password' value={password} onChange={(e) => {
                            setpassword(e.target.value)
                        }} className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>




                    </div>

                    <button className=' py-1 px-4 bg-green-200 text-black text-xl mt-4 rounded-2xl uppercase' > sign up</button>
                </form>
                        <p className='mt-4 text-white cursor-pointer ' onClick={()=>{navigate("/login")}}> Already have account ? <span className='text-blue-200 ml-2'>Login</span></p>

            </div>


        </div>
    )
}

export default Signup