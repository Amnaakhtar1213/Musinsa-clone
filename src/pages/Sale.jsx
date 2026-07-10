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
import img30 from "../assets/hero/a-4.webp";
import img31 from "../assets/hero/a-5.webp";
import img32 from "../assets/hero/a-6.webp";
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

import { SaleMap } from '../data/SaleProductMap.jsx'

const Sale = ({ favorite, toggleFavorite }) => {
  return (
    <div>
      
<section className="mt-20 md:mt-40 lg:mt-40 relative overflow-x-hidden">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
    <h2><span className="text-red-800">LIMITED TIME OFFER:</span>  #48 Hours Left</h2>
  </div>   

<div className="lg:mx-20 mx-2 md:mx-10 mt-8">
  <ul className="flex flex-row flex-nowrap gap-4 overflow-x-auto no-scrollbar
      sm:flex-nowrap md:flex-nowrap 
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-visible">
   <li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
  <div className="relative">
    <img 
      src={img27} 
      alt="SCALLYWANG" 
      className="w-full h-[240px] sm:h-[120px] md:h-[240px] lg:h-[250px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[658] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(658, SaleMap[658])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Denim pants with back side cross
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$12</span>
  </div>
</li>

   <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
  <div className="relative">
    <img 
      src={img28} 
      alt="SCALLYWANG" 
      className="w-full h-[240px] sm:h-[120px] md:h-[240px] lg:h-[250px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[659] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(659, SaleMap[659])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Summer half-sleeves yellow shirt
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$10</span>
  </div>
  </li>

    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
  <div className="relative">
    <img 
      src={img29} 
      alt="SCALLYWANG" 
      className="w-full h-[240px] sm:h-[120px] md:h-[240px] lg:h-[250px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[660] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(660, SaleMap[660])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Denim cap with adjustable strap [blue]
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$7</span>
  </div>
  </li>

    <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[210px]">
  <div className="relative">
    <img 
      src={img30} 
      alt="SCALLYWANG" 
      className="w-full h-[230px] sm:h-[120px] md:h-[240px] lg:h-[240px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[661] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(661, SaleMap[661])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Grese letter printing on plain black shirt
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$17</span>
  </div>
</li>

   <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[210px]">
  <div className="relative">
    <img 
      src={img31} 
      alt="SCALLYWANG" 
      className="w-full h-[230px] sm:h-[120px] md:h-[240px] lg:h-[240px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[662] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(662, SaleMap[662])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Grese letter slim t-shirt best summer outfit
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$22</span>
  </div>
  </li>

   <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[210px]">
  <div className="relative">
    <img 
      src={img32} 
      alt="SCALLYWANG" 
      className="w-full h-[230px] sm:h-[120px] md:h-[240px] lg:h-[240px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs md:text-[10px] sm:text-[9px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs md:text-sm lg:text-base ${
          favorite[663] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(663, SaleMap[663])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm md:text-xs sm:text-[11px] lg:text-base">SCALLYWANG</strong>
    <p className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm text-black">
      Women slim T-shirt best for summers (5 colors)
    </p>
    <span className="text-gray-600 text-xs md:text-[11px] sm:text-[10px] lg:text-sm">30% OFF</span>
    <span className="text-xs md:text-[11px] sm:text-[10px] lg:text-sm font-bold text-red-800">$15</span>
  </div>
</li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


<section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                font-bold tracking-wider text-[#0a0f18]">
  <h2>Short-sleeve Weekly #1: Up to 75% OFF</h2>
</div>

<div className="mx-2 md:mx-10 lg:mx-20 mt-6">
  <ul className="flex flex-row flex-nowrap gap-4 overflow-x-auto no-scrollbar
      sm:flex-nowrap md:flex-nowrap 
      lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">

   <li className="flex-shrink-0 w-[250px] sm:w-[150px] md:w-[200px] lg:w-full">
  <div className="relative">
    <img src={img33} alt="MuahMuah"
               className="w-full h-[300px] sm:h-[160px] md:h-[250px] lg:h-[350px] object-cover rounded" />
     <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-white px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">
        Weekly Deal
      </span>
      <i
        className={`cursor-pointer text-xs sm:text-[10px] md:text-sm lg:text-base ${
          favorite[664] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(664, SaleMap[664])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">
      MuahMuah
    </strong>
    <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">
      Mrt vivid slim short sleeve summer season t shirt
    </p>
    <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">
      30% OFF
    </span>
    <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">
      $27
    </span>
  </div>
</li>


    <li className="flex-shrink-0 w-[250px] sm:w-[150px] md:w-[200px] lg:w-full">
      <div className="relative">
        <img src={img34} alt="SCALLYWANG" className="w-full h-[300px] sm:h-[160px] md:h-[250px] lg:h-[350px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
          <span className=" bg-black text-white px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[665] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(665, SaleMap[665])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">MAISON MINED</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">Dooodle heart half t white greyish blue shirt</p>
         <span className="text-gray-600 text-sm">75% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$32</span>
      </div>
    </li>


    <li  className="flex-shrink-0 w-[250px] sm:w-[150px] md:w-[200px] lg:w-full">
      <div className="relative">
        <img src={img35} alt="SCALLYWANG" className="w-full h-[300px] sm:h-[160px] md:h-[250px] lg:h-[350px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className="bg-black text-white px-1 text-sm sm:text-[9px] md:text-[10px] lg:text-sm">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[666] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(666, SaleMap[666])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">ESCAPEFROM</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">Stawberry dot edcf logo collage print oversize shirt</p>
          <span className="text-gray-600 text-sm">70% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$26</span>
      </div>
    </li>


    <li className="flex-shrink-0 w-[250px] sm:w-[150px] md:w-[200px] lg:w-full">
      <div className="relative">
        <img src={img36} alt="SCALLYWANG" className="w-full h-[300px] sm:h-[160px] md:h-[250px] lg:h-[350px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className="bg-black text-white px-1 text-sm sm:text-[9px] md:text-[10px] lg:text-sm">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[667] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(667, SaleMap[667])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">VENHIT</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">Mrt vivid slim short sleeve summer season t shirt </p>
         <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
   </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>  


<section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                font-bold tracking-wider text-[#0a0f18]">
  <h2>5 Days Only: Extra 20% off Selected Items</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-6">
  <ul className="flex flex-row flex-nowrap gap-4 overflow-x-auto no-scrollbar
      sm:flex-nowrap md:flex-nowrap 
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-visible ">
<li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[200px]">
  <div className="relative">
    <img 
      src={img37} 
      alt="SCALLYWANG" 
      className="w-full h-[250px] sm:h-[120px] md:h-[220px] lg:h-[280px] object-cover rounded" 
    />
    <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-1">
      <span className="bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">
        Extra 30% OFF
      </span>
      <i
        className={`cursor-pointer text-xs sm:text-[10px] md:text-sm lg:text-base ${
          favorite[668] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
        }`}
        onClick={() => toggleFavorite(668, SaleMap[668])}
      ></i>
    </div>
  </div>
  <div className="flex flex-col gap-1 mt-2">
    <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">
      MUSINSA STANDARD
    </strong>
    <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">
      Real Wide Hidden Banding Slacks pant [Black]
    </p>
    <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">
      30% OFF
    </span>
    <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">
      $27
    </span>
  </div>
</li>

    <li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[200px]">
      <div className="relative">
        <img src={img38} alt="SCALLYWANG"  className="w-full h-[250px] sm:h-[120px] md:h-[220px] lg:h-[280px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className=" bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[669] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(669, SaleMap[669])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">BAUF</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">3 Logo Dot Slim Fit T-shirt [Red]</p>
         <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">19% OFF</span>
        <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$29</span>
      </div>
    </li>


    <li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[200px]">
      <div className="relative">
        <img src={img39} alt="SCALLYWANG" className="w-full h-[250px] sm:h-[120px] md:h-[220px] lg:h-[280px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className=" bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[670] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(670, SaleMap[670])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">ILLUMINATE</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">Damage Washed Denim Pants Medium Blue</p>
          <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">25% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$29</span>
      </div>
    </li>


    <li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[200px]">
      <div className="relative">
        <img src={img40} alt="SCALLYWANG" className="w-full h-[250px] sm:h-[120px] md:h-[220px] lg:h-[280px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className="bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[671] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(671, SaleMap[671])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">BAUF</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">Grese letter printing on plan black shirt</p>
         <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">25% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$29</span>
      </div>
    </li>


    <li className="flex-shrink-0 w-[200px] md:w-[180px] sm:w-[130px] lg:w-[200px]">
      <div className="relative">
        <img src={img41} alt="SCALLYWANG" className="w-full h-[250px] sm:h-[120px] md:h-[220px] lg:h-[280px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className="bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[672] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(672, SaleMap[672])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base"></strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">D Logo Dot Slippers</p>
          <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">20% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$29</span>
      </div>
    </li>


    <li className="flex-shrink-0 w-[180px] md:w-[160px] sm:w-[130px] lg:w-[210px]">
      <div className="relative">
        <img src={img42} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[120px] md:h-[170px] lg:h-[240px] object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center px-1">
          <span className="bg-black text-yellow-500 px-1 text-xs sm:text-[9px] md:text-[10px] lg:text-sm">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[673] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(673, SaleMap[673])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-sm sm:text-[11px] md:text-xs lg:text-base">COVERNET</strong>
        <p className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm text-black">gray's slim fit t-shirt sleeve half</p>
          <span className="text-gray-600 text-xs sm:text-[10px] md:text-[11px] lg:text-sm">35% OFF</span>
          <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-red-800">$24</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


 <section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD WOMEN: TOP SELLERS</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-6">
  <ul className="flex flex-row gap-4 mt-12 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar ">
    <li >
      <div className="relative">
        <img src={img47} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[674] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(674, SaleMap[674])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
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
            favorite[675] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(675, SaleMap[675])}></i>
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
            favorite[676] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(676, SaleMap[676])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
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
            favorite[677] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(677, SaleMap[677])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
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
            favorite[678] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(678, SaleMap[678])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
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
            favorite[679] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(679, SaleMap[679])}></i>
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

 <section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2>Your Favorite Brands</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-6">
  <ul className="flex flex-row gap-4 mt-12 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar ">
    <li >
      <div className="relative">
        <img src={img53} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center ">
          <span className=" bg-black text-green-800 font-base px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[680] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(680, SaleMap[680])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Unseen Dew Glow Balm 9 Types</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[681] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(681, SaleMap[681])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Tint Ribbon Keyring</p>
          <span className="text-sm font-bold text-red-680">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img58} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[682] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(682, SaleMap[682])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Skin Sync up Cushion 2 Types</p>
          <span className="text-sm font-bold text-red-800">$11</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img56} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[683] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(683, SaleMap[683])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Oddtype Cat Keyring [black]</p>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img55} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[684] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(684, SaleMap[684])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Mirror Pounch [Silver]</p>
          <span className="text-sm font-bold text-red-800">$9</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img57} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[685] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(685, SaleMap[685])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-600">Unveil skin Highlighter 2 colors</p>
          <span className="text-sm font-bold text-red-800">$16</span>
      </div>
    </li>
  </ul>
</div>
</section>  


<section className="mt-8">
<div className="mx-2 lg:mx-20 md:mx-10">
  <ul className="flex flex-row gap-4 mt-12 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li >
      <div className="relative">
        <img src={img59} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center ">
          <span className=" bg-black text-green-800 font-base px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[686] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(686, SaleMap[686])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">Unlimited Curl lift Mascara [New]</p>
          <span className="text-sm font-bold text-red-600">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img60} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[687] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(687, SaleMap[687])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">[Lip Tattoo Pack] Peel off Lip Stain</p>
          <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img61} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[688] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(688, SaleMap[688])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">Unseen blur Tint [14 Type]</p>
          <span className="text-sm font-bold text-red-800">$11</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img62} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[689] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(689, SaleMap[689])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">Unseen Mirror Tint [10 Type]</p>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img63} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[690] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(690, SaleMap[690])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">Ballon Tint X Heart Pocket T-Shirt</p>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img64} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[691] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(691, SaleMap[691])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-gray-900">Sync Up over Spreader</p>
          <span className="text-sm font-bold text-red-800">$9</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP ODDTYPE</button>
</div>
</section>  


 <section className="mx-2 lg:mx-20 md:mx-10 mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA SPECIAL: Exclusive to MUSINSA</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-8">
  <ul className="flex flex-row gap-4 mt-12 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li >
      <div className="relative">
        <img src={img68} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[692] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(692, SaleMap[692])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PLEASENOFOLLOW</strong>
        <p className="text-sm text-gray-900">Long Sleeves Top</p>
        <span className="text-gray-600 text-sm">4% OFF</span>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img69} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[693] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(693, SaleMap[693])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EYEER</strong>
        <p className="text-sm text-gray-900">02 Logo Bolero set-up black</p>
         <span className="text-gray-600 text-sm">1% OFF</span>
          <span className="text-sm font-bold text-red-800">$64</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img70} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[694] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(694, SaleMap[694])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Neck strip short sleeves t-shirt</p>
          <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$15</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img71} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[695] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(695, SaleMap[695])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Stud Shriing band beanie [black]</p>
         <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$45</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img72} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[696] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(696, SaleMap[696])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HDEX</strong>
        <p className="text-sm text-gray-900">Most Talk about k-Sport wear</p>
          <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$65</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img73} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[697] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(697, SaleMap[697])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SLEEKGLOW</strong>
        <p className="text-sm text-gray-900">Summer Drop Arrive [50% off]</p>
          <span className="text-gray-600 text-sm">5% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


 <section className="mx-2 lg:mx-20 md:mx-10 mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-6">UP-TO 83% OFF VOCATION-READY PICKS</h1>
  </div>
  <div>
    <img src={img125} alt="SCALLYWANG" className="w-[350px] h-[200px] object-cover lg:w-[1400px] lg:h-[550px] lg:object-cover md:object-cover md:w-[900px] md:h-[400px]"></img>
  </div>
  <div>
    <ul className="flex flex-row gap-4 mt-8
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-x-visible no-scrollbar">
      <li>
         <div className="relative">
        <img src={img126} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[698] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(698, SaleMap[698])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FILLUMINATE</strong>
        <p className="text-sm text-gray-900">Damage washes denim pants</p>
           <span className="text-sm text-gray-600">10%</span>
            <span className="text-sm font-bold text-red-800">$20</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img127} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[699] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(699, SaleMap[699])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DEMITRI BLACK</strong>
        <p className="text-sm text-gray-900">Everyone banded curved slack</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img128} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[700] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(700, SaleMap[700])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DEMITRI BLACK</strong>
        <p className="text-sm text-gray-900">Single curved slack sweat-pants</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
      </li>
      <li>
         <div className="relative">
        <img src={img129} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[701] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(701, SaleMap[701])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-gray-900">Small logo curved sweat-pants</p>
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




<section className="mt-10">
    <div className="mx-2 md:mx-10 lg:mx-20 
                  text-medium sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2 className="text-center">MORE TO EXPLORE</h2>
</div>
<div  className="mx-2 lg:mx-20 md:mx-10 mt-8">
  <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li className="flex-shrink-0 w-full sm:w-full md:w-[500px] lg:w-[420px] snap-center">
      <div>
        <img src={img205} alt="SCALLYWANG" className="w-full h-[400px] sm:h-[700px] md:h-[540px] lg:h-[500px] object-cover rounded"/>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">DARISAL</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-[500px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img206} alt="SCALLYWANG" className="w-full h-[400px] sm:h-[700px] md:h-[540px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg">DRESSES CHOSSEN BY HAN SO-HEE</span>
      </div>
    </li>

    <li  className="flex-shrink-0 w-full sm:w-full md:w-[500px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img207} alt="SCALLYWANG"  className="w-full h-[400px] sm:h-[700px] md:h-[540px] lg:h-[500px] object-cover rounded"></img>
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

export default Sale
