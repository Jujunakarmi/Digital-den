import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import productCategory from '../helper/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helper/uploadImage';
import DisplayImage from './DisplayImage';
import { uploadProduct } from '../utils/API';
import { toast } from 'react-hot-toast';


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
        sellingPrice: "",

    })

    const [openFullScreenImage, setOpenFullScreenImage] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState("")

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
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
    };

    const handleDeleteProductImage = async (index) => {
        // console.log("index", index)

        const newProductImage = [...data.productImage]
        newProductImage.splice(index, 1)

        setData((prev) => {
            return {
                ...prev,
                productImage: [...newProductImage]
            }
        })
    };

    {/* Upload Product */ }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("data", data)

        const dataApi = await uploadProduct(data)
        const response = await dataApi.json();
        
        if(response.success){
            toast.success(response.message)
            onClose()
        }
        if(response.error){
            toast.error(response.message)
        }
        
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

                <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-20' onSubmit={handleSubmit}>
                    <label htmlFor='productName'>Product Name :</label>
                    <input
                        type="text"
                        id="productName"
                        placeholder='Enter Product Name'
                        name='productName'
                        value={data.productName}
                        onChange={handleOnchange}
                        className='p-2 bg-slate-100 border rounded'
                        required
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
                        required
                    />

                    <label htmlFor='category' className='mt-2'>Category :</label>
                    <select value={data.category}
                        name='category'
                        className='p-2 bg-slate-100 border rounded'
                        onChange={handleOnchange}
                        required
                        >
                        <option >Select Category</option>

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
                                                <div className='relative group'>
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

                                                    <div className='absolute right-0 bottom-0 text-sm text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer'
                                                        onClick={() => handleDeleteProductImage(index)}>
                                                        <MdDelete />
                                                    </div>
                                                </div>



                                            )
                                        })
                                    }
                                </div>



                            ) : (
                                <p className='text-red-600 text-xs'>*Please Upload Image</p>
                            )
                        }

                    </div>

                    <label htmlFor='price' className='mt-2'>Price :</label>
                    <input
                        type="number"
                        id="price"
                        placeholder='Enter Price'
                        name='price'
                        value={data.price}
                        onChange={handleOnchange}
                        className='p-2 bg-slate-100 border rounded'
                        required
                    />

                    <label htmlFor='sellingPrice' className='mt-2'>Selling Price :</label>
                    <input
                        type="number"
                        id="sellingPrice"
                        placeholder='Enter Selling Price'
                        name='sellingPrice'
                        value={data.sellingPrice}
                        onChange={handleOnchange}
                        className='p-2 bg-slate-100 border rounded'
                        required
                    />

                    <label htmlFor='description' className='mt-2' >Description :</label>
                    <textarea
                        name='description'
                        value={data.description}
                        className='h-20 bg-slate-100 border resize-none p-1'
                        placeholder='Enter Product Description'
                        rows={3}
                        onChange={handleOnchange}
                        required>

                    </textarea>

                    <button className='px-3 py-2 bg-yellow-300 pb-4 hover:bg-yellow-400'>Upload Product</button>

                </form>

            </div>

            {/**Display full screen image */}

            {
                openFullScreenImage && (
                    <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />

                )
            }


        </div>
    )
}

export default UploadProduct

