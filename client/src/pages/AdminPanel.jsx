import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux'

const AdminPanel = () => {
    const user = useSelector((state) => state?.user.user)
  return (
    <div className='min-h-[calc(100vh-120px)] flex'>
     <aside className='bg-white min-h-full w-full max-w-60'>
      <div>

      <div className='flex items-center justify-center'>
              {
                user?.profilePic ? (
                  <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
                ) :
                  (
                    <FaRegUserCircle size="2em" />
                  )
              }
            </div>
      </div>
        </aside>

        <main>
main
        </main>
    </div>
  )
}

export default AdminPanel
