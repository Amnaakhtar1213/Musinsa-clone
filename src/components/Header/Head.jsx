import React, { useState, useEffect } from 'react'
import './Head.css'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Header = ({ favoriteCount, cart, user, wishlist, setUser }) => {
const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState("Korea");
  const [langOpen, setLangOpen] = useState(false);

  const languages = ["Korea", "Japanese", "Chinese", "English", 
    ]

    useEffect(() => {
      const savedLang = localStorage.getItem("language");
      if(savedLang) setLanguage(savedLang)
    }, [])

    useEffect(() => {
      localStorage.setItem("language", language)
    }, [language])

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if(savedUser) SetUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    if(user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const handleSignout = () => {
    setUser(null)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.trim() !== ""){
      navigate(`/search?query=${searchTerm}`)
    }
  }

  return (
     <header className="fixed top-0 left-0 bg-white z-50 w-full px-4 sm:px-6 md:px-12 lg:px-30 py-3">
      <div className="grid grid-cols-3 items-center w-full px-4">
        <div  className="relative w-full max-w-md">
        <button
        type="button"
        onClick={() => setShowSearch(!showSearch)}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-base"
      >
        <i className="fa-brands fa-sistrix"></i>
      </button>

{(showSearch || window.innerWidth >= 1024) && (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-3 py-2 border-none bg-gray-100 rounded-sm focus:outline-none text-base text-gray-600"
      />
    </form>
  )}

      </div>

      <div className="flex justify-center flex-shrink-0 mx-4 sm:justify-center md:justify-center lg:justify-center lg:mr-18">
      <svg width="130" height="22" viewBox="0 0 120 22" fill="none" xmlns="http://www.w3.org/2000/svg"><title></title><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5781 16.0439C27.5783 16.8813 28.2743 17.5596 29.1318 17.5596H31.792C32.6506 17.5596 33.3465 16.8813 33.3467 16.0439H33.3447V0.361328H38.4785V16.3877C38.4785 19.3493 36.018 21.7498 32.9814 21.75H27.9424C24.9058 21.7499 22.4443 19.3494 22.4443 16.3877V0.361328H27.5781V16.0439ZM50.2842 0C53.3209 6.34093e-05 55.7822 2.40057 55.7822 5.3623V6.93359H50.6484V5.64844C50.6484 4.81094 49.9524 4.13281 49.0947 4.13281H47.6387C46.78 4.13281 46.084 4.81194 46.084 5.64844V5.97266C46.0841 6.93418 47.4044 7.4675 47.9707 7.76367L51.7969 9.69141C53.4856 10.5399 56.1641 11.7922 56.1641 15.4004V16.3848C56.1641 19.3464 53.7026 21.7469 50.666 21.7471H46.2012C43.1644 21.7471 40.7031 19.3465 40.7031 16.3848V14.3359H45.8369V16.041C45.8372 16.8782 46.5332 17.5565 47.3906 17.5566H49.4766C50.3351 17.5566 51.031 16.8783 51.0312 16.042V15.5527C51.0312 14.4881 49.7152 13.9194 48.7939 13.4521L44.6426 11.3418C43.354 10.6284 40.9503 9.27961 40.9502 6.25195V5.3623C40.9502 2.40053 43.4115 0 46.4482 0H50.2842ZM94.3252 0C97.3619 5.00837e-05 99.8232 2.40056 99.8232 5.3623V6.93359H94.6895V5.64844C94.6895 4.81094 93.9934 4.13281 93.1357 4.13281H91.6797C90.821 4.13281 90.125 4.81194 90.125 5.64844V5.97266C90.1251 6.93418 91.4454 7.4675 92.0117 7.76367L95.8379 9.69141C97.5266 10.5399 100.205 11.7922 100.205 15.4004V16.3848C100.205 19.3464 97.7437 21.7469 94.707 21.7471H90.2422C87.2054 21.7471 84.7441 19.3465 84.7441 16.3848V14.3359H89.8779V16.041C89.8782 16.8782 90.5743 17.5565 91.4316 17.5566H93.5176C94.3761 17.5566 95.072 16.8783 95.0723 16.042V15.5527C95.0723 14.4883 93.7572 13.9194 92.8359 13.4521L88.6836 11.3418C87.394 10.6284 84.9913 9.27961 84.9912 6.25195V5.3623C84.9912 2.40053 87.4525 0 90.4893 0H94.3252ZM63.5215 21.3906H58.3877V0.361328H63.5215V21.3906ZM9.77344 10.6973H9.8877L12.7422 0.361328H19.6621V21.3896H14.8604V7.8877H14.7275L12.1543 16.7637H7.50781L4.93359 7.8877H4.80078V21.3896H0V0.361328H6.91992L9.77344 10.6973ZM77.6904 12.9082H77.8105V0.361328H82.5215V21.3896H77.4785L71.167 8.84375H71.0156V21.3896H66.3057V0.361328H71.3789L77.6904 12.9082ZM113.376 0.360352L119.416 21.3896H114.101L113.236 17.9434H107.114L106.249 21.3896H100.934L106.974 0.360352H113.376ZM110.115 5.98535L108.164 13.7617H112.188L110.236 5.98535H110.115Z" fill="#0A0F18"></path></svg>
    </div>

    <div  className="flex justify-end gap-4 items-center text-black text-xl">
     <div className="relative">
            <div
              className="hidden lg:block"
              onClick={() => setLangOpen(!langOpen)}
            >
              <i className="fa-solid fa-globe"></i>
              <span className="ml-2">{language}</span>
              <i className="fa-solid fa-chevron-down ml-1 text-sm"></i>
            </div>
            {langOpen && (
              <ul className="absolute mt-2 bg-white border rounded shadow-lg w-32">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setLangOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

      <div  className=" relative">
        <Link to="/wishlist">
         <i className="fa-regular fa-heart"></i>
        {favoriteCount > 0 && (
        <span className="absolute -top-0.3 -right-1 bg-red-600 rounded-full w-1 h-1">
        </span>
        )}
        </Link>
      </div>

      <div  className="relative">
        <Link to="/cart">
          <i className="fa-brands fa-opencart"></i>
        {cart.length > 0 && (
          <span className="absolute -bottom-1 -right-2 bg-black text-white text-xs rounded-full h-4.5 w-4.5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
        </Link>
      </div>

      
<div className="hidden lg:block">
  <div
    className="cursor-pointer"
    onClick={() => setIsUserOpen(!isUserOpen)}
  >
    <i className="fa-regular fa-user"></i>
  </div>

{isUserOpen && (
  <div className="absolute top-16 right-0 mt-0 w-70 bg-white shadow-lg rounded p-4 z-50">
    {!user ? (
      // SIGN IN BUTTON
      <button
        onClick={() => {
          setUser({ name: "Amna", email: "amnabinterasheed@gmail.com" });
          // keep dropdown open so it switches immediately
        }}
        className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded"
      >
        Sign in with Gmail
      </button>
    ) : (
      <>
       <div className="border-b pb-3 mb-3">
          <p className="font-semibold text-gray-500">{user.name}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        {/* Menu Options */}
        <ul className="space-y-2 text-gray-700">
          <li className="hover:bg-gray-100 flex items-center gap-2 px-3 py-2 rounded cursor-pointer">
            <i className="fa-regular fa-id-card"></i>
            My Profile
          </li>
            <Link to="/cart">
    <li className="hover:bg-gray-100 flex items-center gap-2 px-3 py-2 rounded cursor-pointer">
      <i className="fa-solid fa-box"></i>
      Orders
    </li>
  </Link>
          <Link to="/wishlist">
    <li className="hover:bg-gray-100 flex items-center gap-2 px-3 py-2 rounded cursor-pointer">
      <i className="fa-regular fa-heart"></i>
      Wishlist
    </li>
  </Link>
          <li className="hover:bg-gray-100 flex items-center gap-2 px-3 py-2 rounded cursor-pointer">
             <i className="fa-solid fa-gear"></i> Settings
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-3 border-gray-200" />

        {/* SIGN OUT BUTTON */}
        <button
          onClick={() => {
            setUser(null);
            setIsUserOpen(false); // close after sign out
          }}
          className="w-full text-left py-2 px-3 hover:bg-gray-100 text-red-600 rounded"
        >
          Sign out
        </button>
      </>
    )}
  </div>
)}
</div>
    </div>
      </div>
      

<nav className="w-full py-5 flex items-center gap-8">

<div className="md:text-gray-600 md:text-lg flex flex-col items-center justify-end h-12">

   <button className=" flex flex-row gap-3 mt-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-lg font-normal"></i>
           <h2 className="text-sm font-bold">CATEGORY</h2>
        </button>
</div>

  <ul className="hidden md:flex items-center lg:gap-12 md:gap-6 md:text-[15px] md:font-normal lg:font-bold">

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>HOME</NavLink>
        </div>
       </li>
       

       <li className="flex flex-col items-center justify-end h-12">
        <div className="flex flex-col items-center space-y-1 md:text-gray-600">
          <span className="text-[#308bac] text-[10px] md:text-sm md:font-semibold">MUSINSA EDITION</span>
          <NavLink to="/muahmuah"  className={({ isActive }) =>
           isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>#MUAHMUAH</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
         <div className="flex flex-col items-center md:text-gray-600">
          <span className="block text-[12px] text-red-600 font-[500] md:text-sm">30% OFF</span>
         <NavLink to="/members" className={({ isActive }) =>
           isActive  ? "text-black underline whitespace-nowrap" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline whitespace-nowrap"
         }>NEW MEMBERS</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
        <NavLink to="/fashion" className={({ isActive }) =>
           isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>FASHION</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
         <NavLink to="/beauty" className={({ isActive }) =>
           isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>BEAUTY</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
         <NavLink to="/new" className={({ isActive }) =>
          isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>NEW</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="flex flex-col items-center md:text-gray-600">
          <span className="text-[12px] text-red-600 font-[500] flex items-center">EXTRA 25% OFF</span>
        <NavLink to="/musinsa" className={({ isActive }) =>
           isActive  ? "text-black underline whitespace-nowrap" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline whitespace-nowrap"
         }>MUSINSA STANDARD</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
         <NavLink to="/sale" className={({ isActive }) =>
           isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>SALE</NavLink>
        </div>
       </li>

       <li className="flex flex-col items-center justify-end h-12">
        <div className="md:text-gray-600">
          <NavLink to="/snap" className={({ isActive }) =>
            isActive  ? "text-black underline" // active: black text + underline
      : "text-gray-600 hover:text-black hover:underline"
         }>SNAP</NavLink>
        </div>
       </li>

       </ul>

{isOpen && (
  <div  style={{ transitionDelay: "500ms" }}
  className={`md:fixed md:inset-x-0 md:top-30 lg:absolute lg:left-0 lg:top-30
              bg-white shadow-md border-t border-gray-300
              transition-transform transition-opacity duration-300 ease-in-out
              w-full
              md:h-screen sm:h-screen max-h-screen overflow-y-auto
              ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}

>
    <ul className="flex flex-col lg:flex-row text-sm px-20 md:flex-row md:gap-12 gap-15 py-10 sm:px-20 lg:px-45 overflow-y-auto h-full">
      <div className="flex flex-col gap-4 ">
      <h2 className="font-bold text-sm">CLOTHING</h2>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >Top</Link></li>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >outerwear</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >pants</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >Dress & Skirts</Link></li>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >Short sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >long-sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >Sweatshirts</Link></li>
      <li><Link to="/hoodies" className="text-gray-700" onClick={() => setIsOpen(false)} >hoodie jackets</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >Jeans</Link></li>
      <li><Link to="/shirts" className="text-gray-700" onClick={() => setIsOpen(false)} >Shirts & Blouse</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">BAGS</h2>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Shoulder Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Bagpacks</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Canvas bags</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Totes</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Travel Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Belt Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Wallet cases</Link></li>
      <li><Link to="/bags"className="text-gray-700" onClick={() => setIsOpen(false)} >Pouches</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Clutches</Link></li>
      <li><Link to="/bags" className="text-gray-700" onClick={() => setIsOpen(false)} >Bags Accessories</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">ACCESSORIES</h2>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Belt</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Caps & Bags</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Keyring & Key cases</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Fashion Accessories</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Necklace & pendants</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Earring</Link></li>
      <li><Link to="/accessories"className="text-gray-700" onClick={() => setIsOpen(false)} >Bracelets</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Rings</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Glasses</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Tech & Life</Link></li>
      <li><Link to="/accessories" className="text-gray-700" onClick={() => setIsOpen(false)} >Pets</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">SHOES</h2>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Sneakers</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Loafers</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Boots</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Scandals</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Heels and pumps</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Flat</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Flip Flops</Link></li>
      <li><Link to="/shoes" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport shoes</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">ACTIVE</h2>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport Tops</Link></li>
      <li><Link to="/pants" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport pants</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sports outerwear</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport Skirts</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport Bags</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sports Gears</Link></li>
      <li><Link to="/sports"  className="text-gray-700" onClick={() => setIsOpen(false)} >Sports Goods</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sports cloth</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sports Dress</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} >Sport Hat</Link></li>
      <li><Link to="/sports" className="text-gray-700" onClick={() => setIsOpen(false)} ></Link>Sport</li>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-sm">BEAUTY</h2>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Skincare</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Facial Mask</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Bae makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Eye makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Haircare</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Cleanser</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Body care</Link></li>
      <li><Link to="/beauty" className="text-gray-700" onClick={() => setIsOpen(false)} >Beauty Devices & Tools</Link></li>
      </div>
      
    </ul>
  </div>
)}

    </nav>
    </header>
    
  )
}

export default Header