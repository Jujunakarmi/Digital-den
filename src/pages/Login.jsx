import {useState} from 'react'
import userIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";

const Login = () => {
  const[showPassword, setShowPassword] =useState(false)

    return (
        <section id="login">
            <div className='container mx-auto p-4'>

                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto rounded-md'>
                    <div className='mx-auto h-20 w-20'>
                        <img src={userIcon}  alt="userlogo"></img>
                    </div>

                  <form className='grid'>
                    <div>
                    <label>Email: </label>
                    <div >
                    <input type ="text" placeholder='Enter Email' className='w-full h-8 outline-none bg-slate-200 p-2'></input>
                    </div>
                    </div>

                    <div >
                    <label>Password: </label>
                    <div className='bg-slate-200 flex'>
                    <input type ="password" placeholder='Enter your password'className='w-full h-full outline-none bg-slate-200 p-2'></input>
                    <div className='cursor-pointer'>
                    <FaEye />
                        
                    </div>
                    </div>
                    </div>
                  
                    <button>Login</button>
                    
                  </form>


                </div>

            </div>

        </section>
    )
}

export default Login
