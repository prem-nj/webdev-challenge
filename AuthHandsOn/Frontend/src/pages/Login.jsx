import React, { useContext } from 'react'
import { useState } from 'react'
import { datacontext } from '../../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const {serverUrl} = useContext(datacontext)
   const navigate=useNavigate()
    const [email, setuseremail] = useState("")
    const [password, setpassword] = useState("")
    async function handlelogin(e) {

         e.preventDefault();
     try{
         const data=await axios.post(serverUrl+"/login",
             {email,password},{withCredentials:true}
         )
 
   console.log(data);
 
     }catch(error){
         alert(error.response.data.message)
     }
     }
    return (
        <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
            <div className='w-[90%] max-w-[500px] h-[600px] bg-[#3F3F3F] rounded-2xl
        flex flex-col justify-center items-center 
        
        '>
                <h1 className='text-white text-3xl uppercase font-semibold'>Login</h1>
              
                <form action="" method="post" className='w-[100%] flex flex-col items-center justify-center' onSubmit={handlelogin} >
                    <div className='flex flex-col mt-3  mb-4 justify-center items-center gap-[30px] text-amber-50'>

                        <input type="text" placeholder='Email' value={email} onChange={(e) => { setuseremail(e.target.value) }} className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>

                        <input type="Password" placeholder='Password' required value={password} onChange={(e) => {
                            setpassword(e.target.value)
                        }} className='width-[100%] h-[100%]
       outline-none border-none rounded-lg px-[40px] py-[10px] bg-white text-black'/>




                    </div>

                    <button className=' py-1 px-4 bg-green-200 text-black text-xl mt-4 rounded-2xl uppercase' >login</button>
                </form>
           <p className='mt-4 text-white cursor-pointer ' onClick={()=>{navigate("/signup")}}> want to create a account ? <span className='text-blue-200 ml-3'>sign up</span></p>
            </div>


        </div>
    )
}

export default Login