import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


function Navbar() {
  return (
    <div className='navbar h-20 bg-[#333]'>
      <div className="navbar-content-wrapper w-[90%] mx-auto flex items-center justify-between pt-5">
        <div className="navbar-location flex items-center gap-2">
          <FaLocationDot size={18} />

          <h2 className='text-md'>London, United Kingdom</h2>
        </div>
        <input

          type='text' id='search-city' className='w-1/2 p-2 rounded-full bg-transparent border-2 border-white py-2 px-4 inline-block !outline-none ' />
        <div className='flex'>
          <button>
            <MdOutlineDarkMode size={20} />
            <MdOutlineLightMode size={20} />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar