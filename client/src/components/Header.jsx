import { Link } from "react-router-dom";

import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";




const Header = () => {
  const user =useSelector((state) => state?.user.user)
  console.log("user-header", user)
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
          <div>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
              ):
              (
                <FaRegUserCircle size="2em" />
              )
            }
       
          </div>

          <div className="relative">
            <span><TiShoppingCart size="2em" /></span>
            <div>
              <p className="text-sm bg-yellow-300 text-black w-5 flex items-center justify-center rounded-full absolute top-6 left-6">0</p>
            </div>

          </div>
          <Link to="login">
         <button className="bg-yellow-300 px-5 py-1 rounded-3xl hover:text-white">Login</button></Link>

        </div>
      </div>
    </header>


  )
}

export default Header
