import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../utils/API';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const response = await getAllUsers();
    const allUsersData = await response.json();

    if (allUsersData.success) {
      setAllUsers(allUsersData.data)
    }

    if (allUsersData.error) {
      toast.error(allUsersData.message)
    }

  }


  useEffect(() => {
    fetchAllUsers()
  }, []);

  return (
    <div>
      <table className='user-table w-full'>
        <thead>
          <tr>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
       {
        allUsers.map((el, index) =>  {
          return (
            <tr>
              <td>{index+1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.role}</td>
              <td>{el?.createdAt}</td>
            </tr>
          )
        })
       }
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
