import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className="relative w-full bg-orange-600 ">
  <div className=" flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <h1 className=' px-4 py-3 font-bold text-white text-lg'>TravelMedia.in</h1>
    </div>
    <div className=" lg:block bg-slate-100  px-5 py-3 rounded-[50px]">
      <ul className="inline-flex  space-x-8">
        <li>
          <NavLink
            to=''
            className={({isActive}) => `${ isActive ? "text-[20px]" : " text-sm"} ${ isActive ? " text-orange-600" : " text-[#ffbe9d]"}  font-semibold hover:text-gray-900 `}
          >
          <IoMdHome/>
          </NavLink>
        </li>

         <li className='flex justify-center items-center'>
          <NavLink
            to='/Notify'
            className={({isActive}) => `${ isActive ? "text-[20px]" : " text-sm"} ${ isActive ? " text-orange-600" : " text-[#ffbe9d]"}  font-semibold hover:text-gray-900`}
          >
        <IoNotifications/>
          </NavLink>
        </li>
 
        <li className='flex justify-center items-center'>
          <NavLink
            to='/Bookmarks'
            className={({isActive}) => `${ isActive ? "text-[20px]" : " text-sm"} ${ isActive ? " text-orange-600" : " text-[#ffbe9d]"}  font-semibold hover:text-gray-900`}
          >
        <FaBookmark/>
          </NavLink>
        </li>
    
        <li className='flex justify-center items-center'>
          <NavLink
            to='/Notify'
            className={({isActive}) => `${ isActive ? "text-[20px]" : " text-sm"} ${ isActive ? " text-orange-600" : " text-[#ffbe9d]"}  font-semibold hover:text-gray-900`}
          >
        <FaUserAlt/>
          </NavLink>
        </li>
      </ul>
    </div>
    
    
  </div>
</div>
  )
}

export default Navbar