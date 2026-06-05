import React from 'react'
import "./Hero.css"
import img1 from "../../assets/line1/u-1.webp";
import img2 from "../../assets/line1/u-2.webp";
import img3 from "../../assets/line1/u-3.webp";
import img4 from "../../assets/line1/u-4.webp";
import img5 from "../../assets/line1/u-5.webp";
import img6 from "../../assets/line1/u-6.webp";
import img7 from "../../assets/line1/u-7.webp";
import img8 from "../../assets/line1/u-8.webp";
import img9 from "../../assets/line1/u-9.webp";
import img10 from "../../assets/line1/u-10.webp";
import img11 from "../../assets/line1/u-11.webp";
import img12 from "../../assets/line1/u-12.webp";
import img13 from "../../assets/line1/u-13.webp";
import img14 from "../../assets/line1/s-1.webp";
import img15 from "../../assets/line1/s-2.webp";
import img16 from "../../assets/line1/m-6.webp";
import img17 from "../../assets/line1/m-7.webp";
import img18 from "../../assets/line1/m-8.webp";
import img19 from "../../assets/line1/s-3.jpg";
import img20 from "../../assets/line1/m-10.webp";
import img21 from "../../assets/line1/sti-9.png";
import img22 from "../../assets/line1/h-1.jpg";
import img23 from "../../assets/line1/h-2.jpg";
import img24 from "../../assets/line1/h-3.jpg";
import img25 from "../../assets/line1/h-4.jpg";
import img26 from "../../assets/line1/b-2.jpg";
import img27 from "../../assets/hero/a-1.webp";
import img28 from "../../assets/hero/a-2.webp";
import img29 from "../../assets/hero/a-3.webp";
import img30 from "../../assets/hero/a-4.webp";
import img31 from "../../assets/hero/a-5.webp";
import img32 from "../../assets/hero/a-6.webp";
import img33 from "../../assets/line2/d-1.webp";
import img34 from "../../assets/line2/d-2.webp";
import img35 from "../../assets/line2/d-3.webp";
import img36 from "../../assets/line2/d-4.webp";
import img37 from "../../assets/line3/e-1.webp";
import img38 from "../../assets/line3/e-2.webp";
import img39 from "../../assets/line3/e-3.webp";
import img40 from "../../assets/line3/e-4.webp";
import img41 from "../../assets/line3/e-5.webp";
import img42 from "../../assets/line3/e-6.webp";
import img43 from "../../assets/line4/f-1.webp";
import img44 from "../../assets/line4/f-2.webp";
import img45 from "../../assets/line4/f-3.jpg";
import img46 from "../../assets/line4/g-1.webp";
import img47 from "../../assets/line4/g-2.webp";
import img48 from "../../assets/line4/g-3.webp";
import img49 from "../../assets/line4/g-4.webp";
import img50 from "../../assets/line4/g-5.webp";
import img51 from "../../assets/line4/g-6.webp";
import img52 from "../../assets/line4/g-7.webp";

const Hero = () => {
   return (
    <div>
      <div className="flex items-center justify-center h-10 bg-gray-100 mt-35">
        <p>Start shopping on our APP and get 15% OFF | WLCMAPP</p>
      </div>

<div className="mx-30">
  <div className="flex justify-center gap-4 mt-4">
        {/* <img src={img1} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img2} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img3} alt="img-1" className="w-1/4 h-auto"></img>
         <img src={img4} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img5} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img6} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img7} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img8} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img9} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img10} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img11} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img12} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img13} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img14} alt="img-1" className="w-1/4 h-auto"></img>
        <img src={img15} alt="img-1" className="w-1/4 h-auto"></img> */}
       <div className="relative w-[420px] ">
         <img src={img16} alt="img-1" className="w-full h-auto" />
          <p className="absolute bottom-0 left-0 right-0  text-white text-xl tracking-wide font-[600] italic text-center py-10">
           STYLING "SEOUL STYLE, DELIVERED"
          </p>
        </div>
        
       <div className="relative w-[420px] bg-red-500">
         <img src={img17} alt="img-1" className="w-full h-auto" />
          <p className="absolute bottom-0 left-0 right-0  text-white text-xl tracking-wide font-[600] italic text-center py-10">
           "AMAZING COLLABORATION"<br></br>
           <span className="text-sm font-bold">LIMITED EDITION</span>
          </p>
        </div>
        <div className="relative w-[420px]">
         <img src={img20} alt="img-1" className="w-full h-auto" />
          <p className="absolute bottom-0 left-0 right-0  text-white text-xl tracking-wide font-[600] italic text-center py-10">
           "TRENDING NOW"
          </p>
        </div>

     

      <button  className="absolute left-25 top-1/2 text-gray-600 rounded-full bg-white px-3 py-2 shadow-lg shadow-gray-500/50"><i class=" fa-solid fa-chevron-left"></i></button>
      <button  className="absolute right-25 top-1/2 text-gray-600 rounded-full bg-white px-3 py-2 text-xl font-bold shadow-lg shadow-gray-500/50"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
</div>
      
<div className=" mx-40 mt-5 flex flex-row gap-4 justify-center items-center">
  <a href="#" className="relative">
    
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 absolute bottom-1 text-xs left-5 tracking-tighter">EXCLUSIVE BEAUTY</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-1 text-xs absolute bottom-1 left-12 tracking-tighter">GRAVER</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-6 tracking-tighter">TRENDING BAGS</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-8 tracking-tighter ">SEASON SALE</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-8 tracking-tighter">MUAHMUAH</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-3 tracking-tighter">SUMMER ESSIANTIALS</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-12 tracking-tighter">GRAVER</span>
  </a>
   <a href="#" className="relative">
    <img src={img21} alt="GRAVER" className="w-[180px] h-auto mx-auto" />
    <span className="mt-2 text-xs absolute bottom-1 left-3 tracking-tighter">MUSINSA STANDARD</span>
  </a>
</div>

<div className=" flex flex-row gap-3 mx-30 justify-center item-center mt-8">
  <div className=" flex flex-row items-center border border-gray-300 rounded-md p-2 width-[200px] h-[50px]">
  <a href="#" className="flex flex-row items-center ">
    <img src={img22} alt="brand" className="w-[40px] h-auto" />
    <span className="text-sm text-center">Best 20 brands</span>
  </a>
</div>
 <div className="flex flex-row items-center border border-gray-300 rounded-md p-2 width-[200px] h-[50px]">
  <a href="#" className="flex flex-row items-center">
    <img src={img23} alt="brand" className="w-[40px] h-auto" />
    <span className="text-sm text-center">up to 70% OFF</span>
  </a>
</div>
 <div className="flex flex-row items-center border border-gray-300 rounded-md p-2 width-[200px] h-[50px]">
  <a href="#" className="flex flex-row items-center ">
    <img src="https://image.msscdn.net/global/images/2026/06/04/557cbdcbb2bf4c378918a847504a6d6e.png" alt="Daily Check-in" className="w-[40px] h-auto"></img>
    <span className="text-sm text-center">Daily check-in</span>
  </a>
</div>
 <div className="flex flex-row items-center border border-gray-300 rounded-md p-2 width-[200px] h-[50px]">
  <a href="#" className="flex flex-row items-center ">
   <img src={img24} alt="brand" className="w-[40px] h-auto" />
    <span className="text-sm text-center">K-celeb picks</span>
  </a>
</div>
 <div className="flex flex-row items-center border border-gray-300 rounded-md p-2 width-[200px] h-[50px]">
  <a href="#" className="flex flex-row items-center ">
    <img src={img25} alt="brand" className="w-[40px] h-auto" />
    <span className="text-sm text-center">view all sales</span>
  </a>
</div>

</div>

<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>24H ONLY: EXTRA 30% OFF </h2>
</div>

<div className="mx-30 mt-10  bg-gray-100 p-4 text-center">
  <span>End in: <strong>01:30:20</strong></span>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img27} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-1  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Denim pants with back side cross</p>
        <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$12</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img28} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Summer half-sleeves yellow shirt</p>
         <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img29} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Denim cap with adjustable strap [blue]</p>
          <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img30} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Grese letter printing on plan black shirt</p>
         <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img31} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Grese letter slim t-shirt best summer outfit</p>
          <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$22</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img32} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Women slim T-shirt best for summers (5 colors)</p>
          <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$15</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>Short-sleeve Weekly #1: Up to 75% OFF</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img33} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-1  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Weekly Deals</span>
          <i className="fa-regular fa-heart text-gray-200 font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">ESCAPEFROM</strong>
        <p className="text-sm text-gray-900">Start denim escf logo college print slim fit</p>
        <span className="text-black-800 font-bold">75% OFF</span>
          <span className="text-lg font-bold text-red-600">$24</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img34} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Weekly Deals</span>
          <i className="fa-regular fa-heart text-gray-200 font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">MAISON MINED</strong>
        <p className="text-sm text-gray-900">Dooodle heart half t white greyish blue</p>
         <span className="text-black-800 font-bold">75% OFF</span>
          <span className="text-lg font-bold text-red-600">$32</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img35} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Weekly Deals</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">ESCAPEFROM</strong>
        <p className="text-sm text-gray-900">Stawberry dot edcf logo collage print oversize</p>
          <span className="text-black-800 font-bold">70% OFF</span>
          <span className="text-lg font-bold text-red-600">$26</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img36} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Weekly Deals</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">VENHIT</strong>
        <p className="text-sm text-gray-900">Mrt vivid slim short sleeve summer season t shirt </p>
         <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$17</span>
      </div>
    </li>
   </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>5 Days Only: Extra 20% off Selected Items</h2>
</div>

<div className="mx-30 mt-10  bg-gray-100 p-4 text-center">
  <span>End in: <strong>52:30:20</strong></span>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img37} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-1  flex justify-between items-center px-2">
          <span className=" bg-black text-yellow-500">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Real Wide Hidden Banding Slacks [Black]</p>
        <span className="text-black-800 font-bold">30% OFF</span>
          <span className="text-lg font-bold text-red-600">$27</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img38} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Weekly Deals</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">BAUF</strong>
        <p className="text-sm text-gray-900">3 Logo Dot Slim Fit T-shirt [Red]</p>
         <span className="text-black-800 font-bold">19% OFF</span>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img39} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 20% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">ILLUMINATE</strong>
        <p className="text-sm text-gray-900">Damage Washed Denim Pants Medium Blue</p>
          <span className="text-black-800 font-bold">25% OFF</span>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img40} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 20% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">BAUF</strong>
        <p className="text-sm text-gray-900">Grese letter printing on plan black shirt</p>
         <span className="text-black-800 font-bold">25% OFF</span>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img41} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 20% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold"></strong>
        <p className="text-sm text-gray-900">B Logo Dot Slim Fit T-shirt</p>
          <span className="text-black-800 font-bold">20% OFF</span>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img42} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-bold">COVERNET</strong>
        <p className="text-sm text-gray-900">gray's slim fit t-shirt sleeve half</p>
          <span className="text-black-800 font-bold">35% OFF</span>
          <span className="text-lg font-bold text-red-600">$24</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD: Weekly Special</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div>
        <img src={img43} alt="SCALLYWANG"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-sm text-gray-900">Cool Later and Sun Shade</p>
        <span className="text-normal">MUSINSA STARDARD WOMEN</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img45} alt="SCALLYWANG"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-sm text-gray-900">The Packable Collection</p>
        <span className="text-normal">MUSINSA STANDARD</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img44} alt="SCALLYWANG"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-sm text-gray-900">Extra 30% off Best Seller</p>
          <span className="text-normal">MUSINSA STANDARD WOMEN</span>
      </div>
    </li>
  </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD WOMEN: TOP SELLERS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15">
    <li >
      <div className="relative">
        <img src={img47} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-1  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Slim Crew Neck T-Shirt(5 colors)</p>
        <span className="text-black-800 font-bold">23% OFF</span>
          <span className="text-lg font-bold text-red-600">$13</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className=" bg-black text-white">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women Cotton curved Pants (3 color)</p>
         <span className="text-black-800 font-bold">10% OFF</span>
          <span className="text-lg font-bold text-red-600">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img50} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women Wide Cargo Pants[black]</p>
          <span className="text-black-800 font-bold">29% OFF</span>
          <span className="text-lg font-bold text-red-600">$33</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img51} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Ribbed slim scoop neck layered jersey</p>
         <span className="text-black-800 font-bold">40% OFF</span>
          <span className="text-lg font-bold text-red-600">$18</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img52} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Polka Long sleeves t-shirt</p>
          <span className="text-black-800 font-bold">20% OFF</span>
          <span className="text-lg font-bold text-red-600">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img46} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-0  flex justify-between items-center px-2">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">Extra 30% OFF</span>
          <i className="fa-regular fa-heart text-white font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women low rise Flare Slacks [Black]</p>
          <span className="text-black-800 font-bold">25% OFF</span>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 
    </div>
  )
}

export default Hero
