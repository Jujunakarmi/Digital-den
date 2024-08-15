import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { getAllUsers } from '../utils/API';
import { toast } from 'react-hot-toast';
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

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
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
        allUsers.map((el, index) =>  {
          return (
            <tr key={el._id}>
              <td>{index+1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.role}</td>
              <td>{moment(el?.createdAt).format('ll')}</td>
              <td >
                <button>
                <MdEdit className='text-2xl bg-green-200  p-1 rounded-full hover:bg-green-600 hover:text-white'  />

                </button>
                </td>
            </tr>
          )
        })
       } 
        </tbody>
      </table>
      <ChangeUserRole />
    </div>
  )
}

export default AllUsers
