import React from 'react';
import { MdModeEdit } from "react-icons/md";


const AdminProductCard = ({
  data
}) => {
  return (

    <div className='bg-white p-4 rounded'>
      <img src={data?.productImage[0]} height={100} width={100} />
      <h1>{data.productName}</h1>

      <div className='w-fit ml-auto p-1 bg-green-200  hover:bg-green-600 rounded-full hover:text-white cursor-pointer'>
        <MdModeEdit />
      </div>


    </div>


  )
}

export default AdminProductCard

