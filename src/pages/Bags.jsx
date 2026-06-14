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
import img211 from "../assets/line18/v-3.webp";


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




const Bags = ({ favorite, toggleFavorite }) => {
  return (
    <div>
      <div className="text-4xl font-bold text-center mt-35 text-gray-900">
        <h1><i class="fa-regular fa-heart"></i> MUSINSA STANDARD BAGS <i class="fa-regular fa-heart"></i></h1>
      </div>

<section className="mt-10 mx-30">
  {/* <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12"># LIVE BOLT: NEW BAGS</h1>
  </div> */}
       <img src={img165} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img166} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[401] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(401)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-600">Mini sloty bag [MINT]</p>
          <span className="text-sm font-bold text-red-800">$123</span>
          </div>
         </li>
      <li>
       <div className="relative">
        <img src={img167} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[402] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(402)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Sloty bag [SODA]</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$138</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img168} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[403] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(403)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-600">Ribbon gym sack blue check</p>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img169} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[404] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(404)}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-600">Mini pumpkin bag - butter cream</p>
         <span className="text-sm text-gray-600">11%</span>
          <span className="text-sm font-bold text-red-800">$45</span>
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
  <h2># SHOULDER BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img264} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[405] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(405)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FANCY CLUB</strong>
        <p className="text-sm text-gray-900">Belting washing leather bag</p>
        <span className="text-gray-600 text-sm font-normal">14% OFF</span>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img265} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[406] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(406)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-600">Women nylon slouch shoulder bag</p>
        <span className="text-gray-600 text-sm font-normal">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$58</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img266} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[407] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(407)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HALENE PARIS</strong>
        <p className="text-sm text-gray-900">Leather drapped soft hobo shoulder bag</p>
        <span className="text-gray-600 text-sm font-normal">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$101</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img267} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[408] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(408)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SQUARELINE</strong>
        <p className="text-sm text-gray-600">Nox __ black</p>
          <span className="text-sm font-bold text-red-800">$97</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># BAGPACK</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img268} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
         <i className={`cursor-pointer ${
            favorite[409] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(409)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-800">Women nylon mini bag</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img269} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[410] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(410)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">AVANDRESS</strong>
        <p className="text-sm text-black">Urban asythetic bagpack black</p>
        <span className="text-gray-600 text-sm font-normal">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$62</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img270} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[411] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(411)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women polka dot flapp mini bag</p>
          <span className="text-sm font-bold text-red-800">$80</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img271} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[412] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(412)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">OFFLIN</strong>
        <p className="text-sm text-gray-900">Ribbon string bagpack</p>
        <span className="text-gray-600 text-sm font-normal">9% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img272} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[413] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(413)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RINZ</strong>
        <p className="text-sm text-gray-900">Rose bagpack __Dusty pink</p>
          <span className="text-sm font-bold text-red-800">$83</span>
      </div>
    </li>
  </ul>
</div>
</section> 




<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># KIDS BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img77} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[414] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(414)}></i>
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
        <img src={img78} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[415] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(415)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
        <p className="text-sm text-gray-900">Bunny Bunny Bagpack</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img79} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[416] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(416)}></i>
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
            favorite[417] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(417)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
        <p className="text-sm text-gray-900">Brown bear Dumble Backpack</p>
          <span className="text-sm font-bold text-black-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img81} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[418] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(418)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNNREATH KIDS</strong>
        <p className="text-sm text-gray-900">kids Big Tag Backpack</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$68</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img82} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[419] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(419)}></i>
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

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 

<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># TOTES</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img273} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[420] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(420)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">UNIVERSE GARMENTS</strong>
        <p className="text-sm text-gray-900">Hug mini totes bags (bkue)</p>
          <span className="text-sm font-bold text-red=800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img274} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[421] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(421)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HAAG</strong>
        <p className="text-sm text-gray-900">A bread bag</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img275} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[422] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(422)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LORES</strong>
        <p className="text-sm text-gray-900">Patch work totes bags</p>
        <span className="text-gray-600 text-sm font-normal">5% OFF</span>
          <span className="text-sm font-bold text-red-800">$92</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img276} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[423] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(423)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FREEMARIO</strong>
        <p className="text-sm text-gray-900">Bun strap tote bag</p>
        <span className="text-gray-600 text-sm font-normal">33% OFF</span>
          <span className="text-sm font-bold text-red-800">$28</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img277} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[424] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(424)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">QUALPACK</strong>
        <p className="text-sm text-gray-900">Essiantial totes bag</p>
        <span className="text-gray-600 text-sm font-normal">15% OFF</span>
          <span className="text-sm font-bold text-red-800">$28</span>
      </div>
    </li>
  </ul>
</div>
</section> 

<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># CANVAS BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img278} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
            <i className={`cursor-pointer ${
            favorite[425] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(425)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">THEINNRS</strong>
        <p className="text-sm text-gray-900">Hoodie shopper bag</p>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img279} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[426] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(426)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SCEVICO</strong>
        <p className="text-sm text-gray-900">Charie bag</p>
          <span className="text-sm font-bold text-red-800">$52</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img281} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[427] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(427)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">URAGO</strong>
        <p className="text-sm text-gray-900">Little eco bag</p>
        <span className="text-gray-600 text-sm font-normal">3% OFF</span>
          <span className="text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img280} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[428] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(428)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">JELEVE</strong>
        <p className="text-sm text-gray-900">Estatic eco bag</p>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img282} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[429] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(429)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MASMARE</strong>
        <p className="text-sm text-gray-900">Rabbit eco bag</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$60</span>
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
  <h2># TRAVEL BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img283} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
            <i className={`cursor-pointer ${
            favorite[430] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(430)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSENT</strong>
        <p className="text-sm text-gray-900">Salo logo metal gym bag unisex</p>
        <span className="text-gray-600 text-sm font-normal">18% OFF</span>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img284} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[431] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(431)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-MEDIUM overflow-hidden text-ellipsis whitespace-nowrap w-53">RAWROW</strong>
        <p className="text-sm text-gray-900">Trip convine boston bag</p>
        <span className="text-gray-600 text-sm font-normal">5% OFF</span>
          <span className="text-sm font-bold text-red-800">$55</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img285} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[432] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(432)}></i>
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
        <img src={img286} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[433] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(433)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CREM SODA LAB</strong>
        <p className="text-sm text-gray-900">Gym training boston bag gray</p>
        <span className="text-gray-600 text-sm font-normal">36% OFF</span>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img287} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[434] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(434)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NOICE</strong>
        <p className="text-sm text-gray-900">Crack leather travel bag</p>
        <span className="text-gray-600 text-sm font-normal">29% OFF</span>
          <span className="text-sm font-bold text-red-800">$78</span>
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
  <h2># BELT BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img288} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
            <i className={`cursor-pointer ${
            favorite[435] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(435)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PEPPERSEASONING</strong>
        <p className="text-sm text-gray-900">Essiential waist bag</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img289} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[436] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(436)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SOMEWHEREBUTTER</strong>
        <p className="text-sm text-gray-900">Teddy waist bag</p>
          <span className="text-sm font-bold text-red-800">$59</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img290} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[437] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(437)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RAWROW</strong>
        <p className="text-sm text-gray-900">Triple conveni hip bag</p>
           <span className="text-gray-600 text-sm font-normal">06% OFF</span>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img291} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[438] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(438)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATHEMATIC</strong>
        <p className="text-sm text-gray-900">Steverd cross body bag</p>
          <span className="text-gray-600 text-sm font-normal">9% OFF</span>
          <span className="text-sm font-bold text-red-800">$46</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img292} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[439] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(439)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">AS YOU ARE</strong>
        <p className="text-sm text-gray-900">cow hide belt bag</p>
          <span className="text-gray-600 text-sm font-normal">9% OFF</span>
          <span className="text-sm font-bold text-red-800">$81</span>
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
  <h2># WALLETS / POUCHES</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img294} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
           <i className={`cursor-pointer ${
            favorite[440] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(440)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">COLD BLANKET</strong>
        <p className="text-sm text-gray-900">Cloud laptop pouch</p>
          <span className="text-gray-600 text-sm font-normal">29% OFF</span>
          <span className="text-sm font-bold text-red-800">$67</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img293} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[441] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(441)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NEATA</strong>
        <p className="text-sm text-gray-900">A Capo case</p>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img295} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[442] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(442)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ALL NEW FRAME</strong>
        <p className="text-sm text-gray-900">Airi mini pouch</p>
          <span className="text-gray-600 text-sm font-normal">15% OFF</span>
          <span className="text-sm font-bold text-red-800">$11</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img296} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[443] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(443)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SWEETCH</strong>
        <p className="text-sm text-gray-900">Hnadle pouch gloosy black</p>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img297} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[444] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(444)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">VANWALK</strong>
        <p className="text-sm text-gray-900">Fruity friends notebook pouch</p>
          <span className="text-gray-600 text-sm font-normal">37% OFF</span>
          <span className="text-sm font-bold text-red-800">$44</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># BAGS ACCESSORIES</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img298} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[445] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(445)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CLAVE</strong>
        <p className="text-sm text-gray-900">Flower charm</p>
          <span className="text-sm font-bold text-red-800">$57</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img299} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[446] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(446)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CLAVE</strong>
        <p className="text-sm text-gray-900">Mini horse charm</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img300} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[447] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(447)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RAVIE</strong>
        <p className="text-sm text-gray-900">Lovely charm</p>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img301} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[448] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(448)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RAWROW</strong>
        <p className="text-sm text-gray-900">Lovely flower charm</p>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img302} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[449] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(449)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LOEVRE</strong>
        <p className="text-sm text-gray-900">Frange charm</p>
          <span className="text-sm font-bold text-red-800">$48</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># CLUTCHES</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img303} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[450] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(450)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATT</strong>
        <p className="text-sm text-gray-900">Canvas men's leather clutch</p>
          <span className="text-sm font-bold text-red-800">$80</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img304} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[451] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(451)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MONOFLUX</strong>
        <p className="text-sm text-gray-900">Sponge pocket clutch bag</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img305} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[452] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(452)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ZOEET</strong>
        <p className="text-sm text-gray-900">Stand mini cross bag</p>
          <span className="text-sm font-bold text-red-800">$82</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img306} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[453] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(453)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATT</strong>
        <p className="text-sm text-gray-900">Shrunken leather men's clutch bag</p>
          <span className="text-sm font-bold text-red-800">$130</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img307} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[454] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
            }`}
          onClick={() => toggleFavorite(454)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MONOFLUX</strong>
        <p className="text-sm text-gray-900">2 tone clutch bag</p>
          <span className="text-sm font-bold text-red-800">$68</span>
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
  <h2># SPORTS BAGS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img308} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
           <i className={`cursor-pointer ${
            favorite[455] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(455)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD SPORTS</strong>
        <p className="text-sm text-gray-900">Sports backpack</p>
         <span className="text-gray-600 text-sm font-normal">14% OFF</span>
          <span className="text-lg font-bold text-black-600">$44</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img309} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[456] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(456)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HDEX</strong>
        <p className="text-sm text-gray-900">Glossy nylon doffel bag</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img310} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[457] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(457)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KODAK</strong>
        <p className="text-sm text-gray-900">Large cross body bag</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img311} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[458] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(458)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DREEMYDEAR</strong>
        <p className="text-sm text-gray-900">logo aports duffel bags</p>
          <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img312} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[459] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(459)}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BARBELLWORK</strong>
        <p className="text-sm text-gray-900">Gym boston bag</p>
         <span className="text-gray-600 text-sm font-normal">42% OFF</span>
          <span className="text-sm font-bold text-red-800">$48</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-25 mx-30">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-15">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img309} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">MUSINSA STANDARD SPORT</p>
      </div>
      <div>
        <img src={img296} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">SWEETCH</p>
      </div>
      <div>
        <img src={img264} alt="musinsa" />
        <p className="text-left mt-4 text-2xl">FANCY CLUB</p>
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

export default Bags
