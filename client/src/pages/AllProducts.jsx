import React, { useState,useEffect } from 'react'
import UploadProduct from '../components/UploadProduct'
import { getProduct } from '../utils/API'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [displayGetProduct, setDisplayGetProduct] = useState([])

  const fetchGetProduct = async () => {
    const dataApi = await getProduct();
    const response = await dataApi.json();
    setDisplayGetProduct(response?.data || [])
    //  console.log("All-products",response)
}

useEffect(() => {
    fetchGetProduct()
},[])

  return (
    <div>
      <div className= 'bg-white px-4 py-2 flex justify-between'>
        <h2 className='text-xl font-bold '>All Products</h2>
        <button 
        className='border-2 border-yellow-300 hover:bg-yellow-300 hover:text-white py-1 px-3 rounded-full transition-all'
        onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>


{/*All products */}
 <div className='flex flex-wrap gap-5 py-4'>
  {
  displayGetProduct.map((product,index) => {
    return(
      <AdminProductCard data ={product} key={index+"all Product+"} fetchData={fetchGetProduct}/>
  
    )
  })
  }
</div>



      {/* Product Table */}
      {
        openUploadProduct &&(
          <UploadProduct
            onClose={() => setOpenUploadProduct(false) }
            fetchData={fetchGetProduct}
           />
        )
        
      }
 
    </div>

  )
}

export default AllProducts
