import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)

  return (
    <div>
      <div className= 'bg-white px-4 py-2 flex justify-between'>
        <h2 className='text-xl font-bold '>All Products</h2>
        <button 
        className='border-2 border-yellow-300 hover:bg-yellow-300 hover:text-white py-1 px-3 rounded-full transition-all'
        onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/* Product Table */}
      {
        openUploadProduct &&(
          <UploadProduct
            onClose={() => setOpenUploadProduct(false)}
           />
        )
        
      }
 
    </div>
  )
}

export default AllProducts
