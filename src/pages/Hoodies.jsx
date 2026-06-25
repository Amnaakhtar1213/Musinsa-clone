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
import img208 from "../assets/line20/w-1.webp";
import img209 from "../assets/line20/w-2.webp";
import img210 from "../assets/line20/w-3.webp";
import img211 from "../assets/line20/w-4.webp";
import img212 from "../assets/line20/w-5.webp";
import img213 from "../assets/line20/w-6.webp";
import img214 from "../assets/line20/w-7.webp";
import img215 from "../assets/line20/w-8.webp";
import img216 from "../assets/line20/w-9.webp";
import img217 from "../assets/line20/w-10.webp";
import img218 from "../assets/line20/w-11.webp";
import img219 from "../assets/line20/w-12.webp";
import img220 from "../assets/line20/w-13.webp";
import img221 from "../assets/line20/w-14.webp";
import img222 from "../assets/line20/w-15.webp";
import img223 from "../assets/line20/w-16.webp";
import img224 from "../assets/line20/w-17.webp";
import img225 from "../assets/line20/w-18.webp";
import img226 from "../assets/line20/w-19.webp";
import img227 from "../assets/line20/w-20.webp";
import img228 from "../assets/line20/w-21.webp";


import { HoodieProduct } from '../data/HoodieProductMap.jsx'


const Hoodies = ({ favorite, toggleFavorite }) => {
  return (
    <section className="mt-40 text-center">
        <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h1>MUSINSA HOODIES</h1>
      </div>
     <div className="lg:mx-30 mx-10 md:mx-20 mt-8">
       <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img220} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[496] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(496, HoodieProduct[496])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">DIMITRI BLACK</strong>
             <p className="text-sm text-gray-900">Black hoodie zip up</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$24</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img221} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[497] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(497, HoodieProduct[497])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">MUSINSA STANDARD</strong>
             <p className="text-sm text-gray-900">Full hoodie set</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$58</span>
           </div>
         </li>
         <li  className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img222} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[498] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(498, HoodieProduct[498])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">FLAREUP</strong>
             <p className="text-sm text-gray-900">High neck leather jacket</p>
               <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$56</span>
           </div>
         </li>
         <li  className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img223} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
               <span className="bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[499] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(499, HoodieProduct[499])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">MUSINSA STANDARD</strong>
             <p className="text-sm text-gray-900">Leather jacket</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$62</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img224} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[500] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(500, HoodieProduct[500])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">AGOD</strong>
             <p className="text-sm text-gray-900">Choclate brown lather jacket</p>
                <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$63</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img225} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[501] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(501, HoodieProduct[501])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">DEMITRI BLACK</strong>
             <p className="text-sm text-gray-900">Best washable brown jacket</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="font-bold text-sm text-red-800">$32</span>
           </div>
         </li>
       </ul>
     </div>
      


     <section className="mt-10">
     <div className="lg:mx-30 mx-10 md:mx-20 mt-8">
       <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img208} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[502] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(502, HoodieProduct[502])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">MUAHMUAH</strong>
             <p className="text-sm text-gray-900">Four seasonal essiantial hoodie zip up (gray)</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$23</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img209} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center (blue)">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[503] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(503, HoodieProduct[503])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">FANSHOW</strong>
             <p className="text-sm text-gray-900">Four seasonal essiantial hoodie zip up (blue)</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$58</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img210} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[504] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(504, HoodieProduct[504])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">FLAREUP</strong>
             <p className="text-sm text-gray-900">Four seasonal essiantial hoodie zip up (charcoal)</p>
               <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$47</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img211} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
               <span className="bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[505] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(505, HoodieProduct[505])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">MUAHMUAH</strong>
             <p className="text-sm text-gray-900">Anime printed black strip hoodie</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$22</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img212} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[506] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(506, HoodieProduct[506])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">FILLUMINATE</strong>
             <p className="text-sm text-gray-900">Logo printed hoodie</p>
                <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$20</span>
               </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img213} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[507] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(507, HoodieProduct[507])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">BUAF</strong>
             <p className="text-sm text-gray-900">Gray cloud printed design hoodie zip up</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$32</span>
           </div>
         </li>
       </ul>
     </div>
     </section> 

 <section className="mt-10">
     <div className="lg:mx-30 mx-10 md:mx-20 mt-8">
       <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img199} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[490] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(490, HoodieProduct[490])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">CPGN STUDIO</strong>
             <p className="text-sm text-gray-900">Full star pigment hoodie zip up</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$43</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img200} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[491] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(491, HoodieProduct[491])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">FANSHOW</strong>
             <p className="text-sm text-gray-900">Six color ninteen geometry pants</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$58</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img201} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[492] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(492, HoodieProduct[492])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">FLAREUP</strong>
             <p className="text-sm text-gray-900">Half sleeve layer busten t-shirt</p>
               <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$47</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img202} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
               <span className="bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[493] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(493, HoodieProduct[493])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">AGOD</strong>
             <p className="text-sm text-gray-900">Wide denim pant</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$22</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img203} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[494] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(494, HoodieProduct[494])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">FILLUMINATE</strong>
             <p className="text-sm text-gray-900">Damage washeable denim pant</p>
                <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$33</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img204} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[495] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(495, HoodieProduct[495])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="font-medium">DEMITRI BLACK</strong>
             <p className="text-sm text-gray-900">Women curved track sweat pant</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="font-bold text-sm text-red-800">$32</span>
           </div>
         </li>
       </ul>
     </div>
     </section> 


     <section className="mt-10 border-b-2 border-gray-200 pb-10">
     <div className="lg:mx-30 mx-10 md:mx-20 mt-8">
       <ul className="flex flex-row gap-4 md:gap-2 sm:gap-1">
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img214} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
                <i className={`cursor-pointer ${
            favorite[508] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(508, HoodieProduct[508])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">CPGN STUDIO</strong>
             <p className="text-sm text-gray-900">Buttons hoodie zip up</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$43</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img215} alt="SCALLYWANG" className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded"></img>
             <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
               <span className=" bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[509] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(509, HoodieProduct[509])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">FANSHOW</strong>
             <p className="text-sm text-gray-900"> ninteen geometry hoodie</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$38</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img216} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[510] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(510, HoodieProduct[510])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">FLAREUP</strong>
             <p className="text-sm text-gray-900">Gray plan hoodie</p>
               <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$47</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img217} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
               <span className="bg-black text-white px-2">Extra 10% OFF</span>
               <i className={`cursor-pointer ${
            favorite[511] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(511, HoodieProduct[511])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">AGOD</strong>
             <p className="text-sm text-gray-900">Net knit hoodie zip up</p>
              <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$52</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img218} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[512] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(512, HoodieProduct[512])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">BUAF</strong>
             <p className="text-sm text-gray-900">Big logo printed hoodie zip up</p>
                <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$33</span>
           </div>
         </li>
         <li className="flex-shrink-0 w-[180px] md:w-[180px] sm:w-[130px] lg:w-[220px]">
           <div className="relative">
             <img src={img219} alt="SCALLYWANG"  className="w-full h-[240px] sm:h-[120px] md:h-[180px] lg:h-[290px] object-cover rounded" ></img>
             <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[513] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(513, HoodieProduct[513])}></i>
             </div>
           </div>
           <div className="flex flex-col gap-1 mt-3">
             <strong className="text-medium">DEMITRI BLACK</strong>
             <p className="text-sm text-gray-900">Lovely hip hoodie zip up</p>
             <span className="text-gray-600 text-sm font-normal">10% OFF</span>
               <span className="text-sm font-bold text-red-800">$32</span>
           </div>
         </li>
       </ul>
     </div>
     
     <div className="text-center mt-10">
       <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">VIEW MORE BEST SELLER</button>
     </div>
     </section> 
      

{/* <section className="mt-10 mx-30">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-10">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img226} alt="musinsa" />
        <p className="text-left mt-4 text-xl">#BUAF __ BEST CLOTHING BRAND</p>
      </div>
      <div>
        <img src={img227} alt="musinsa" />
        <p className="text-left mt-4 text-xl">Famous brand selected by K-celeb</p>
      </div>
      <div>
        <img src={img228} alt="musinsa" />
        <p className="text-left mt-4 text-xl">MUSINSA STANDARD</p>
      </div>
    </div>
  </div>
</section> */}


<section className="mx-6 lg:mx-20 md:mx-10 mt-8">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-10">MORE TO EXPLORE</h1>

    <div
      className="
        flex gap-6 snap-x snap-mandatory
        sm:px-5 sm:flex-nowrap
        md:px-20 md:flex-nowrap
        lg:px-30 lg:flex-nowrap lg:overflow-visible
      "
    >
      {/* Item 1 */}
      <div className="flex-shrink-0 w-full sm:w-[100%] md:w-[45%] lg:w-[35%] snap-center">
        <img src={img226} alt="musinsa" className="w-full h-[500px] object-cover rounded"/>
        <p className="text-left mt-4 text-xl">#BUAF __ BEST CLOTHING BRAND</p>
      </div>

      {/* Item 2 */}
      <div className="flex-shrink-0 w-full sm:w-[100%] md:w-[45%] lg:w-[35%] snap-center">
        <img src={img227} alt="musinsa" className="w-full h-[500px] object-cover rounded"/>
        <p className="text-left mt-4 text-xl">Famous brand selected by K-celeb</p>
      </div>

      {/* Item 3 */}
      <div className="flex-shrink-0 w-full sm:w-[100%] md:w-[45%] lg:w-[35%] snap-center">
        <img src={img228} alt="musinsa" className="w-full h-[500px] object-cover rounded"/>
        <p className="text-left mt-4 text-xl">MUSINSA STANDARD</p>
      </div>
    </div>
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


    </section>
  )
}

export default Hoodies
