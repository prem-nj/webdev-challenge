import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <div className='bg-gray-400 w-screen h-screen flex items-center justify-center'>
      <div className='w-full max-w-md p-8 bg-gray-100 text-black flex flex-col items-center justify-center rounded-2xl shadow-xl'>

        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 w-full'>

          {/* Name Field */}
          <div className='flex gap-4 items-center'>
            <label htmlFor="firstName" className='font-medium text-sm w-24 text-right'>Name :</label>
            <div className="relative flex-1">
              <input
                id="firstName"
                {...register("firstName", { required: "Name is required" })}
                className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 caret-amber-500 w-full'
                placeholder="Enter your name"
              />
              {errors.firstName && <span className="absolute -bottom-5 left-0 text-red-500 text-xs">{errors.firstName.message}</span>}
            </div>
          </div>

          {/* Age Field */}
          <div className='flex gap-4 items-center'>
            <label htmlFor="age" className='font-medium text-sm whitespace-nowrap w-24 text-right'>Age :</label>
            <div className="relative flex-1">
              <input
                id="age"
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 1, message: "Age must be at least 1" },
                  valueAsNumber: true
                })}
                className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-24'
                placeholder="Age"
              />
              {errors.age && <span className="absolute -bottom-5 left-0 text-red-500 text-xs">{errors.age.message}</span>}
            </div>
          </div>

          {/* Password Field */}
          <div className='flex gap-4 items-center'>
            <label htmlFor="password" className='font-medium text-sm w-24 text-right'>Password :</label>
            <div className="relative flex-1">
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full'
                placeholder="Enter password"
              />
              {errors.password && <span className="absolute -bottom-5 left-0 text-red-500 text-xs">{errors.password.message}</span>}
            </div>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting..." : "Submit"}
            className={`submitbutton mt-2 p-2 text-white font-bold rounded transition duration-200 w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 cursor-pointer'}`}
          />
        </form>

      </div>
    </div>
  )
}

export default App