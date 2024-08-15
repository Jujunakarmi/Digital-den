import React from 'react'
import role from '../utils/role'
import { IoClose } from "react-icons/io5";

const ChangeUserRole = () => {
    return (
        <div className='fixed top-0 bottom -0 left-0 right -0 w-full h-full z-10 flex justify-between items-center'>
            <div className=' mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                <button className='block ml-auto'>
                    <IoClose/>
                </button>

                <h1 className='pb-4 text-lg font-semibold'>Change User Role</h1>
               
                <p>Name: Ram</p>
                <p>Email: ram@gmail.com</p>
           
                <div className='flex items-center justify-between my-4'>
                <p>Role:</p>
              
                     <select className='border px-4'>
                        {Object.values(role).map((el, index) => {
                            return (
                                <option key={index}>
                                    {el}
                                </option>
                            )
                        })}

                    </select> 

                </div>

                <button className='w-fit mx-auto block border px-3 rounded-full bg-yellow-300 '>Change Role</button>

            </div>

        </div>
    )
}

export default ChangeUserRole
