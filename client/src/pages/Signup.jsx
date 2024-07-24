import React, { useState } from 'react'
import { Link } from "react-router-dom"
import userIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import imageTobase64 from '../helper/imageTobase64'

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
    name:""
  })

  const handleonChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
   }
 console.log(data)

  const handlePic = async (e) => {
    const file = e.target.files[0]
    console.log("file", file)

    const imagePic = await imageTobase64(file)
    console.log(imagePic)
    setData ((prev) =>{
      return{
        ...prev,
        profilePic:imagePic
      }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section id="signup">
      <div className='container mx-auto p-4 mt-20'>

        <div className='bg-white p-5 w-full max-w-md mx-auto rounded-md'>
          <div className='mx-auto h-20 w-20 relative overflow-hidden rounded-full'>
            <div>
              <img src={data.profilePic || userIcon} alt="userlogo"></img>
            </div>
            <form>
              <label>
                <div className='text-xs font-bold bg-slate-100 bg-opacity-55 text-center pb-4 pt- pr-2 absolute bottom-0 left-1 w-full cursor-pointer'>
                  Upload Pic

                </div>
                <input type="file" hidden onChange={handlePic} />
              </label>

            </form>

          </div>

          <form className='grid' onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <div>
              <input
                type="text"
                placeholder='Enter your name'
                name='name'
                value= {data.name}
                onChange={handleonChange}
                required
                className='w-full h-8 outline-none bg-slate-200 p-2' />
                
            </div>
          </div>



         
            <div>
              <label>Email: </label>
              <div >
                <input
                  type="email"
                  placeholder='Enter Email'
                  name='email'
                  value= {data.email}
                  onChange={handleonChange}
                  required
                  className='w-full h-8 outline-none bg-slate-200 p-2' />

              </div>
            </div>

            <div >
              <label>Password: </label>
              <div className='bg-slate-200 flex'>
                <input type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  name="password"
                   value={data.password}
                  onChange={handleonChange}
                  required
                  className='w-full h-full outline-none bg-slate-200 p-2'/>

         
                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>

                  {showPassword ? (<FaEyeSlash />) : (<FaEye />)}

                </div>
              </div>
            </div>

            <div >
              <label>Confirm Password: </label>
              <div className='bg-slate-200 flex'>
                <input type={showConfirmPassword ? "text" : "password"}
                  placeholder='Enter your confirm password'
                  name="confirmPassword"
                   value={data.confirmPassword}
                  onChange={handleonChange}
                  required
                  className='w-full h-full outline-none bg-slate-200 p-2' />

          
                <div className='cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>

                  {showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)}

                </div>
              </div>

            </div>

            <button type="submit" className='bg-yellow-400 mt-5 px-6 py-2 w-full max-w-[150px] rounded-md hover:scale-110 transition-all mx-auto'>Signup</button>

          </form>
          <p className='mx-20 my-5'>Already have an account? <Link to="/login" className="hover:underline text-blue-400">Login</Link></p>


        </div>

      </div>

    </section>
  )
}

export default Signup