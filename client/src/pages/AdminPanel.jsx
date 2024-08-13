import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const AdminPanel = () => {
  const user = useSelector((state) => state?.user.user)
  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
      <aside className='bg-white min-h-full w-full max-w-60 shadow-md'>
        <div className="h-32 flex items-center justify-center flex-col" >

          <div className='flex items-center justify-center'>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className="w-20 h-20 rounded-full" alt={user?.name} />
              ) :
                (
                  <FaRegUserCircle size="3em" />
                )
            }
          </div>
          <p className='capitalize text-lg font-semibold'>{user?.name}</p>
          <p className='text-sm'>{user?.role}</p>
        </div>

        {/* Navbar */}
        <div>
          <nav className='grid p-4'>
            <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-200'>All Users</Link>
            <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-200'>All Products</Link>
          </nav>
        </div>
      </aside>

      <main className='w-full h-full p-2'>
       <Outlet />
      </main>
    </div>
  )
}

export default AdminPanel
