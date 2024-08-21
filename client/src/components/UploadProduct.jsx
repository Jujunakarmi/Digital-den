import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import productCategory from '../helper/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helper/uploadImage';
import DisplayImage from './DisplayImage';


const UploadProduct = (
    { onClose }
) => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        selling: "",

    })
    
    const[openFullScreenImage, setOpenFullScreenImage] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState("")

    const handleOnchange = (e) => {

    }

    const handleUploadProduct = async (e) => {
        const file = e.target.files[0]
        const uploadImageCloudinary = await uploadImage(file)

        setData((prev) => {
            return {
                ...prev,
                productImage: [...prev.productImage, uploadImageCloudinary.url]
            }
        })
        // console.log("upload-image", uploadImageCloudinary.url)

    }
    return (
        <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-200 bg-opacity-50'>
            <div className='bg-white p-4 rounded-md w-full h-full max-w-2xl max-h-[80%] overflow-hidden'>

                <div className='flex justify-between items-center pb-3'>
                    <h2 className='text-xl font-bold '>Upload Product</h2>

                    <div className='w-fit ml-auto text-xl hover:text-yellow-300 cursor-pointer'
                        onClick={onClose}
                    >
                        <IoClose />
                    </div>
                </div>

                <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-20'>
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
                            productCategory.map((el, index) => {
                                return (
                                    <option key={el.value + index} value={el.value}>{el.label}</option>
                                )
                            })
                        }

                    </select>

                    <label htmlFor='productImage' className='mt-2'>Product Image :</label>

                    <label htmlFor='uploadImageInput'>
                        <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>



                            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                                <FaCloudUploadAlt className='text-4xl' />
                                <p className='text-sm'>Upload Product Image</p>
                                <input type="file" id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
                            </div>
                        </div>

                    </label>

                    <div>
                        {
                            data?.productImage[0] ? (
                                <div className='flex items-center gap-2'>
                                    {
                                        data.productImage.map((el, index) => {
                                            return (
                                                <img key={index}
                                                 src={el} 
                                                 alt={el}
                                                 width={80}
                                                  height={80}
                                                   className='bg-slate-100 border'
                                                   onClick={() => {
                                                    setOpenFullScreenImage(true)
                                                    setFullScreenImage(el)
                                                   }}
                                                   />

                                            )
                                        })
                                    }
                                </div>



                            ) : (
                                <p className='text-red-600 text-xs'>*Please Upload Image</p>
                            )
                        }

                    </div>

                    <button className='px-3 py-2 bg-yellow-300 pb-4 hover:bg-yellow-400'>Upload Product</button>

                </form>

            </div>

            {/**Display full screen image */}

            {
                openFullScreenImage && (
                    <DisplayImage onClose ={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />

                )
            }
            

        </div>
    )
}

export default UploadProduct

