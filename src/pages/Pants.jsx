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
import img209 from "../assets/line18/v-1.webp";
import img210 from "../assets/line18/v-2.webp";


import img313 from "../assets/line18/s-6.webp";
import img314 from "../assets/line18/s-7.webp";
import img315 from "../assets/line18/s-8.webp";
import img316 from "../assets/line18/s-9.webp";
import img317 from "../assets/line18/s-10.webp";
import img318 from "../assets/line18/s-11.webp";
import img319 from "../assets/line18/s-12.webp";
import img320 from "../assets/line18/s-13.webp";
import img321 from "../assets/line18/s-14.webp";
import img322 from "../assets/line18/s-15.webp";
import img323 from "../assets/line18/s-16.webp";
import img324 from "../assets/line18/s-17.webp";
import img325 from "../assets/line18/s-18.webp";
import img326 from "../assets/line18/s-19.webp";
import img327 from "../assets/line18/s-20.webp";
import img328 from "../assets/line18/s-21.webp";
import img329 from "../assets/line18/s-22.webp";
import img330 from "../assets/line18/s-23.webp";
import img331 from "../assets/line18/s-24.webp";
import img332 from "../assets/line18/s-25.webp";
import img333 from "../assets/line18/S-27.webp";
import img334 from "../assets/line18/s-28.webp";
import img335 from "../assets/line18/S-30.webp";
import img336 from "../assets/line18/S-31.webp";
import img337 from "../assets/line18/S-32.webp";
import img338 from "../assets/line18/S-33.webp";
import img339 from "../assets/line18/S-34.webp";

import { PantMap } from '../data/PantMap.jsx';

const Pants = ({ favorite, toggleFavorite }) => {
  return (
    <div className="mt-40">
       <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-12">MUSINSA STANDARD</h1>
  </div>

<section className="mt-10"> 
<div className="mx-6 lg:mx-30 sm:mx-20">
  <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img313} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[300px] object-cover rounded" ></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[622] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(622, PantMap[622])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">ANOLORCODE</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Bruni curved denim pants</p>
        <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$28</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img314} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[300px] object-cover rounded" ></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[623] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(623, PantMap[623])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
        <p className="text-sm text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Double knee baggy carpenter denim</p>
         <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img315} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[624] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(624, PantMap[624])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">TRILLON</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Star applique damage washing pants</p>
          <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img316} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
         <i className={`cursor-pointer ${
            favorite[625] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(625, PantMap[625])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">AVANDRESS</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Accent black string pants</p>
         <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$47</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img317} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
         <i className={`cursor-pointer ${
            favorite[626] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(626, PantMap[626])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">DRAW FIT</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Grese letter slim t-shirt best summer outfit</p>
          <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$22</span>
      </div>
    </li>
   
  </ul>
</div>

</section> 


<section className="mt-16">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2># TRACK PANTS/JOGGERS</h2>
</div>


<div className="lg:mx-30 mx-10 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
    <li  className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img318} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[627] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(627, PantMap[627])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Small logo multi tuck sweatpant</p>
        <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img319} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[628] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(628, PantMap[628])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">MUSINSA STARDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women cooling jersey wide pants</p>
         <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">10% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img320} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[629] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(629, PantMap[629])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SEW-B</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Camo boldy wide training pants</p>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$55</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img321} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
         <i className={`cursor-pointer ${
            favorite[630] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(630, PantMap[630])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">NOT4NERD</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Parachute cargo pant</p>
         <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">25% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img322} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[120px] md:h-[170px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[631] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(631, PantMap[631])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">MUSINSA STARDARD WOMEN</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Women double knit denim wide sweat pants</p>
          <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">20% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
   
  </ul>
</div>

{/* <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div> */}
</section> 


<section className="mt-16">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2># CHINOS</h2>
</div>
<div className="lg:mx-30 mx-10 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img323} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[632] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(632, PantMap[632])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">MUSINSA STANDARD</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Women deep tuck extra wide chino pant</p>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img324} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
       <i className={`cursor-pointer ${
            favorite[633] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(633, PantMap[633])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">MUSINSA STANDARD</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Solid cp curved chino pant</p>
         <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800 ">$56</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img325} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[634] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(634, PantMap[634])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">LANARCHIEVE</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Ilets belt ccargo pants</p>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$167</span>
      </div>
    </li>
    <li  className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img327} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[635] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(635, PantMap[635])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">FLAREUP</strong>
        <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">Layer wrap trouser</p>
         <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$67</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img326} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[120px] md:h-[170px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[636] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(636, PantMap[636])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">BER DE NOIR</strong>
        <p className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">EASE PANTS</p>
          <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">10% OFF</span>
          <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
   
  </ul>
</div>
</section> 

<section className="mx-6 lg:mx-30 md:mx-20 mt-20">
 <div className="mx-6 md:mx-20 lg:mx-30
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2># SHORTS</h2>
</div>
    <img src={img160} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img161} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[637] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(637, PantMap[637])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">one pleat bermuda sweat pant [light gray]</p>
           <span className="text-sm font-sm text-gray-600">11%</span>
            <span className="text-sm font-bold text-red-800">$30</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img162} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[638] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(638, PantMap[638])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
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
            favorite[639] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(639, PantMap[639])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">one pleat bermuda denim pant [blue]</p>
         <span className="text-sm font-sm text-gray-600">8%</span>
          <span className="text-sm font-bold text-red-800">$25</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img164} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[640] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(640, PantMap[640])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-gray-900">One tuck long bermuda sweat pant</p>
         <span className="text-sm font-sm text-gray-600">11%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>



<section className="mx-6 lg:mx-30 md:mx-20 mt-20">
  <div className="mx-6 md:mx-20 lg:mx-30
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-12">PANTS: NEW SELHOTTE TO WEAR NOW</h1>
  </div>
       <img src={img170} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img171} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[441] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(441, PantMap[641])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women light weight bandeddenim pant</p>
       <span className="text-sm font-bold text-red-800">$13</span>
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img172} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[645] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(645, PantMap[645])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women loose strap banded denim pant [indigo]</p>
         <span className="text-sm font-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img173} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[646] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(646, PantMap[646])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women light weight denim pant</p>
         <span className="text-sm font-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img174} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[647] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(647, PantMap[647])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women light weight banded denim pant</p>
         <span className="text-sm font-sm text-gray-600">59%</span>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>



<section className="mt-16">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2># DRESSES & SKIRTS</h2>
</div>
<div className="mx-6 lg:mx-30 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 lg:gap-4 md:gap-2 sm:gap-1">
    <li className="flex-shrink-0 w-[180px] md:w-[200px] sm:w-[150px] lg:w-[250px]">
      <div className="relative">
        <img src={img335} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[170px] md:h-[250px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[648] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(648, PantMap[648])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women nylon long skirt</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[200px] sm:w-[150px] lg:w-[250px]">
      <div className="relative">
        <img src={img336} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[170px] md:h-[250px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[649] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(649, PantMap[649])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SINCETHEN</strong>
        <p className="text-sm text-gray-900">Fairy ruffel long dress</p>
          <span className="text-sm font-bold text-red-800">$131</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[200px] sm:w-[150px] lg:w-[250px]">
      <div className="relative">
        <img src={img337} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[170px] md:h-[250px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[650] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(650, PantMap[650])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">KHAKIPOINT</strong>
        <p className="text-sm text-gray-900">Nua mini dress</p>
          <span className="text-sm font-bold text-red-800">$100</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[200px] sm:w-[150px] lg:w-[250px]">
      <div className="relative">
        <img src={img338} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[170px] md:h-[250px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
         <i className={`cursor-pointer ${
            favorite[651] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(651, PantMap[651])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ILLIGO</strong>
        <p className="text-sm text-gray-900">Puff frill white dress</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[200px] sm:w-[150px] lg:w-[250px]">
      <div className="relative">
        <img src={img339} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[170px] md:h-[250px] lg:h-[300px] object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[652] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(652, PantMap[652])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SOUP</strong>
        <p className="text-sm text-gray-900">sleeveless dress layer setup</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
   
  </ul>
</div>
</section> 



<section className="mt-16">
  <div className="mx-6 md:mx-20 lg:mx-30 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2># SUIT PANTS</h2>
</div>
<div className="lg:mx-30 mx-10 md:mx-20 mt-8">
  <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1 ">
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img328} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[653] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(653, PantMap[653])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Wide hidden elastic waist pant</p>
        <span className="text-gray-600 text-sm">8% OFF</span>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img329} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[654] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(654, PantMap[654])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women semi-ballon hidden elastic pant</p>
         <span className="text-gray-600 text-sm">13% OFF</span>
          <span className="text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img330} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[655] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(655, PantMap[655])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Flare hidden banded sack</p>
          <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$57</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img331} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[656] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(656, PantMap[656])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA SRANDARD</strong>
        <p className="text-sm text-gray-900">Women summer wool wide sack pants</p>
         <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-600">$27</span>
      </div>
    </li>
    <li  className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[240px]">
      <div className="relative">
        <img src={img332} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[657] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(657, PantMap[657])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">DRAW FIT</strong>
        <p className="text-sm text-gray-900">Grese letter slim t-shirt best summer outfit</p>
          <span className="text-gray-600 text-sm">8% OFF</span>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
   
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


{/* <section className="mt-20 mx-30">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-15">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img334} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">OPOSTROP COMMA</p>
      </div>
      <div>
        <img src={img333} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">FANCY CLUB </p>
      </div>
      <div>
        <img src={img322} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">MUSINSA STANDARD WOMEN</p>
      </div>
    </div>
  </div>
</section> */}

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
        <img src={img334} alt="SCALLYWANG" className="w-full h-[550px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"/>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">OPOSTROP</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img333} alt="SCALLYWANG" className="w-full h-[550px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">FANCY CLUB</span>
      </div>
    </li>

    <li  className="flex-shrink-0 w-full sm:w-full md:w-full lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img322} alt="SCALLYWANG"  className="w-full h-[550px] sm:h-[700px] md:h-[900px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
          <span className="font-medium md:text-lg sm:text-lg">MUSINSA STANDARD WOMEN</span>
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

export default Pants
