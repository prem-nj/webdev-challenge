import React from 'react'

const Button = ({moved,setdata,setmove}) => {
  return (
   

 <div className='flex justify-center items-center gap-6 mt-12'>
                <button
                    className='p-4 bg-yellow-600 text-amber-50 rounded-2xl text-xl'
                    onClick={() => {
                        setmove(moved - 1)
                        setdata([])
                    }}
                >
                    Prev
                </button>

                <button
                    className='p-4 bg-yellow-600 text-amber-50 text-xl rounded-2xl'
                    onClick={() => {
                        setmove(moved + 1)
                        setdata([])
                    }}
                >
                    Next
                </button>
            </div>


  )
}

export default Button