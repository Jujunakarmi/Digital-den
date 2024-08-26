import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';


const AdminProductCard = ({
  data,
  fetchData
}) => {

  const [editProduct, setEditProduct] = useState(false)

  return (

    <div className='bg-white p-4 rounded ' >
     <div className='w-40'>
     <img src={data?.productImage[0]} height={100} width={150} className='w-fit mx-auto' />
      <h1>{data.productName}</h1>

      <div className='w-fit ml-auto p-1 bg-green-200  hover:bg-green-600 rounded-full hover:text-white cursor-pointer'
        onClick={() => setEditProduct(true)}>
        <MdModeEdit />
      </div>
      </div>


      {
        editProduct && (
          <AdminEditProduct productData={data} onClose={() => setEditProduct(false) }fetchData={fetchData} />
        )
      }

    </div>


  )
}

export default AdminProductCard

