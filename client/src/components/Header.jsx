import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../utils/API";
import { setUserDetails } from "../store/userSlice";




const Header = () => {
  const user = useSelector((state) => state?.user.user)
  const dispatch = useDispatch()

  const [menuDisplay, setMenuDisplay] = useState(false)

  // console.log("user-header", user)

  const handleLogout = async () => {
    const dataApi = await userLogout();

    const dataResponse = await dataApi.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message)
      dispatch(setUserDetails(null))
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }
  }
  return (
    <header className="h-16 shadow-md bg-white">
      <div className=" h-full flex items-center px-5 container mx-auto justify-between">
        <div>
          <Link to="/">
            DigitalDen
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm  ">
          <input type="text" placeholder="  Search products" className="w-full h-8 rounded-2xl outline-none pl-2 focus-within:shadow-md" />
          <div className="bg-yellow-300 rounded-2xl hover:text-white cursor-pointer">
            <IoMdSearch size="1.5em" /></div>
        </div>

        <div className="flex items-center gap-7 cursor-pointer">

          <div className="relative  flex justify-center " onClick={() => setMenuDisplay(prev => !prev)}>

            <div>
              {
                user?.profilePic ? (
                  <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
                ) :
                  (
                    <FaRegUserCircle size="2em" />
                  )
              }
            </div>

            {
              menuDisplay && (
                <div className="absolute bg-white top-11 bottom-0 h-fit p-1 shadow-lg rounnded">

                  {<nav>
                    <Link className=" hidden whitespace-nowrap  md:block hover:bg-slate-100 p-2" to={"admin-panel"}>Admin Panel</Link>
                  </nav>}

                </div>
              )
            }

          </div>


          <div className="relative">
            <span><TiShoppingCart size="2em" /></span>
            <div>
              <p className="text-sm bg-yellow-300 text-black w-5 flex items-center justify-center rounded-full absolute top-6 left-6">0</p>
            </div>

          </div>
          {
            user?._id ? (
              <button onClick={handleLogout} className="bg-yellow-300 px-5 py-1 rounded-3xl hover:text-white" >Logout</button>
            ) :
              (
                <Link to="login">
                  <button className="bg-yellow-300 px-5 py-1 rounded-3xl hover:text-white">Login</button></Link>
              )
          }


        </div>
      </div>
    </header>


  )
}

export default Header
