import React, { useState } from 'react'
import './Head.css'
import { NavLink } from "react-router-dom";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col justify-between items-center fixed top-0 left-0 right-0 w-full py-3 shadow-md bg-white z-10">
      <div className="flex flex-row justify-between items-center">
        <div  className="relative max-w-xs w-120">
        <i className="fa-brands fa-sistrix absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-base"></i>
        <input  className="w-full pl-10 pr-3 py-2 border border-none bg-gray-100 rounded-sm focus:outline-none text-base text-gray-600 " type="text" placeholder="Search..."></input>
      </div>
      <div className="flex justify-center ml-60 mr-90 bg-blue">
      <svg width="130" height="22" viewBox="0 0 120 22" fill="none" xmlns="http://www.w3.org/2000/svg"><title></title><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5781 16.0439C27.5783 16.8813 28.2743 17.5596 29.1318 17.5596H31.792C32.6506 17.5596 33.3465 16.8813 33.3467 16.0439H33.3447V0.361328H38.4785V16.3877C38.4785 19.3493 36.018 21.7498 32.9814 21.75H27.9424C24.9058 21.7499 22.4443 19.3494 22.4443 16.3877V0.361328H27.5781V16.0439ZM50.2842 0C53.3209 6.34093e-05 55.7822 2.40057 55.7822 5.3623V6.93359H50.6484V5.64844C50.6484 4.81094 49.9524 4.13281 49.0947 4.13281H47.6387C46.78 4.13281 46.084 4.81194 46.084 5.64844V5.97266C46.0841 6.93418 47.4044 7.4675 47.9707 7.76367L51.7969 9.69141C53.4856 10.5399 56.1641 11.7922 56.1641 15.4004V16.3848C56.1641 19.3464 53.7026 21.7469 50.666 21.7471H46.2012C43.1644 21.7471 40.7031 19.3465 40.7031 16.3848V14.3359H45.8369V16.041C45.8372 16.8782 46.5332 17.5565 47.3906 17.5566H49.4766C50.3351 17.5566 51.031 16.8783 51.0312 16.042V15.5527C51.0312 14.4881 49.7152 13.9194 48.7939 13.4521L44.6426 11.3418C43.354 10.6284 40.9503 9.27961 40.9502 6.25195V5.3623C40.9502 2.40053 43.4115 0 46.4482 0H50.2842ZM94.3252 0C97.3619 5.00837e-05 99.8232 2.40056 99.8232 5.3623V6.93359H94.6895V5.64844C94.6895 4.81094 93.9934 4.13281 93.1357 4.13281H91.6797C90.821 4.13281 90.125 4.81194 90.125 5.64844V5.97266C90.1251 6.93418 91.4454 7.4675 92.0117 7.76367L95.8379 9.69141C97.5266 10.5399 100.205 11.7922 100.205 15.4004V16.3848C100.205 19.3464 97.7437 21.7469 94.707 21.7471H90.2422C87.2054 21.7471 84.7441 19.3465 84.7441 16.3848V14.3359H89.8779V16.041C89.8782 16.8782 90.5743 17.5565 91.4316 17.5566H93.5176C94.3761 17.5566 95.072 16.8783 95.0723 16.042V15.5527C95.0723 14.4883 93.7572 13.9194 92.8359 13.4521L88.6836 11.3418C87.394 10.6284 84.9913 9.27961 84.9912 6.25195V5.3623C84.9912 2.40053 87.4525 0 90.4893 0H94.3252ZM63.5215 21.3906H58.3877V0.361328H63.5215V21.3906ZM9.77344 10.6973H9.8877L12.7422 0.361328H19.6621V21.3896H14.8604V7.8877H14.7275L12.1543 16.7637H7.50781L4.93359 7.8877H4.80078V21.3896H0V0.361328H6.91992L9.77344 10.6973ZM77.6904 12.9082H77.8105V0.361328H82.5215V21.3896H77.4785L71.167 8.84375H71.0156V21.3896H66.3057V0.361328H71.3789L77.6904 12.9082ZM113.376 0.360352L119.416 21.3896H114.101L113.236 17.9434H107.114L106.249 21.3896H100.934L106.974 0.360352H113.376ZM110.115 5.98535L108.164 13.7617H112.188L110.236 5.98535H110.115Z" fill="#0A0F18"></path></svg>
    </div>

    <div  className="flex item-center gap-4 text-black">
      <div className="text-xl">
        <i className="fa-solid fa-globe"></i>
        <span className="ml-2">Korea</span>
      </div>

      <div  className="text-xl">
        <i className="fa-regular fa-heart"></i>
      </div>
      <div  className="text-xl">
        <i class="fa-brands fa-opencart"></i>
      </div>
      <div  className="text-xl">
        <i className="fa-regular fa-user"></i>
      </div>
    </div>
      </div>
      

<nav className=" flex items-center px-3 py-3 ml-70 justify-start w-full">
       <ul className="flex items-end gap-8 text-sm font-bold justify-start">

<div>
   <li className=" relative flex flex-row gap-3 items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-lg font-normal"></i>
           <h2>CATEGORY</h2>
        </li>
</div>
       
       
        <li>
        <div className="flex flex-col items-center ">
        <NavLink 
          to="/home" 
          className={({ isActive }) =>
           isActive ? "underline": "hover:underline"
         }>HOME</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
          <span className="text-[#4EB0D4] text-xs  font-bold">MUSINSA EDITION</span>
          <NavLink to="/muahmuah"  className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>#MUAHMUAH</NavLink>
        </div>
       </li>

       <li>
         <div className="flex flex-col items-center">
          <span className="text-[12px] text-black font-[500] flex items-center">30% OFF</span>
         <NavLink to="/members" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>NEW MEMBERS</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
        <NavLink to="/fashion" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>FASHION</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
         <NavLink to="/beauty" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>BEAUTY</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
         <NavLink to="/new" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>NEW</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
          <span className="text-[12px] text-red-600 font-[500] flex items-center">EXTRA 25% OFF</span>
        <NavLink to="/musinsa" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>MUSINSA STANDARD</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
         <NavLink to="/sale" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>SALE</NavLink>
        </div>
       </li>

       <li>
        <div className="flex flex-col items-center">
          <NavLink to="/snap" className={({ isActive }) =>
           isActive ? "underline" : "hover:underline"
         }>SNAP</NavLink>
        </div>
       </li>

       </ul>

{isOpen && (
  <div className="absolute left-0 top-25 bg-white shadow-md mt-2 p-4 w-full border-t border-gray-300">
    <ul className="flex flex-row gap-15 text-xs px-32 py-6">
      <div className="flex flex-col gap-4 ">
      <h2 className="font-bold text-sm">CLOTHING</h2>
      <li><Link to="/shirts" className="text-gray-700">Top</Link></li>
      <li><Link to="/shirts" className="text-gray-700">outerwear</Link></li>
      <li><Link to="/pants" className="text-gray-700">pants</Link></li>
      <li><Link to="/pants" className="text-gray-700">Dress & Skirts</Link></li>
      <li><Link to="/shirts" className="text-gray-700">Short sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700">long-sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700">Sweatshirts</Link></li>
      <li><Link to="/hoodies" className="text-gray-700">hoodie jackets</Link></li>
      <li><Link to="/pants" className="text-gray-700">Jeans</Link></li>
      <li><Link to="/shirts" className="text-gray-700">Shirts & Blouse</Link></li>
      <li><Link to="/pants" className="text-gray-700">Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">BAGS</h2>
      <li><Link to="/bags" className="text-gray-700">Shoulder Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700">Bagpacks</Link></li>
      <li><Link to="/bags" className="text-gray-700">Canvas bags</Link></li>
      <li><Link to="/bags" className="text-gray-700">Totes</Link></li>
      <li><Link to="/bags" className="text-gray-700">Travel Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700">Belt Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700">Wallet cases</Link></li>
      <li><Link to="/bags"className="text-gray-700">Pouches</Link></li>
      <li><Link to="/bags" className="text-gray-700">Sport Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700">Clutches</Link></li>
      <li><Link to="/bags" className="text-gray-700">Bags Accessories</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">ACCESSORIES</h2>
      <li><Link to="/accessories" className="text-gray-700">Belt</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Caps & Bags</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Keyring & Key cases</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Fashion Accessories</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Necklace & pendants</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Earring</Link></li>
      <li><Link to="/accessories"className="text-gray-700">Bracelets</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Rings</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Glasses</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Tech & Life</Link></li>
      <li><Link to="/accessories" className="text-gray-700">Pets</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">SHOES</h2>
      <li><Link to="/shoes" className="text-gray-700">Sneakers</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Loafers</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Boots</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Scandals</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Heels and pumps</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Flat</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Flip Flops</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Sport shoes</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Shirts & Blouse</Link></li>
      <li><Link to="/shoes" className="text-gray-700">Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">ACTIVE</h2>
      <li><Link to="/shirts" className="text-gray-700">Sport Tops</Link></li>
      <li><Link to="/pants" className="text-gray-700">Sport pants</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sports outerwear</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sport Skirts</Link></li>
      <li><Link to="/bags" className="text-gray-700">Sport Bags</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sports Gears</Link></li>
      <li><Link to="/sports"  className="text-gray-700">Sports Goods</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sports cloth</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sports Dress</Link></li>
      <li><Link to="/sports" className="text-gray-700">Sport Hat</Link></li>
      <li><Link to="/sports" className="text-gray-700"></Link>Sport</li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">BEAUTY</h2>
      <li><Link to="/beauty" className="text-gray-700">Skincare</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Facial Mask</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Bae makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Eye makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Haircare</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Cleanser</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Body care</Link></li>
      <li><Link to="/beauty" className="text-gray-700">Beauty Devices & Tools</Link></li>
      </div>
      
    </ul>
  </div>
)}

    </nav>
    </header>
    
  )
}

export default Header
