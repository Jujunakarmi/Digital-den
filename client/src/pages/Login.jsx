import React,{ useContext, useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import userIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { signIn } from '../utils/API';
import toast from "react-hot-toast"
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate() 
  const fetchUserDetails = useContext(Context)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
    }
    })
  }
  console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signIn(data)
    const user = await response.json();

    if(user){
      toast.success("Login Successful")

      navigate("/")
      fetchUserDetails()
    }else{
      toast.error("Login Failed")
    }
  }

  return (
    <section id="login">
      <div className='container mx-auto p-4 mt-20'>

        <div className='bg-white p-5 w-full max-w-md mx-auto rounded-md'>
          <div className='mx-auto h-20 w-20'>
            <img src={userIcon} alt="userlogo"></img>
          </div>

          <form className='grid' onSubmit={handleSubmit}>
            <div>
              <label>Email: </label>
              <div >
                <input
                  type="email"
                  placeholder='Enter Email'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-slate-200 p-2' />


                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>

                  {showPassword ? (<FaEyeSlash />) : (<FaEye />)}

                </div>
              </div>
              <Link to="/forgot-password" className='block w-fit ml-auto hover:text-blue-400'>Forgot Password ?</Link>
            </div>

            <button type="submit" className='bg-yellow-400 mt-5 px-6 py-2 w-full max-w-[150px] rounded-md hover:scale-110 transition-all mx-auto'>Login</button>

          </form>
          <p className='mx-20 my-5'>Dont' have an account? <Link to="/sign-up" className="hover:underline text-blue-400">Sign up</Link></p>


        </div>

      </div>

    </section>
  )
}

export default Login


// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import userIcon from '../assets/signin.gif';
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
//   console.log(data)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   };

 //  return (
//     <section id="login">
//       <div className='container mx-auto p-4 mt-20'>
//         <div className='bg-white p-5 w-full max-w-md mx-auto rounded-md'>
//           <div className='mx-auto h-20 w-20'>
//             <img src={userIcon} alt="userlogo" />
//           </div>
//           <form className='grid' onSubmit={handleSubmit}>
//             <div>
//               <label>Email: </label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder='Enter Email'
//                   name='email'
//                   value={data.email}
//                   onChange={handleOnChange}
//                   className='w-full h-8 outline-none bg-slate-200 p-2'
//                   aria-label="Email"
//                 />
//               </div>
//             </div>
//             <div>
//               <label>Password: </label>
//               <div className='bg-slate-200 flex'>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder='Enter your password'
//                   name="password"
//                   value={data.password}
//                   onChange={handleOnChange}
//                   className='w-full h-full outline-none bg-slate-200 p-2'
//                   aria-label="Password"
//                 />
//                 <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </div>
//               </div>
//               <Link to="/forgot-password" className='block w-fit ml-auto hover:text-blue-400'>Forgot Password?</Link>
//             </div>
//             <button
//               type="submit"
//               className='bg-yellow-400 mt-5 px-6 py-2 w-full max-w-[150px] rounded-md hover:scale-110 transition-all mx-auto'
//             >
//               Login
//             </button>
//           </form>
//           <p className='mx-20 my-5'>
//             Don't have an account? <Link to="/sign-up" className="hover:underline text-blue-400">Sign up</Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;
