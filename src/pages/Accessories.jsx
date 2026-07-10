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


import img212 from "../assets/line21/x-1.webp";
import img213 from "../assets/line21/x-2.webp";
import img214 from "../assets/line21/x-3.webp";
import img215 from "../assets/line21/x-4.webp";
import img216 from "../assets/line21/x-5.webp";
import img217 from "../assets/line21/x-6.webp";
import img218 from "../assets/line21/x-7.webp";
import img219 from "../assets/line21/x-8.webp";
import img220 from "../assets/line21/x-9.webp";
import img221 from "../assets/line21/x-10.webp";
import img222 from "../assets/line21/x-11.webp";
import img223 from "../assets/line21/x-12.webp";
import img224 from "../assets/line21/x-13.webp";
import img225 from "../assets/line21/x-14.webp";
import img226 from "../assets/line21/x-15.webp";
import img227 from "../assets/line21/x-16.webp";
import img228 from "../assets/line21/x-17.webp";
import img229 from "../assets/line21/x-18.webp";
import img230 from "../assets/line21/x-19.webp";
import img231 from "../assets/line21/x-20.webp";
import img232 from "../assets/line21/x-21.webp";
import img233 from "../assets/line21/x-22.webp";
import img234 from "../assets/line21/x-23.webp";
import img235 from "../assets/line21/x-24.webp";
import img236 from "../assets/line21/x-25.webp";
import img237 from "../assets/line21/x-26.webp";
import img238 from "../assets/line21/x-27.webp";
import img239 from "../assets/line21/x-28.webp";
import img240 from "../assets/line21/x-29.webp";
import img241 from "../assets/line21/x-30.webp";
import img242 from "../assets/line21/x-31.webp";
import img243 from "../assets/line21/x-32.webp";
import img244 from "../assets/line21/x-33.webp";
import img245 from "../assets/line21/x-34.webp";
import img246 from "../assets/line21/x-35.webp";
import img247 from "../assets/line21/x-36.webp";
import img248 from "../assets/line21/x-37.webp";
import img249 from "../assets/line21/x-38.webp";
import img250 from "../assets/line21/x-39.webp";
import img251 from "../assets/line21/x-40.webp";
import img252 from "../assets/line21/x-41.webp";
import img253 from "../assets/line21/x-42.webp";
import img254 from "../assets/line21/x-43.webp";
import img255 from "../assets/line21/x-44.webp";
import img256 from "../assets/line21/x-45.webp";
import img257 from "../assets/line21/x-46.webp";
import img258 from "../assets/line21/x-47.webp";
import img259 from "../assets/line21/x-48.webp";
import img260 from "../assets/line21/x-49.webp";
import img261 from "../assets/line21/x-50.webp";
import img262 from "../assets/line21/x-51.webp";

import { AcceProductMap } from '../data/AcceProductMap.jsx'

const Accessories = ({ favorite, toggleFavorite }) => {
  return (
    <div className="relative overflow-x-hidden">    
      <section className="mt-20 md:mt-40 lg:mt-40">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0f18]">
        <h2># KIDS BAGS</h2>
      </div>
      
      <div className="mx-2 md:mx-10 lg:mx-20 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img77} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[347] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(347, AcceProductMap[347])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNBREATH KIDS</strong>
              <p className="text-sm text-gray-900">Classic kids Radogram bagpack</p>
                <span className="text-sm font-bold text-red-800">$137</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img78} alt="SCALLYWANG" className="w-64 h-65 object-cover"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[348] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(348, AcceProductMap[348])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
              <p className="text-sm text-gray-900">Bunny Bunny Bagpack</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img79} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[349] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(349, AcceProductMap[349])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LIFEWORK KIDS</strong>
              <p className="text-sm text-gray-900">New Classic Bagpack</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img80} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[350] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(350, AcceProductMap[350])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
              <p className="text-sm text-gray-900">Brown bear Dumble Backpack</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img81} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[351] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(351, AcceProductMap[351])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNNREATH KIDS</strong>
              <p className="text-sm text-gray-900">kids Big Tag Backpack</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img82} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[352] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(352, AcceProductMap[352])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNBREATH KIDS</strong>
              <p className="text-sm text-gray-900">Daily kids bagpack [khaki]</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0f18]">
        <h2># CAPS AND HATS</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img212} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[353] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(353, AcceProductMap[353])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MELLY&ROSE</strong>
              <p className="text-sm text-gray-900">Rose Ribbon bal cap</p>
                <span className="text-sm font-bold text-red-800">$34</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img213} alt="SCALLYWANG" className="w-64 h-65 object-cover"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[354] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(354, AcceProductMap[354])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ALLINCOMPLETE</strong>
              <p className="text-sm text-gray-900">Logo jackquard beanie</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img214} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[355] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(355)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ILLIGO</strong>
              <p className="text-sm text-gray-900">Dot button newsboy cap</p>
                <span className="text-sm font-bold text-red-800">$32</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img215} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[356] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(356)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHARMY</strong>
              <p className="text-sm text-gray-900">Mandy bucket hat</p>
                <span className="text-sm font-bold text-red-800">$26</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img216} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[357] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(357)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SLEEPY SLIP</strong>
              <p className="text-sm text-gray-900">Paros Sun visior</p>
                <span className="text-sm font-bold text-red-800">$50</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img217} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[358] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(358)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LIFEWORK</strong>
              <p className="text-sm text-gray-900">Pigment-washed bucket hat</p>
                <span className="text-sm font-bold text-red-800">$26</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 text-sm sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-[#0a0f18]">
        <h2># MUFFLERS</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img218} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[359] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(359)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHISCHIS</strong>
              <p className="text-sm text-gray-900">Red wool muffler</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img219} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[360] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(360)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">WASCARA</strong>
              <p className="text-sm text-gray-900">Classic wool muffler</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img220} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[361] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(361)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LEKIM</strong>
              <p className="text-sm text-gray-900">Faux fur muffler</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
             <div className="relative">
              <img src={img221} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[362] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(362)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CPGN STUDIO</strong>
              <p className="text-sm text-gray-900">Cat stitch strip muffler</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img222} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[363] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(363)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PERMANENT ARCHIEVE</strong>
              <p className="text-sm text-gray-900">Brush long knit scarf</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img223} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[364] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(364)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BP2 DISORDER</strong>
              <p className="text-sm text-gray-900">Gray hd muffler</p>
                <span className="text-sm font-bold text-red-800">$36</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># JEWELRY</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img224} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[365] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(365)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-gray-900">Orb trace bracelet</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img225} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[366] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(366)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ARTISTWEAR</strong>
              <p className="text-sm text-gray-900">Triple cube necklace</p>
                <span className="text-sm font-bold text-red-800">$22</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img226} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[367] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(367)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LAOMIN</strong>
              <p className="text-sm text-gray-900">New Classic Hairpins</p>
                <span className="text-sm font-bold text-red-800">$12</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img227} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[368] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(368)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-gray-900">Curved design ring</p>
                <span className="text-sm font-bold text-red-800">$17</span>
                </div>
          </li>
          <li>
            <div className="relative">
              <img src={img228} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[369] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(369)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SCARLETTO</strong>
              <p className="text-sm text-gray-900">Basic matt steel rings</p>
                <span className="text-sm font-bold text-red-800">$10</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img229} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[370] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(370)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PASSMEBY</strong>
              <p className="text-sm text-gray-900">FLORVEN V2</p>
                <span className="text-sm font-bold text-red-800">$166</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># SUNGLASSES</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img230} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                 <i className={`cursor-pointer ${
            favorite[371] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(371)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">2cube</strong>
              <p className="text-sm text-gray-900">1007 (gray, purple)</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img231} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[372] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(372)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-gray-900">CELVIN c1 black</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img232} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[373] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(373)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-gray-900">Cario ice blue</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img233} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[374] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(374)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-gray-900">C1 BLACK</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img234} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[375] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(375)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETI</strong>
              <p className="text-sm text-gray-900">Aldo c2 black</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img235} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[376] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(376)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ONE BRILLOENT</strong>
              <p className="text-sm text-gray-900">Ambrio black brown</p>
                <span className="text-sm font-bold text-red-800">$46</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># PETS ESSIANTIAL</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img236} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[377] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(377)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ANDBLACK</strong>
              <p className="text-sm text-gray-900">Daycare bagpack</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img237} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[378] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(378)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-7">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BAILEY</strong>
              <p className="text-sm text-gray-900">Warmer for dogs</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img238} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[379] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(379)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YALLEY</strong>
              <p className="text-sm text-gray-900">Dog rain coat</p>
                <span className="text-sm font-bold text-red-800">$22</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img239} alt="SCALLYWANG" className="mt-9"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[380] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(380)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ICANDOR</strong>
              <p className="text-sm text-gray-900">Dog strap collor</p>
                <span className="text-sm font-bold text-red-800">$20</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img240} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[381] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(381)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MU LITTLE DOG</strong>
              <p className="text-sm text-gray-900">Heart pop cool sun cap</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img241} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[382] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(382)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MEANING LESS</strong>
              <p className="text-sm text-gray-900">Dog woolen cap</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># BELTS</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img242} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
               <i className={`cursor-pointer ${
            favorite[383] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(383)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-gray-900">Saffiano synthetic leather belt</p>
                <span className="text-sm font-bold text-red-800">$13</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img243} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[384] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(384)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PEPPERSEASONING</strong>
              <p className="text-sm text-gray-900">Tactical wabbing nylon belt black</p>
                <span className="text-sm font-bold text-red-800">$7</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img244} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[385] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(385)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BELIER</strong>
              <p className="text-sm text-gray-900">City bokeh slim belt</p>
                <span className="text-sm font-bold text-red-800">$12</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img245} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[386] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(386)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
              <p className="text-sm text-gray-900">Women synthetic dot leather belt</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img246} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[387] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(387)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MILLO ARXHIVE</strong>
              <p className="text-sm text-gray-900">Washable leather belt</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img247} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[388] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(388)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PIMADWIN</strong>
              <p className="text-sm text-gray-900">Dia belt</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 


       <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># SOCKS</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img248} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[389] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(389)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ANGEL SOCKS</strong>
              <p className="text-sm text-gray-900">2 Tone cotton ribbon socks</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img249} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[390] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(390)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">I HATE MONDAY</strong>
              <p className="text-sm text-gray-900">Black strip socks</p>
                <span className="text-sm font-bold text-red-800">$2</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img250} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[391] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(391)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HALDEN</strong>
              <p className="text-sm text-gray-900">From knee socks</p>
                <span className="text-sm font-bold text-red-800">$7</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img251} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[392] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(392)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FLAREUP</strong>
              <p className="text-sm text-gray-900">Washable black custom tight</p>
                <span className="text-sm font-bold text-red-800">$10</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img252} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[393] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(393)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MOON WALK</strong>
              <p className="text-sm text-gray-900">Laces tie knee socks</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img253} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[394] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(394)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FRANSERVICS</strong>
              <p className="text-sm text-gray-900">Sheer knee high socks</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 



      <section className="mt-10">
        <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
        <h2># WATCH</h2>
      </div>
      
      <div className="mx-2 lg:mx-20 md:mx-10 mt-8">
        <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
          <li >
            <div className="relative">
              <img src={img254} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                 <i className={`cursor-pointer ${
            favorite[395] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(395)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EARDEN</strong>
              <p className="text-sm text-gray-900">Apple watch look strap buckel watch</p>
                <span className="text-sm font-bold text-red-800">$20</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img255} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[396] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(396)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MINOC</strong>
              <p className="text-sm text-gray-900">Roe basic watch strap</p>
                <span className="text-sm font-bold text-red-800">$4</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img256} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[397] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(397)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EARDEN</strong>
              <p className="text-sm text-gray-900">Apple watch classic strap black watch</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img258} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[398] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(398)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CRONOUS</strong>
              <p className="text-sm text-gray-900">Apple watch strap premium leather watch</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img257} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[399] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(399)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SILVER TAG</strong>
              <p className="text-sm text-gray-900">Apple watch steel strap heavy watch</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img259} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[400] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(400)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LORENIO</strong>
              <p className="text-sm text-gray-900">Basic leather strap watch</p>
                <span className="text-sm font-bold text-red-800">$36</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 
      
{/* <section className="mt-20 mx-35">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-15">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img260} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">RIETI</p>
      </div>
      <div>
        <img src={img261} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">SUNGLASSES selected by K-POP</p>
      </div>
      <div>
        <img src={img262} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">MUSINSA STANDARD</p>
      </div>
    </div>
  </div>
</section> */}

<section className="mt-10">
    <div className="mx-2 md:mx-10 lg:mx-20 mt-8 
                  text-medium sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold tracking-wider text-[#0a0f18]">
  <h2 className="text-center">MORE TO EXPLORE</h2>
</div>
<div  className="mx-2 lg:mx-20 md:mx-10 mt-8">
  <ul className=" flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[500px] lg:w-[420px] snap-center">
      <div>
        <img src={img260} alt="SCALLYWANG" className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[500px] object-cover rounded"/>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-bold md:text-lg sm:text-lg text-center">RIETI</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[400px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img261} alt="SCALLYWANG" className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-medium md:text-lg sm:text-lg text-center">SUNGLASSES CHOOSEN BY K-POP</span>
      </div>
    </li>

    <li  className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[400px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img262} alt="SCALLYWANG"  className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[500px] object-cover rounded"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
          <span className="font-medium text-center md:text-lg sm:text-lg ">MUSINSA STANDARD</span>
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

export default Accessories
