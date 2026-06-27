import React, { useState } from 'react'

import img1 from "../assets/line1/u-1.webp";
import img2 from "../assets/line1/u-2.webp";
import img3 from "../assets/line1/u-3.webp";
import img4 from "../assets/line1/u-4.webp";
import img5 from "../assets/line1/u-5.webp";
import img6 from "../assets/line1/u-6.webp";
import img7 from "../assets/line1/u-7.webp";
import img8 from "../assets/line1/u-8.webp";
import img9 from "../assets/line1/u-9.webp";
import img10 from "../assets/line1/u-10.webp";
import img11 from "../assets/line1/u-11.webp";
import img12 from "../assets/line1/u-12.webp";
import img13 from "../assets/line1/u-13.webp";
import img14 from "../assets/line1/s-1.webp";
import img15 from "../assets/line1/s-2.webp";
import img16 from "../assets/line1/m-6.webp";
import img17 from "../assets/line1/m-7.webp";
import img18 from "../assets/line1/m-8.webp";
import img19 from "../assets/line1/s-3.jpg";
import img20 from "../assets/line1/m-10.webp";
import img21 from "../assets/line1/sti-9.png";
import img22 from "../assets/line1/h-1.jpg";
import img23 from "../assets/line1/h-2.jpg";
import img24 from "../assets/line1/h-3.jpg";
import img25 from "../assets/line1/h-4.jpg";
import img26 from "../assets/line1/b-2.jpg";
import img27 from "../assets/hero/a-1.webp";
import img28 from "../assets/hero/a-2.webp";
import img29 from "../assets/hero/a-3.webp";
import img30 from "../assets/hero/a-6.webp";
import img33 from "../assets/line2/d-1.webp";
import img34 from "../assets/line2/d-2.webp";
import img35 from "../assets/line2/d-3.webp";
import img36 from "../assets/line2/d-4.webp";
import img37 from "../assets/line3/e-1.webp";
import img38 from "../assets/line3/e-2.webp";
import img39 from "../assets/line3/e-3.webp";
import img40 from "../assets/line3/e-4.webp";
import img41 from "../assets/line3/e-5.webp";
import img42 from "../assets/line3/e-6.webp";
import img43 from "../assets/line4/f-1.webp";
import img44 from "../assets/line4/f-2.webp";
import img45 from "../assets/line4/f-3.jpg";
import img46 from "../assets/line4/g-1.webp";
import img47 from "../assets/line4/g-2.webp";
import img48 from "../assets/line4/g-3.webp";
import img49 from "../assets/line4/g-4.webp";
import img50 from "../assets/line4/g-5.webp";
import img51 from "../assets/line4/g-6.webp";
import img52 from "../assets/line4/g-7.webp";
import img53 from "../assets/line5/h-1.webp";
import img54 from "../assets/line5/h-2.webp";
import img55 from "../assets/line5/h-3.webp";
import img56 from "../assets/line5/h-4.webp";
import img57 from "../assets/line5/h-5.webp";
import img58 from "../assets/line5/h-6.webp";
import img59 from "../assets/line5/h-7.webp";
import img60 from "../assets/line5/h-8.webp";
import img61 from "../assets/line5/h-9.webp";
import img62 from "../assets/line5/h-10.webp";
import img63 from "../assets/line5/h-11.webp";
import img64 from "../assets/line5/h-12.webp";
import img65 from "../assets/line6/J-1.webp";
import img66 from "../assets/line6/J-2.webp";
import img67 from "../assets/line6/J-3.webp";
import img68 from "../assets/line6/J-4.webp";
import img69 from "../assets/line6/J-5.webp";
import img70 from "../assets/line6/J-6.webp";
import img71 from "../assets/line6/J-7.webp";
import img72 from "../assets/line6/J-9.webp";
import img73 from "../assets/line6/J-10.webp";
import img74 from "../assets/line7/D-5.webp"
import img75 from "../assets/line7/D-6.webp";
import img76 from "../assets/line7/D-7.webp";
import img77 from "../assets/line8/k-1.webp";
import img78 from "../assets/line8/k-2.webp";
import img79 from "../assets/line8/k-3.webp";
import img80 from "../assets/line8/k-4.webp";
import img81 from "../assets/line8/k-5.webp";
import img82 from "../assets/line8/k-6.webp";
import img83 from "../assets/line9/k-7.webp";
import img84 from "../assets/line9/k-8.webp";
import img85 from "../assets/line9/k-9.webp";
import img86 from "../assets/line9/k-10.webp";
import img87 from "../assets/line9/k-11.webp";
import img88 from "../assets/line9/k-12.webp";
import img89 from "../assets/line10/b1.webp";
import img90 from "../assets/line10/b2.webp";
import img91 from "../assets/line10/b3.webp";
import img92 from "../assets/line10/b4.webp";
import img93 from "../assets/line10/b5.webp";
import img94 from "../assets/line10/b6.webp";
import img95 from "../assets/line10/b7.webp";
import img96 from "../assets/line10/b8.webp";
import img97 from "../assets/line10/b9.webp";
import img98 from "../assets/line10/b10.webp";
import img99 from "../assets/line10/b11.webp";
import img100 from "../assets/line10/b12.webp";
import img101 from "../assets/line11/a1.webp";
import img102 from "../assets/line11/a2.webp";
import img103 from "../assets/line11/a3.webp";
import img104 from "../assets/line11/a4.webp";
import img105 from "../assets/line11/a5.webp";
import img106 from "../assets/line11/a6.webp";
import img107 from "../assets/line12/d7.webp";
import img108 from "../assets/line12/d8.webp";
import img109 from "../assets/line12/d9.webp";
import img110 from "../assets/line12/d10.webp";
import img111 from "../assets/line12/d11.webp";
import img112 from "../assets/line12/d12.webp";
import img113 from "../assets/line12/d13.webp";
import img114 from "../assets/line12/d14.webp";
import img115 from "../assets/line12/d15.webp";
import img116 from "../assets/line12/d16.webp";
import img117 from "../assets/line12/d17.webp";
import img118 from "../assets/line12/d18.webp";
import img119 from "../assets/line12/d19.webp";
import img120 from "../assets/line12/d20.webp";
import img121 from "../assets/line12/d21.webp";
import img122 from "../assets/line12/d22.webp";
import img123 from "../assets/line12/d23.webp";
import img124 from "../assets/line12/d24.webp";
import img125 from "../assets/line13/c-1.webp";
import img126 from "../assets/line13/c-2.webp";
import img127 from "../assets/line13/c-3.webp";
import img128 from "../assets/line13/c-4.webp";
import img129 from "../assets/line13/c-5.webp";
import img130 from "../assets/line13/c-6.webp";
import img131 from "../assets/line13/c-7.webp";
import img132 from "../assets/line13/c-8.webp";
import img133 from "../assets/line13/c-9.webp";
import img134 from "../assets/line13/c-10.webp";
import img135 from "../assets/line14/c-11.webp";
import img136 from "../assets/line14/c-12.webp";
import img137 from "../assets/line14/c-13.webp";
import img138 from "../assets/line14/c-14.webp";
import img139 from "../assets/line14/c-15.webp";
import img140 from "../assets/line14/g-8.webp";
import img141 from "../assets/line14/g-9.webp";
import img142 from "../assets/line14/g-10.webp";
import img143 from "../assets/line14/g-11.webp";
import img144 from "../assets/line14/g-12.webp";
import img145 from "../assets/line15/a7.webp";
import img146 from "../assets/line15/a8.webp";
import img147 from "../assets/line15/a9.webp";
import img148 from "../assets/line15/a10.webp";
import img149 from "../assets/line15/a11.webp";
import img150 from "../assets/line15/n-1.webp";
import img151 from "../assets/line15/n-2.webp";
import img152 from "../assets/line15/n-3.webp";
import img153 from "../assets/line15/n-4.webp";
import img154 from "../assets/line15/n-5.webp";
import img155 from "../assets/line15/n-6.webp";
import img156 from "../assets/line15/n-7.webp";
import img157 from "../assets/line15/n-8.webp";
import img158 from "../assets/line15/n-9.webp";
import img159 from "../assets/line15/n-10.webp";
import img160 from "../assets/line15/n-11.webp";
import img161 from "../assets/line15/n-12.webp";
import img162 from "../assets/line15/n-13.webp";
import img163 from "../assets/line15/n-14.webp";
import img164 from "../assets/line15/n-15.webp";
import img165 from "../assets/line15/n-16.webp";
import img166 from "../assets/line15/n-17.webp";
import img167 from "../assets/line15/n-18.webp";
import img168 from "../assets/line15/n-19.webp";
import img169 from "../assets/line15/n-20.webp";
import img170 from "../assets/line16/p-1.webp";
import img171 from "../assets/line16/p-2.webp";
import img172 from "../assets/line16/p-3.webp";
import img173 from "../assets/line16/p-4.webp";
import img174 from "../assets/line16/p-5.webp";
import img175 from "../assets/line16/p-6.webp";
import img176 from "../assets/line16/p-7.webp";
import img177 from "../assets/line16/p-8.webp";
import img178 from "../assets/line16/p-9.webp";
import img179 from "../assets/line16/p-10.webp";
import img180 from "../assets/line16/p-11.webp";
import img181 from "../assets/line16/p-12.webp";
import img182 from "../assets/line16/p-13.webp";
import img183 from "../assets/line16/p-14.webp";
import img184 from "../assets/line16/p-15.webp";
import img185 from "../assets/line16/p-16.webp";
import img186 from "../assets/line16/p-17.webp";
import img187 from "../assets/line17/q-1.webp";
import img188 from "../assets/line17/q-2.webp";
import img189 from "../assets/line17/q-3.webp";
import img190 from "../assets/line17/q-4.webp";
import img191 from "../assets/line17/q-5.webp";
import img192 from "../assets/line17/q-6.webp";
import img193 from "../assets/line17/q-7.webp";
import img194 from "../assets/line17/q-8.webp";
import img195 from "../assets/line17/q-9.webp";
import img196 from "../assets/line17/q-10.webp";
import img197 from "../assets/line17/q-11.webp";
import img198 from "../assets/line17/q-12.webp";
import img199 from "../assets/line17/q-13.webp";
import img200 from "../assets/line17/q-14.webp";
import img201 from "../assets/line17/q-15.webp";
import img202 from "../assets/line17/q-16.webp";
import img203 from "../assets/line17/q-17.webp";
import img204 from "../assets/line17/q-18.webp";
import img205 from "../assets/line11/r-1.webp";
import img206 from "../assets/line11/r-2.webp";
import img207 from "../assets/line11/r-3.webp";
import img208 from "../assets/line18/t-1.webp";
import { MusinsaProduct } from '../data/MusinsaProductMap.jsx';

const Musinsa = ({ favorite, toggleFavorite }) => {
  return (
    <div>
      
<section className="mt-40">
  <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD: Weekly Special</h2>
</div>

<div className="mt-8">
  <ul className="mx-10 lg:mx-20 md:mx-10 flex snap-x snap-mandatory gap-8 lg:gap-4
  sm:flex-nowrap md:flex-nowrap
  lg:grid lg:grid-cols-3 ">
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div>
        <img src={img43} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-xs sm:text-[14px] md:text-[18px] lg:text-sm text-black">Cool Later and Sun Shade</p>
        <span className="font-medium md:text-lg sm:text-lg">MUSINSA STARDARD WOMEN</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img45} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-xs sm:text-[14px] md:text-[18px] lg:text-sm text-black">The Packable Collection</p>
        <span className="font-medium md:text-lg sm:text-lg">MUSINSA STANDARD</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img44} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-xs sm:text-[14px] md:text-[18px] lg:text-sm text-black">Extra 30% off Best Seller</p>
          <span className="font-medium md:text-lg sm:text-lg">MUSINSA STANDARD WOMEN</span>
      </div>
    </li>
  </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 





<section className="mt-30 md:mt-40 lg:mt-40 mx-6 lg:mx-30 md:mx-20">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-10">UP-TO 83% OFF VOCATION-READY PICKS</h1>
  </div>
  <div>
    <img src={img130} alt="pants"></img>
  </div>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
         <div className="relative">
        <img src={img131} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[552] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(552, MusinsaProduct[552])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Wahable double front-button curved neck shirt</p>
           <span className="text-sm text-gray-600">10%</span>
            <span className="text-sm font-bold text-red-800">$20</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img132} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[553] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(553, MusinsaProduct[553])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">musinsa special white zip up crop top hoodie</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
      <li>
      <div className="relative">
        <img src={img133} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[554] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(554, MusinsaProduct[554])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Single curved black pants for women</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
      </li>
      <li>
         <div className="relative">
        <img src={img134} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[555] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(555, MusinsaProduct[555])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">long sleeves full dotted summer shirt</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>

<section className="mt-20">
  <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA STANDARD WOMEN: TOP SELLERS</h2>
</div>

<div className="mx-6 lg:mx-30 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img47} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[556] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(556, MusinsaProduct[556])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PLEASENOFOLLOW</strong>
        <p className="text-sm text-gray-900">Women Slim Crew Neck T-Shirt(5 colors)</p>
        <span className="text-gray-600 text-sm">23% OFF</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[557] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(557, MusinsaProduct[557])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women Cotton curved Pants (3 color)</p>
         <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img50} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2text-base">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[558] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(558, MusinsaProduct[558])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PLEASENOFOLLOW</strong>
        <p className="text-sm text-gray-900">Women Wide Cargo Pants[black]</p>
          <span className="text-gray-600 text-sm">29% OFF</span>
          <span className="text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img51} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[559] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(559, MusinsaProduct[559])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PLEASENOFOLLOW</strong>
        <p className="text-sm text-gray-900">Women Ribbed slim scoop neck layered jersey</p>
         <span className="text-gray-600 text-sm">40% OFF</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img52} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[560] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(560, MusinsaProduct[560])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">GLACK</strong>
        <p className="text-sm text-gray-900">Women Polka Long sleeves t-shirt</p>
          <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img46} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[561] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(561, MusinsaProduct[561])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women low rise Flare Slacks [Black]</p>
          <span className="text-gray-600 text-sm">25% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 

<section className="mt-20">
  <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA HOODED JACKETS: TOP SELLERS</h2>
</div>

<div className="mx-6 lg:mx-30 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img83} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[562] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(562, MusinsaProduct[562])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Molly Hooded zip up Navy</p>
        <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img84} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-700 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[563] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(563, MusinsaProduct[563])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Vintage Pigment 2way oversize hoodie zip up [charcoal]</p>
         <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$31</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img85} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[564] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(564, MusinsaProduct[564])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">GLACKS</strong>
        <p className="text-sm text-gray-900">Curved line zip up hoodie gray</p>
          <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img86} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-700 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[565] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(565, MusinsaProduct[565])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53"></strong>
        <p className="text-sm text-gray-900">Glory lettering crop top hoodie</p>
         <span className="text-gray-600 text-sm">40% OFF</span>
          <span className="text-sm font-bold text-red-800">$79</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img87} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[566] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(566, MusinsaProduct[566])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHARMY</strong>
        <p className="text-sm text-gray-900">Overway fit up zip up Hoodie</p>
          <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img88} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-700 px-2">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[567] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(567, MusinsaProduct[567])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FANCY CLUB</strong>
        <p className="text-sm text-gray-900">Logo printed zip up Hoodie [gray]</p>
          <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


<section className="mt-20">

 <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA FUR SHOES: TOP SELLERS</h2>
</div>

<div className="mx-6 lg:mx-30 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img95} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[568] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(568, MusinsaProduct[568])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SCALLYWAG</strong>
        <p className="text-sm text-gray-900">MIA fUR line winter boots</p>
          <span className="text-sm font-bold text-red-800">$23</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img96} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[569] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(569, MusinsaProduct[569])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Winter collection fur boots</p>
          <span className="text-sm font-bold text-red-800">$25</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img97} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[570] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(570, MusinsaProduct[570])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SCALLYWAG</strong>
        <p className="text-sm text-gray-900">Strap fun long boots - chestnut</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img98} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[571] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(571, MusinsaProduct[571])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHARMY</strong>
        <p className="text-sm text-gray-900">Classic fur short mini boots [5-colors]</p>
          <span className="text-sm font-bold text-red-800">$23</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img99} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[572] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(572, MusinsaProduct[572])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Iceline recovery classic boots Dark Espresso</p>
          <span className="text-sm font-bold text-red-800">$50</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img100} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[573] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(573, MusinsaProduct[573])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HS COLLECTION</strong>
        <p className="text-sm text-gray-900">3 Button long boots - chestnuts</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-6">

<div className="mx-6 lg:mx-30 md:mx-20 mt-6">
  <ul className="flex flex-row gap-4 ">
    <li >
      <div className="relative">
        <img src={img89} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[574] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(574, MusinsaProduct[574])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Biker bukle boots</p>
          <span className="text-sm font-bold text-red-800">$70</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img90} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[575] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(575, MusinsaProduct[575])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Square chelsea boot - black</p>
          <span className="text-lg font-bold text-red-600">$71</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img91} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[576] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(576, MusinsaProduct[576])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Mori mountain shoes</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img92} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[577] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(577, MusinsaProduct[577])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Duncan buckle boots</p>
          <span className="text-sm font-bold text-red-800">$79</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img93} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[578] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(578, MusinsaProduct[578])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Ankle boots</p>
          <span className="text-sm font-bold text-red-800">$44</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img94} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[579] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(579, MusinsaProduct[579])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Buddie suedie long over works boots</p>
          <span className="text-sm font-bold text-red-900">$89</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


<section className="mt-20">
  <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA STANDARD: HIGH HEELS AND PUMPS</h2>
</div>

<div className="mx-6 lg:mx-30 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img101} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[580] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(580, MusinsaProduct[580])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Verity pump heels</p>
        <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img102} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[581] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(581, MusinsaProduct[581])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">SOREL MID HEELS</p>
        <span className="text-sm font-bold text-red-800">$21</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img103} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[582] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(582, MusinsaProduct[582])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Mary jane pumps scarlets</p>
        <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img104} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[583] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(583, MusinsaProduct[583])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Poetic pumps heels</p>
        <span className="text-sm font-bold text-red-800">$37</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img105} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[584] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(584, MusinsaProduct[584])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Lace up plateform sandals</p>
        <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img106} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[585] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(585, MusinsaProduct[585])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Basic pump heels black</p>
        <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>
</section> 



<section className="mt-20 mx-6 lg:mx-30 md:mx-20">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-12">MUSINSA STANDARD</h1>
  </div>
       <img src={img160} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img161} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[586] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(586, MusinsaProduct[586])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">one pleat bermuda sweat pant [light gray]</p>
           <span className="text-sm font-sm text-gray-600">11%</span>
            <span className="text-lsm font-bold text-red-800">$30</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img162} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[587] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(587, MusinsaProduct[587])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">Big brush long bermuda denim pant [blue]</p>
         <span className="text-sm font-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img163} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[588] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(588, MusinsaProduct[588])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">one pleat bermuda denim pant [blue]</p>
         <span className="text-sm text-gray-600">8%</span>
          <span className="text-sm font-bold text-red-800">$25</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img164} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[589] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(589, MusinsaProduct[589])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">One tuck long bermuda sweat pant</p>
         <span className="text-sm text-gray-600">11%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>

<section className="mt-20 mx-6 lg:mx-30 md:mx-20">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-12">SUMMER TRAVEL BAGS</h1>
  </div>
       <img src={img175} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img176} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[590] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(590, MusinsaProduct[590])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women belted shoulder bags</p>
         <span className="text-sm text-gray-600">9%</span>
            <span className="text-sm font-bold text-red-800">$73</span>
          
      </div>  
      </li>
      <li>
       <div className="relative">
        <img src={img177} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[591] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(591, MusinsaProduct[591])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women nylon shoulder bag</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$63</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img178} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[592] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(592, MusinsaProduct[592])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women slouch shoulder bag</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$63</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img186} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[593] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(593, MusinsaProduct[593])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women nylon slounch shoulder bag</p>
         <span className="text-sm text-gray-600">20%</span>
          <span className="text-sm font-bold text-red-800">$60</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>



<section className="mt-10">
    <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2 className="text-center">MORE TO EXPLORE</h2>
</div>
<div  className="mx-6 lg:mx-30 md:mx-10 mt-8">
  <ul className=" flex snap-x snap-mandatory gap-6
  sm:flex-nowrap md:flex-nowrap
  lg:grid lg:grid-cols-3 lg:gap-6">
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div>
        <img src={img205} alt="SCALLYWANG" className="w-full h-[400px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"/>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">DARISAL</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img206} alt="SCALLYWANG" className="w-full h-[400px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">DRESSES CHOSSEN BY HAN SO-HEE</span>
      </div>
    </li>

    <li  className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img207} alt="SCALLYWANG"  className="w-full h-[400px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
          <span className="font-medium md:text-lg sm:text-lg">MUSINSA STANDARD</span>
      </div>
    </li>
  </ul>
</div>
   
</section>






<footer className="mt-20 border-t-2 border-gray-200">
  <div className="mx-6 md:mx-10 lg:mx-30 mt-8 space-y-10">
    
    {/* Top links */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 text-gray-500 text-sm">
      <a href="#">About MUSINSA</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy Policy</a>
    </div>

    {/* FAQ / Notices */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 text-black font-bold">
      <a href="#" className="border rounded border-black px-10 py-2 text-center">FAQ</a>
      <a href="#" className="border rounded border-black px-10 py-2 text-center">NOTICES</a>
    </div>

    {/* App download */}
    <div>
      <p className="font-bold text-lg text-[#071757]">Download the MUSINSA app</p>
      <div className="flex flex-col sm:flex-row gap-3 text-black font-bold mt-5">
        <a href="#" className="border rounded border-black px-6 py-2 flex items-center justify-center">
          <i className="fa-brands fa-apple text-2xl mr-2"></i> App Store
        </a>
        <a href="#" className="border rounded border-black px-6 py-2 flex items-center justify-center">
          <i className="fa-brands fa-google-play text-2xl mr-2"></i> Google Play
        </a>
      </div>
    </div>

    {/* Social icon */}
    <div className="flex justify-centerlg:justify-start">
      <div className="w-12 h-12 rounded-full border-4 border-[#010a2e] bg-[#010a2e] flex items-center justify-center">
        <i className="fa-brands fa-instagram text-white text-2xl"></i>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="mb-10">
      <p className="text-gray-400 text-xs">
        <span className="font-bold">MUSINSA CO.</span>, may not be a direct seller but only intermediary for some products. In this case MUSINSA has limited liability for products, information and transactions. Please check the product detail on each product page.
      </p>
    </div>
  </div>
</footer>




    </div>
  )
}

export default Musinsa
      