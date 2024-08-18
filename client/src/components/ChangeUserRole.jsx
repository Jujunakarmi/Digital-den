
// import React, { useState } from 'react';
// import { IoClose } from "react-icons/io5";
// import { toast } from 'react-hot-toast';

// const ChangeUserRole = ({
//     name,
//     email,
//     role,
//     onClose,
//     userId,
//     callfunction
// }) => {
//     const [userRole, setUserRole] = useState(role);
//     const [loading, setLoading] = useState(false);

//     const handleOnChangeSelect = (e) => {   
//         setUserRole(e.target.value);
//     };

//     const updateUserRole = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('http://localhost:3001/api/update-user', {
//                 method: 'POST',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ userId, role: userRole })
//             });

//             const responseData = await response.json();
//             if (responseData.success) {   
//                 toast.success(responseData.message);
//                 onClose();
//                 callfunction();
//             } else {
//                 toast.error(responseData.message || 'Failed to update role');
//             }
//         } catch (error) {
//             toast.error('An error occurred while updating the role');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50'>
//             <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
//                 <button className='block ml-auto' onClick={onClose}>
//                     <IoClose />
//                 </button>

//                 <h1 className='pb-4 text-lg font-semibold'>Change User Role</h1>
//                 <p>Name: {name}</p>
//                 <p>Email: {email}</p>

//                 <div className='flex items-center justify-between my-4'>
//                     <p>Role:</p>
//                     <select className='border px-4' value={userRole} onChange={handleOnChangeSelect}>
//                         <option value="Admin">Admin</option>
//                         <option value="General">General</option>
//                     </select>
//                 </div>

//                 <button 
//                     className='w-fit mx-auto block border px-3 py-1 rounded-full bg-yellow-300 hover:bg-yellow-400' 
//                     onClick={updateUserRole}
//                     disabled={loading}
//                 >
//                     {loading ? 'Changing...' : 'Change Role'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChangeUserRole;


import React, { useState } from 'react'
import roles from '../utils/roles'
import { IoClose } from "react-icons/io5";
import { updateUser } from '../utils/API';
import { toast } from 'react-hot-toast';

const ChangeUserRole = ({
    name,
    email,
    role,
    onClose,
    userId,
    callfunction
}) => {

    const[userRole, setUserRole]= useState(role);

    const handleOnChangeSelect = (e) => {   
       setUserRole(e.target.value)
       console.log(e.target.value)
    }

    const updateUserRole = async () => {

        const updateUser =() => {
            return fetch('http://localhost:3001/api//update-user', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({userId, role:userRole})
            });
            };

            const responseData = await updateUser();
            const response = await responseData.json();
            if(response.success){   
                toast.success(response.message)
                onClose()
                callfunction()
            }
       
    }

    return (
        <div className='fixed top-0 bottom -0 left-0 right -0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
            <div className=' mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                <button className='block ml-auto' onClick={onClose}>
                    <IoClose/>
                </button>

                <h1 className='pb-4 text-lg font-semibold'>Change User Role</h1>
               
                <p>Name: {name}</p>
                <p>Email: {email}</p>
           
                <div className='flex items-center justify-between my-4'>
                <p>Role:</p>
              
                     <select className='border px-4' value={userRole} onChange={handleOnChangeSelect}>
                        {Object.values(roles).map((el, index) => {
                            return (
                                <option key={index}>
                                    {el}
                                </option>
                            )
                        })}

                    </select> 

                </div>

                <button className='w-fit mx-auto block border px-3 py-1 rounded-full bg-yellow-300 hover:bg-yellow-400' onClick={updateUserRole}>Change Role</button>

            </div>

        </div>
    )
}

export default ChangeUserRole