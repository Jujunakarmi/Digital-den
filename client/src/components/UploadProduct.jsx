import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import productCategory from '../helper/productCategory';


const UploadProduct = (
    {onClose}
) => {
    const[data, setData] = useState({
        productName: "",
        brandName : "",
        category: "",
        productImage: "",
        description: "",
        price: "",
        selling: "",
    })
    const handleOnchange = (e) => {

    }
  return (
    <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-200 bg-opacity-50'>
        <div className='bg-white p-4 rounded-md w-full h-full max-w-2xl max-h-[80%]'>

            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Upload Product</h2>

                <div className='w-fit ml-auto text-xl hover:text-yellow-300 cursor-pointer' 
             onClick={onClose}
                >
                <IoClose />
                </div>
            </div>

            <form className='grid p-4 gap-2'>
                <label htmlFor='productName'>Product Name :</label>
                <input 
                type="text" 
                id="productName"
                placeholder='Enter Product Name' 
                name='productName'
                value={data.productName} 
                onChange={handleOnchange}
                className='p-2 bg-slate-100 border rounded'
                />
                
                <label htmlFor='brandName' className='mt-2'>Brand Name :</label>
                <input 
                type="text" 
                id="brandName"
                placeholder='Enter Brand Name' 
                name='brandName'
                value={data.brandName} 
                onChange={handleOnchange}
                className='p-2 bg-slate-100 border rounded'
                />

                <label htmlFor='category' className='mt-2'>Category :</label>
                <select value={data.category}
                 className='p-2 bg-slate-100 border rounded'>
                    {
                        productCategory.map((el,index) => {
                            return (
                                <option key={el.value+index} value={el.value}>{el.label}</option>
                            )
                        })
                    }

                </select>

                <label htmlFor='productImage' className='mt-2'>Product Image :</label>


            </form>
     
        </div>

    </div>
  )
}

export default UploadProduct
