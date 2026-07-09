import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Dropdown from "./Dropdown"; 
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BottomHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 
                    flex justify-evenly items-center py-2 
                    sm:flex md:hidden lg:hidden z-50">

  <div className="relative">
    <button 
      className="flex flex-col items-center text-gray-600 hover:text-black"
      onClick={() => setIsOpen(!isOpen)}
    >
      <i className="fa-solid fa-bars text-lg"></i>
      <span className="text-xs font-bold">Category</span>
    </button>

    {/* Reuse dropdown */}
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} position="bottom" />
  </div>


      <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-black">
        <i className="fa-solid fa-house"></i>
        <span className="text-xs">Home</span>
      </Link>

      <Link to="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-black">
        <i className="fa-solid fa-heart"></i>
        <span className="text-xs">Wishlist</span>
      </Link>

      <Link to="/fashion" className="flex flex-col items-center text-gray-600 hover:text-black">
        <i className="fa-solid fa-box"></i>
        <span className="text-xs">Fashion</span>
      </Link>

      <Link to="/muahmuah" className="flex flex-col items-center text-gray-600 hover:text-black">
        <i className="fa-solid fa-store"></i>
        <span className="text-xs">#MUAHMUAH</span>
      </Link>

     
    </div>
  );
}
export default BottomHeader;