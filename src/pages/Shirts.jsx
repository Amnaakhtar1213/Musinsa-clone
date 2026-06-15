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
import img208 from "../assets/line18/t-1.webp";
import img209 from "../assets/line18/v-1.webp";
import img210 from "../assets/line18/v-2.webp";
import img211 from "../assets/line18/v-3.webp";

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

import img263 from "../assets/line22/v-4.webp";
import img264 from "../assets/line22/v-5.webp";
import img265 from "../assets/line22/v-6.webp";
import img266 from "../assets/line22/v-7.webp";
import img267 from "../assets/line22/v-8.webp";
import img268 from "../assets/line22/v-9.webp";
import img269 from "../assets/line22/v-10.webp";
import img270 from "../assets/line22/v-11.webp";
import img271 from "../assets/line22/v-12.webp";
import img272 from "../assets/line22/v-13.webp";
import img273 from "../assets/line22/v-14.webp";
import img274 from "../assets/line22/v-15.webp";
import img275 from "../assets/line22/v-16.webp";
import img276 from "../assets/line22/v-17.webp";
import img277 from "../assets/line22/v-18.webp";
import img278 from "../assets/line22/v-19.webp";
import img279 from "../assets/line22/v-20.webp";
import img280 from "../assets/line22/v-21.webp";
import img281 from "../assets/line22/v-24.webp";
import img282 from "../assets/line22/v-25.webp";
import img283 from "../assets/line22/v-26.webp";
import img284 from "../assets/line22/v-27.webp";
import img285 from "../assets/line22/v-28.webp";
import img286 from "../assets/line22/v-29.webp";
import img287 from "../assets/line22/v-30.webp";
import img288 from "../assets/line22/v-31.webp";
import img289 from "../assets/line22/v-32.webp";
import img290 from "../assets/line22/v-33.webp";
import img291 from "../assets/line22/v-34.webp";
import img292 from "../assets/line22/v-35.webp";
import img293 from "../assets/line22/v-36.webp";
import img294 from "../assets/line22/v-37.webp";
import img295 from "../assets/line22/v-38.webp";
import img296 from "../assets/line22/v-39.webp";
import img297 from "../assets/line22/v-40.webp";
import img298 from "../assets/line22/v-41.webp";
import img299 from "../assets/line22/v-42.webp";
import img300 from "../assets/line22/v-43.webp";
import img301 from "../assets/line22/v-44.webp";
import img302 from "../assets/line22/v-45.webp";
import img303 from "../assets/line22/v-46.webp";
import img304 from "../assets/line22/v-47.webp";
import img305 from "../assets/line22/v-48.webp";
import img306 from "../assets/line22/v-49.webp";
import img307 from "../assets/line22/v-50.webp";
import img308 from "../assets/line22/v-52.webp";
import img309 from "../assets/line22/v-53.webp";
import img310 from "../assets/line22/v-54.webp";
import img311 from "../assets/line22/v-55.webp";
import img312 from "../assets/line22/v-56.webp";


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



const Shirts = ({ favorite, toggleFavorite }) => {
  return (
    <div>
      
      <section className="mt-35">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2>TOP SELLING IN YOUR COUNTRY </h2>
      </div>
      
      <div className="mx-30 mt-8">
        <ul className="flex flex-row gap-4 ">
          <li>
            <div className="relative">
              <img src={img187} alt="SCALLYWANG" className="h-[230px] w-[400px]"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[702] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(702)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">MUAHMUAH</strong>
              <p className="text-sm text-gray-900">Block cardigan sleeveless</p>
                <span className="text-sm font-bold text-red-800">$36</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img188} alt="SCALLYWANG" className="h-[230px] w-[400px]"></img>
              <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
                <span className=" bg-black text-white px-2">Extra 30% OFF</span>
                <i className={`cursor-pointer ${
            favorite[703] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(703)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">MUSINSA STANDARD</strong>
              <p className="text-sm text-gray-900">Summer half sleeve plane t-shirt</p>
               <span className="text-gray-600 text-sm font-normal">30% OFF</span>
                <span className="text-sm font-bold text-red-800">$19</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img189} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[704] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(704)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">SUARE</strong>
              <p className="text-sm text-gray-900">Cool cotton half sleev washable t-shirt</p>
                <span className="text-gray-600 text-sm font-normal">30% OFF</span>
                <span className="text-sm font-bold text-red-800">$7</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img190} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-2">
                <span className="bg-black text-green-700 px-2">Extra 30% OFF</span>
                <i className={`cursor-pointer ${
            favorite[705] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(705)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">UNDEROFF</strong>
              <p className="text-sm text-gray-900">Rollup sleeve cropped short sleeve t-shirt</p>
               <span className="text-gray-600 text-sm font-normal">30% OFF</span>
                <span className="text-sm font-bold text-red-800">$20</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img191} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                 <i className={`cursor-pointer ${
            favorite[706] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(706)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">TRAVEL</strong>
              <p className="text-sm text-gray-900">Saint pigment half sleeves t-shirt</p>
                <span className="text-gray-600 text-sm font-normal">30% OFF</span>
                <span className="text-sm font-bold text-red-800">$22</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img192} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
                <span className="bg-black text-white px-2">Extra 30% OFF</span>
                <i className={`cursor-pointer ${
            favorite[707] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(707)}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium">DIMITRI BLACK</strong>
              <p className="text-sm text-gray-900">ASI 4-season essiantial hoodie zip up gray</p>
                <span className="text-gray-600 text-sm font-normal">30% OFF</span>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
        </ul>
      </div>
      </section>


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
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[708] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(708)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Denim pants with back side cross</p>
        <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img28} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[709] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(709)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Summer half-sleeves yellow shirt</p>
         <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img29} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[710] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(710)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Denim cap with adjustable strap [blue]</p>
          <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img30} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[711] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(711)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Grese letter printing on plan black shirt</p>
         <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img31} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[712] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(712)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Grese letter slim t-shirt best summer outfit</p>
          <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img32} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[713] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(713)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-gray-900">Women slim T-shirt best for summers (5 colors)</p>
          <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$15</span>
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
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Weekly Deals</span>
          <i className={`cursor-pointer ${
            favorite[714] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(714)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ESCAPEFROM</strong>
        <p className="text-sm text-gray-900">Start denim escf logo college print slim fit</p>
        <span className="text-gray-600">75% OFF</span>
          <span className="text-sm font-bold text-red-800">$24</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img34} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Weekly Deals</span>
           <i className={`cursor-pointer ${
            favorite[715] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(715)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MAISON MINED</strong>
        <p className="text-sm text-gray-900">Dooodle heart half t white greyish blue</p>
         <span className="text-gray-600 text-sm">75% OFF</span>
          <span className="text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img35} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Weekly Deals</span>
          <i className={`cursor-pointer ${
            favorite[716] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(716)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ESCAPEFROM</strong>
        <p className="text-sm text-gray-900">Stawberry dot edcf logo collage print oversize</p>
          <span className="text-gray-600 text-sm">70% OFF</span>
          <span className="text-dm font-bold text-red-800">$26</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img36} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Weekly Deals</span>
          <i className={`cursor-pointer ${
            favorite[717] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(717)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">VENHIT</strong>
        <p className="text-sm text-gray-900">Mrt vivid slim short sleeve summer season t shirt </p>
         <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
   </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 



<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">MUSINSA STANDARD</h1>
  </div>
  <div>
    <img src={img135} alt="pants"></img>
  </div>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img136} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[718] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(718)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Aran cable collar zip up</p>
           <span className="text-sm text-gray-600">29%</span>
            <span className="text-sm font-bold text-red-800">$53</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img137} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[719] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(719)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Pixel logo shirt half sleeves black</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img138} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[720] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(720)}></i>
      </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Silver b over fit t-shirt</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img139} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[721] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(721)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Super wide hidden elastic waist band medium-gray</p>
         <span className="text-sm text-gray-600">13%</span>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12"># NEW IN: LACE, SHRRING ITEMS</h1>
  </div>
       <img src={img140} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img141} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[722] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(722)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-gray-900">Ribboned mini short black</p>
           <span className="text-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img142} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[723] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(723)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-gray-900">Multi tank top white</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img143} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[724] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(724)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-gray-900">Nepolien jersey black</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img144} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[725] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(725)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-gray-900">Stcture high neck leather jacket</p>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>



<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">[BUAF] GLOBAL EXCLUSIVE: SUMMER 2026 T-SHIRTS</h1>
  </div>
       <img src={img145} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img146} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[726] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(726)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-gray-900">house essiential long sleeve</p>
           <span className="text-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img147} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[727] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(727)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-gray-900">red heart slim fit t-shirt</p>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img148} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[728] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(728)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-gray-900">running horse linger gray t-shirt</p>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img149} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[729] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(729)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-gray-900">A soft t-shirt gray strip</p>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>

<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">YOUR'S SUMMER DAILY ACTIVE EDITS: UP TO 18% OFF</h1>
  </div>
       <img src={img155} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img156} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[730] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(730)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
           <span className="text-sm text-gray-600">18%</span>
            <span className="text-sm font-bold text-red-800">$22</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img157} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[731] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(731)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img158} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[732] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(732)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$86</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img159} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[733] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(733)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-gray-900">One sholder loose fit short sleeves t-shirt</p>
         <span className="text-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">DRESSSES AND SLEEVELESS STYLE: CHOOSEN BY HAN SO-HE</h1>
  </div>
       <img src={img179} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img180} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[734] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(734)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women wrinkle check shirt [2 color]</p>
            <span className="text-sm font-bold text-red-800">$23</span>
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img181} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[735] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(735)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">One side folding collar charcoal</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$51</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img182} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[736] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(736)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Butterfly print slim fit short sleeves t-shirt</p>
         <span className="text-sm text-gray-600">29%</span>
          <span className="text-sm font-bold text-red-800">$26</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img183} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[737] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(737)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Backpoint studio short sleeve over size t-shirt</p>
         <span className="text-sm text-gray-600">21%</span>
          <span className="text-sm font-bold text-red-800">$15</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>



<section className="mt-20 mx-30">
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
</section>


<footer className="mt-20 border-t-2 border-gray-200">
  <div className="mx-30 mt-8">
     <div className="flex flex-row gap-7 text-gray-500 text-sm">
    <a href="#">About MUSINSA</a>
    <a href="#">Terms & Conditions</a>
    <a href="#">Privacy Policy</a>
  </div>

  <div className="flex flex-row gap-7 text-black font-bold mt-10">
    <a href="#" className="border rounded border-black px-20 py-1">FAQ</a>
    <a href="#" className="border rounded border-black px-20 py-1">NOTICS</a>
  </div>

  <div className="mt-15">
    <p className="font-bold text-lg text-[#071757]">Download the MUSINSA app</p>
    <div className="flex flex-row gap-3 text-black font-bold mt-5">
    <a href="#" className="border rounded border-black rounded px-6 py-2 items-center"><i className="fa-brands fa-apple text-2xl"></i> app store</a>
    <a href="#" className="border rounded border-black rounded px-6 py-2 items-center"><i className="fa-brands fa-google-play text-2xl"></i> google play </a>
  </div>
  </div>

 <div className="mt-15 flex items-center justify-center 
                w-12 h-12 rounded-full 
                border-4 border-[#010a2e] 
                bg-[#010a2e]">
  <i className="fa-brands fa-instagram text-white text-2xl"></i>
</div>

<div className="mt-15 mb-10">
  <p className="text-gray-400 text-xs"><span className="font-bold">MUSINSA CO.</span>, may not be a direct seller but only intermediary for some product. In this case MUSINSA has limited liability for products, information and transactions.Please check the product detail on each product page.</p>
</div>
  </div>
 
</footer>


    </div>
  )
}

export default Shirts
