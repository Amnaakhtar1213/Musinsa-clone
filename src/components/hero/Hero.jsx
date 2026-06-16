import React, { useState } from 'react'
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
import img53 from "../../assets/line5/h-1.webp";
import img54 from "../../assets/line5/h-2.webp";
import img55 from "../../assets/line5/h-3.webp";
import img56 from "../../assets/line5/h-4.webp";
import img57 from "../../assets/line5/h-5.webp";
import img58 from "../../assets/line5/h-6.webp";
import img59 from "../../assets/line5/h-7.webp";
import img60 from "../../assets/line5/h-8.webp";
import img61 from "../../assets/line5/h-9.webp";
import img62 from "../../assets/line5/h-10.webp";
import img63 from "../../assets/line5/h-11.webp";
import img64 from "../../assets/line5/h-12.webp";
import img65 from "../../assets/line6/J-1.webp";
import img66 from "../../assets/line6/J-2.webp";
import img67 from "../../assets/line6/J-3.webp";
import img68 from "../../assets/line6/J-4.webp";
import img69 from "../../assets/line6/J-5.webp";
import img70 from "../../assets/line6/J-6.webp";
import img71 from "../../assets/line6/J-7.webp";
import img72 from "../../assets/line6/J-9.webp";
import img73 from "../../assets/line6/J-10.webp";
import img74 from "../../assets/line7/D-5.webp"
import img75 from "../../assets/line7/D-6.webp";
import img76 from "../../assets/line7/D-7.webp";
import img77 from "../../assets/line8/k-1.webp";
import img78 from "../../assets/line8/k-2.webp";
import img79 from "../../assets/line8/k-3.webp";
import img80 from "../../assets/line8/k-4.webp";
import img81 from "../../assets/line8/k-5.webp";
import img82 from "../../assets/line8/k-6.webp";
import img83 from "../../assets/line9/k-7.webp";
import img84 from "../../assets/line9/k-8.webp";
import img85 from "../../assets/line9/k-9.webp";
import img86 from "../../assets/line9/k-10.webp";
import img87 from "../../assets/line9/k-11.webp";
import img88 from "../../assets/line9/k-12.webp";
import img89 from "../../assets/line10/b1.webp";
import img90 from "../../assets/line10/b2.webp";
import img91 from "../../assets/line10/b3.webp";
import img92 from "../../assets/line10/b4.webp";
import img93 from "../../assets/line10/b5.webp";
import img94 from "../../assets/line10/b6.webp";
import img95 from "../../assets/line10/b7.webp";
import img96 from "../../assets/line10/b8.webp";
import img97 from "../../assets/line10/b9.webp";
import img98 from "../../assets/line10/b10.webp";
import img99 from "../../assets/line10/b11.webp";
import img100 from "../../assets/line10/b12.webp";
import img101 from "../../assets/line11/a1.webp";
import img102 from "../../assets/line11/a2.webp";
import img103 from "../../assets/line11/a3.webp";
import img104 from "../../assets/line11/a4.webp";
import img105 from "../../assets/line11/a5.webp";
import img106 from "../../assets/line11/a6.webp";
import img107 from "../../assets/line12/d7.webp";
import img108 from "../../assets/line12/d8.webp";
import img109 from "../../assets/line12/d9.webp";
import img110 from "../../assets/line12/d10.webp";
import img111 from "../../assets/line12/d11.webp";
import img112 from "../../assets/line12/d12.webp";
import img113 from "../../assets/line12/d13.webp";
import img114 from "../../assets/line12/d14.webp";
import img115 from "../../assets/line12/d15.webp";
import img116 from "../../assets/line12/d16.webp";
import img117 from "../../assets/line12/d17.webp";
import img118 from "../../assets/line12/d18.webp";
import img119 from "../../assets/line12/d19.webp";
import img120 from "../../assets/line12/d20.webp";
import img121 from "../../assets/line12/d21.webp";
import img122 from "../../assets/line12/d22.webp";
import img123 from "../../assets/line12/d23.webp";
import img124 from "../../assets/line12/d24.webp";
import img125 from "../../assets/line13/c-1.webp";
import img126 from "../../assets/line13/c-2.webp";
import img127 from "../../assets/line13/c-3.webp";
import img128 from "../../assets/line13/c-4.webp";
import img129 from "../../assets/line13/c-5.webp";
import img130 from "../../assets/line13/c-6.webp";
import img131 from "../../assets/line13/c-7.webp";
import img132 from "../../assets/line13/c-8.webp";
import img133 from "../../assets/line13/c-9.webp";
import img134 from "../../assets/line13/c-10.webp";
import img135 from "../../assets/line14/c-11.webp";
import img136 from "../../assets/line14/c-12.webp";
import img137 from "../../assets/line14/c-13.webp";
import img138 from "../../assets/line14/c-14.webp";
import img139 from "../../assets/line14/c-15.webp";
import img140 from "../../assets/line14/g-8.webp";
import img141 from "../../assets/line14/g-9.webp";
import img142 from "../../assets/line14/g-10.webp";
import img143 from "../../assets/line14/g-11.webp";
import img144 from "../../assets/line14/g-12.webp";
import img145 from "../../assets/line15/a7.webp";
import img146 from "../../assets/line15/a8.webp";
import img147 from "../../assets/line15/a9.webp";
import img148 from "../../assets/line15/a10.webp";
import img149 from "../../assets/line15/a11.webp";
import img150 from "../../assets/line15/n-1.webp";
import img151 from "../../assets/line15/n-2.webp";
import img152 from "../../assets/line15/n-3.webp";
import img153 from "../../assets/line15/n-4.webp";
import img154 from "../../assets/line15/n-5.webp";
import img155 from "../../assets/line15/n-6.webp";
import img156 from "../../assets/line15/n-7.webp";
import img157 from "../../assets/line15/n-8.webp";
import img158 from "../../assets/line15/n-9.webp";
import img159 from "../../assets/line15/n-10.webp";
import img160 from "../../assets/line15/n-11.webp";
import img161 from "../../assets/line15/n-12.webp";
import img162 from "../../assets/line15/n-13.webp";
import img163 from "../../assets/line15/n-14.webp";
import img164 from "../../assets/line15/n-15.webp";
import img165 from "../../assets/line15/n-16.webp";
import img166 from "../../assets/line15/n-17.webp";
import img167 from "../../assets/line15/n-18.webp";
import img168 from "../../assets/line15/n-19.webp";
import img169 from "../../assets/line15/n-20.webp";
import img170 from "../../assets/line16/p-1.webp";
import img171 from "../../assets/line16/p-2.webp";
import img172 from "../../assets/line16/p-3.webp";
import img173 from "../../assets/line16/p-4.webp";
import img174 from "../../assets/line16/p-5.webp";
import img175 from "../../assets/line16/p-6.webp";
import img176 from "../../assets/line16/p-7.webp";
import img177 from "../../assets/line16/p-8.webp";
import img178 from "../../assets/line16/p-9.webp";
import img179 from "../../assets/line16/p-10.webp";
import img180 from "../../assets/line16/p-11.webp";
import img181 from "../../assets/line16/p-12.webp";
import img182 from "../../assets/line16/p-13.webp";
import img183 from "../../assets/line16/p-14.webp";
import img184 from "../../assets/line16/p-15.webp";
import img185 from "../../assets/line16/p-16.webp";
import img186 from "../../assets/line16/p-17.webp";
import img187 from "../../assets/line17/q-1.webp";
import img188 from "../../assets/line17/q-2.webp";
import img189 from "../../assets/line17/q-3.webp";
import img190 from "../../assets/line17/q-4.webp";
import img191 from "../../assets/line17/q-5.webp";
import img192 from "../../assets/line17/q-6.webp";
import img193 from "../../assets/line17/q-7.webp";
import img194 from "../../assets/line17/q-8.webp";
import img195 from "../../assets/line17/q-9.webp";
import img196 from "../../assets/line17/q-10.webp";
import img197 from "../../assets/line17/q-11.webp";
import img198 from "../../assets/line17/q-12.webp";
import img199 from "../../assets/line17/q-13.webp";
import img200 from "../../assets/line17/q-14.webp";
import img201 from "../../assets/line17/q-15.webp";
import img202 from "../../assets/line17/q-16.webp";
import img203 from "../../assets/line17/q-17.webp";
import img204 from "../../assets/line17/q-18.webp";
import img205 from "../../assets/line11/r-1.webp";
import img206 from "../../assets/line11/r-2.webp";
import img207 from "../../assets/line11/r-3.webp";

import img208 from "../../assets/line18/t-1.webp";
import img209 from "../../assets/line18/v-1.webp";
import img210 from "../../assets/line18/v-2.webp";
import img211 from "../../assets/line18/v-3.webp";


import img212 from "../../assets/line21/x-1.webp";
import img213 from "../../assets/line21/x-2.webp";
import img214 from "../../assets/line21/x-3.webp";
import img215 from "../../assets/line21/x-4.webp";
import img216 from "../../assets/line21/x-5.webp";
import img217 from "../../assets/line21/x-6.webp";
import img218 from "../../assets/line21/x-7.webp";
import img219 from "../../assets/line21/x-8.webp";
import img220 from "../../assets/line21/x-9.webp";
import img221 from "../../assets/line21/x-10.webp";
import img222 from "../../assets/line21/x-11.webp";
import img223 from "../../assets/line21/x-12.webp";
import img224 from "../../assets/line21/x-13.webp";
import img225 from "../../assets/line21/x-14.webp";
import img226 from "../../assets/line21/x-15.webp";
import img227 from "../../assets/line21/x-16.webp";
import img228 from "../../assets/line21/x-17.webp";
import img229 from "../../assets/line21/x-18.webp";
import img230 from "../../assets/line21/x-19.webp";
import img231 from "../../assets/line21/x-20.webp";
import img232 from "../../assets/line21/x-21.webp";
import img233 from "../../assets/line21/x-22.webp";
import img234 from "../../assets/line21/x-23.webp";
import img235 from "../../assets/line21/x-24.webp";
import img236 from "../../assets/line21/x-25.webp";
import img237 from "../../assets/line21/x-26.webp";
import img238 from "../../assets/line21/x-27.webp";
import img239 from "../../assets/line21/x-28.webp";
import img240 from "../../assets/line21/x-29.webp";
import img241 from "../../assets/line21/x-30.webp";
import img242 from "../../assets/line21/x-31.webp";
import img243 from "../../assets/line21/x-32.webp";
import img244 from "../../assets/line21/x-33.webp";
import img245 from "../../assets/line21/x-34.webp";
import img246 from "../../assets/line21/x-35.webp";
import img247 from "../../assets/line21/x-36.webp";
import img248 from "../../assets/line21/x-37.webp";
import img249 from "../../assets/line21/x-38.webp";
import img250 from "../../assets/line21/x-39.webp";
import img251 from "../../assets/line21/x-40.webp";
import img252 from "../../assets/line21/x-41.webp";
import img253 from "../../assets/line21/x-42.webp";
import img254 from "../../assets/line21/x-43.webp";
import img255 from "../../assets/line21/x-44.webp";
import img256 from "../../assets/line21/x-45.webp";
import img257 from "../../assets/line21/x-46.webp";
import img258 from "../../assets/line21/x-47.webp";
import img259 from "../../assets/line21/x-48.webp";
import img260 from "../../assets/line21/x-49.webp";
import img261 from "../../assets/line21/x-50.webp";
import img262 from "../../assets/line21/x-51.webp";

import img263 from "../../assets/line22/v-4.webp";
import img264 from "../../assets/line22/v-5.webp";
import img265 from "../../assets/line22/v-6.webp";
import img266 from "../../assets/line22/v-7.webp";
import img267 from "../../assets/line22/v-8.webp";
import img268 from "../../assets/line22/v-9.webp";
import img269 from "../../assets/line22/v-10.webp";
import img270 from "../../assets/line22/v-11.webp";
import img271 from "../../assets/line22/v-12.webp";
import img272 from "../../assets/line22/v-13.webp";
import img273 from "../../assets/line22/v-14.webp";
import img274 from "../../assets/line22/v-15.webp";
import img275 from "../../assets/line22/v-16.webp";
import img276 from "../../assets/line22/v-17.webp";
import img277 from "../../assets/line22/v-18.webp";
import img278 from "../../assets/line22/v-19.webp";
import img279 from "../../assets/line22/v-20.webp";
import img280 from "../../assets/line22/v-21.webp";
import img281 from "../../assets/line22/v-24.webp";
import img282 from "../../assets/line22/v-25.webp";
import img283 from "../../assets/line22/v-26.webp";
import img284 from "../../assets/line22/v-27.webp";
import img285 from "../../assets/line22/v-28.webp";
import img286 from "../../assets/line22/v-29.webp";
import img287 from "../../assets/line22/v-30.webp";
import img288 from "../../assets/line22/v-31.webp";
import img289 from "../../assets/line22/v-32.webp";
import img290 from "../../assets/line22/v-33.webp";
import img291 from "../../assets/line22/v-34.webp";
import img292 from "../../assets/line22/v-35.webp";
import img293 from "../../assets/line22/v-36.webp";
import img294 from "../../assets/line22/v-37.webp";
import img295 from "../../assets/line22/v-38.webp";
import img296 from "../../assets/line22/v-39.webp";
import img297 from "../../assets/line22/v-40.webp";
import img298 from "../../assets/line22/v-41.webp";
import img299 from "../../assets/line22/v-42.webp";
import img300 from "../../assets/line22/v-43.webp";
import img301 from "../../assets/line22/v-44.webp";
import img302 from "../../assets/line22/v-45.webp";
import img303 from "../../assets/line22/v-46.webp";
import img304 from "../../assets/line22/v-47.webp";
import img305 from "../../assets/line22/v-48.webp";
import img306 from "../../assets/line22/v-49.webp";
import img307 from "../../assets/line22/v-50.webp";
import img308 from "../../assets/line22/v-52.webp";
import img309 from "../../assets/line22/v-53.webp";
import img310 from "../../assets/line22/v-54.webp";
import img311 from "../../assets/line22/v-55.webp";
import img312 from "../../assets/line22/v-56.webp";


import img313 from "../../assets/line18/s-6.webp";
import img314 from "../../assets/line18/s-7.webp";
import img315 from "../../assets/line18/s-8.webp";
import img316 from "../../assets/line18/s-9.webp";
import img317 from "../../assets/line18/s-10.webp";
import img318 from "../../assets/line18/s-11.webp";
import img319 from "../../assets/line18/s-12.webp";
import img320 from "../../assets/line18/s-13.webp";
import img321 from "../../assets/line18/s-14.webp";
import img322 from "../../assets/line18/s-15.webp";
import img323 from "../../assets/line18/s-16.webp";
import img324 from "../../assets/line18/s-17.webp";
import img325 from "../../assets/line18/s-18.webp";
import img326 from "../../assets/line18/s-19.webp";
import img327 from "../../assets/line18/s-20.webp";
import img328 from "../../assets/line18/s-21.webp";
import img329 from "../../assets/line18/s-22.webp";
import img330 from "../../assets/line18/s-23.webp";
import img331 from "../../assets/line18/s-24.webp";
import img332 from "../../assets/line18/s-25.webp";
import img333 from "../../assets/line18/S-27.webp";
import img334 from "../../assets/line18/s-28.webp";
import img335 from "../../assets/line18/S-30.webp";
import img336 from "../../assets/line18/S-31.webp";
import img337 from "../../assets/line18/S-32.webp";
import img338 from "../../assets/line18/S-33.webp";
import img339 from "../../assets/line18/S-34.webp";

import img340 from "../../assets/line9/d5.webp";
import img341 from "../../assets/line9/d6.webp";
import img342 from "../../assets/line9/d-11.webp";
import img343 from "../../assets/line9/d-12.webp";
import img344 from "../../assets/line9/d-14.webp";
import img345 from "../../assets/line9/d-21.webp";
import img346 from "../../assets/line9/d-22.webp";
import img347 from "../../assets/line9/d-23.webp";
import img348 from "../../assets/line9/d-24.webp";
import img349 from "../../assets/line9/d-25.webp";
import img350 from "../../assets/line9/d-26.webp";
import img351 from "../../assets/line9/d-27.webp";
import img352 from "../../assets/line9/d-28.webp";
import img353 from "../../assets/line9/d-29.webp";
import img354 from "../../assets/line9/d-30.webp";
import img355 from "../../assets/line9/d-16.webp";
import img356 from "../../assets/line9/d-17.webp";
import img357 from "../../assets/line9/d-18.webp";
import img358 from "../../assets/line9/d-19.webp";
import img359 from "../../assets/line9/d-20.webp";

import img360 from "../../assets/line8/k-20.webp";
import img361 from "../../assets/line8/k-21.webp";
import img362 from "../../assets/line8/k-22.webp";
import img363 from "../../assets/line8/k-24.webp";
import img364 from "../../assets/line8/k-25.webp";
import img365 from "../../assets/line8/k-26.webp";
import img366 from "../../assets/line8/k-27.webp";
import img367 from "../../assets/line8/k-28.webp";
import img368 from "../../assets/line8/k-29.webp";
import img369 from "../../assets/line8/k-30.webp";
import img370 from "../../assets/line8/k-31.webp";
import img371 from "../../assets/line8/k-32.webp";
import img372 from "../../assets/line8/k-33.webp";
import img373 from "../../assets/line8/k-34.webp";
import img374 from "../../assets/line8/k-35.webp";
import img375 from "../../assets/line8/k-36.webp";
import img376 from "../../assets/line8/k-37.webp";
import img377 from "../../assets/line8/k-38.webp";
import img378 from "../../assets/line8/k-39.webp";
import img379 from "../../assets/line8/k-40.webp";
import img380 from "../../assets/line8/k-41.webp";
import img381 from "../../assets/line8/k-42.webp";
import img382 from "../../assets/line8/k-43.webp";
import img383 from "../../assets/line8/k-44.webp";
import img384 from "../../assets/line8/k-45.webp";
import img385 from "../../assets/line8/k-46.webp";
import img386 from "../../assets/line8/k-47.webp";
import img387 from "../../assets/line8/k-48.webp";


import { HomeMap } from '../../data/HomeMap.jsx'



const Hero = ({ favorite, toggleFavorite }) => {
   return (
    <div>
      <div className="flex items-center justify-center h-10 bg-gray-100 mt-35">
        <p>Start shopping on our APP and get 15% OFF | WLCMAPP</p>
      </div>

<div className="mx-30">
  <div className="flex justify-center gap-4 mt-4">
     {/*<img src={img1} alt="img-1" className="w-1/4 h-auto"></img>
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
      
{/* <div className=" mx-40 mt-5 flex flex-row gap-4 justify-center items-center">
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
</div> */}

<div className="mx-40 mt-5 flex flex-row gap-3 justify-center items-center">
      <a href="#" className="relative">
       <div className="bg-fuchsia-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-regular fa-face-smile-wink ml-15 mt-3 text-fuchsia-500"></i></div>
        <span className="mt-2 absolute bottom-1 text-xs left-5 tracking-tighter">EXCLUSIVE BEAUTY</span>
      </a>
       <a href="#" className="relative">
        <div className="bg-gray-300 w-[150px] h-[56px] rounded mx-auto"><i className="fa-solid fa-shirt ml-15 mt-3 text-gray-900 text-lg"></i></div>
        <span className="mt-1 text-xs absolute bottom-1 left-12 tracking-tighter">GRAVER</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-blue-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-solid fa-bag-shopping ml-15 mt-3 text-blue-500 text-lg"></i></div>
        <span className="mt-2 text-xs absolute bottom-1 left-6 tracking-tighter">TRENDING BAGS</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-cyan-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-regular fa-calendar-days ml-15 mt-3 text-cyan-700"></i></div>
        <span className="mt-2 text-xs absolute bottom-1 left-8 tracking-tighter ">SEASON SALE</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-emerald-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-solid fa-person-dress ml-15 mt-3 text-emerald-500"></i></div>
        <span className="mt-2 text-xs absolute bottom-1 left-8 tracking-tighter">MUAHMUAH</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-indigo-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-brands fa-redhat ml-15 mt-3 text-indigo-500"></i></div>
        <span className="mt-2 text-xs absolute bottom-1 left-3 tracking-tighter">SUMMER ESSIANTIALS</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-pink-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-brands fa-black-tie ml-15 mt-3 text-pink-400"></i></div>
        <span className="mt-2 text-xs absolute bottom-1 left-12 tracking-tighter">GRAVER</span>
      </a>
       <a href="#" className="relative">
       <div className="bg-lime-200 w-[150px] h-[56px] rounded mx-auto"><i className="fa-solid fa-heart ml-15 mt-3 text-lime-600"></i></div>
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
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
         <i className={`cursor-pointer ${
            favorite[24] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(24, HomeMap[24])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Denim pants with back side cross</p>
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
            favorite[25] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(25, HomeMap[25])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Summer half-sleeves yellow shirt</p>
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
            favorite[26] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(26, HomeMap[26])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Denim cap with adjustable strap [blue]</p>
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
            favorite[27] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(27, HomeMap[27])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Grese letter printing on plan black shirt</p>
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
            favorite[28] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(28, HomeMap[28])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Grese letter slim t-shirt best summer outfit</p>
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
            favorite[29] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(29, HomeMap[29])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Women slim T-shirt best for summers (5 colors)</p>
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
            favorite[30] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(30, HomeMap[30])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ESCAPEFROM</strong>
        <p className="text-sm text-black">Start denim escf logo college print slim fit</p>
        <span className="text-gray-600 text-sm">75% OFF</span>
          <span className="text-sm font-bold text-red-800">$24</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img34} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[31] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(31, HomeMap[31])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MAISON MINED</strong>
        <p className="text-sm text-black">Dooodle heart half t white greyish blue</p>
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
            favorite[32] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(32, HomeMap[32])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold">ESCAPEFROM</strong>
        <p className="text-sm text-black">Stawberry dot edcf logo collage print oversize</p>
          <span className="text-gray-600 text-sm">70% OFF</span>
          <span className="text-sm font-bold text-red-800">$26</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img36} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[33] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(33, HomeMap[33])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">VENHIT</strong>
        <p className="text-sm text-black">Mrt vivid slim short sleeve summer season t shirt </p>
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
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-yellow-500 px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[34] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(34, HomeMap[34])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Real Wide Hidden Banding Slacks [Black]</p>
        <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img38} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Weekly Deals</span>
         <i className={`cursor-pointer ${
            favorite[35] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(35, HomeMap[35])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">BAUF</strong>
        <p className="text-sm text-black">3 Logo Dot Slim Fit T-shirt [Red]</p>
         <span className="text-gray-600 text-sm">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img39} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[36] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(36, HomeMap[36])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ILLUMINATE</strong>
        <p className="text-sm text-black">Damage Washed Denim Pants Medium Blue</p>
          <span className="text-black-800 text-sm">25% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img40} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[37] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(37, HomeMap[37])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">BAUF</strong>
        <p className="text-sm text-black">Grese letter printing on plan black shirt</p>
         <span className="text-gray-600 text-sm">25% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img41} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[38] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(38, HomeMap[38])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium"></strong>
        <p className="text-sm text-black">D Logo Dot Slippers</p>
          <span className="text-gray-600 text-sm">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img42} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[39] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(39, HomeMap[39])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">COVERNET</strong>
        <p className="text-sm text-black">gray's slim fit t-shirt sleeve half</p>
          <span className="text-gray-600 text-sm">35% OFF</span>
          <span className="text-sm font-bold text-red-800">$24</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


 <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># CAPS AND HATS</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img212} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[40] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(40, HomeMap[40])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53 mt-2">MELLY&ROSE</strong>
              <p className="text-sm text-black">Rose Ribbon bal cap</p>
                <span className="text-sm font-bold text-red-800">$34</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img213} alt="SCALLYWANG" className="w-64 h-65 object-cover"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[41] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(41, HomeMap[41])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ALLINCOMPLETE</strong>
              <p className="text-sm text-black">Logo jackquard beanie</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img214} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[42] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-400"
          }`}
          onClick={() => toggleFavorite(42, HomeMap[42])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ILLIGO</strong>
              <p className="text-sm text-black">Dot button newsboy cap</p>
                <span className="text-sm font-bold text-red-800">$32</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img215} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[43] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(43, HomeMap[43])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHARMY</strong>
              <p className="text-sm text-black">Mandy bucket hat</p>
                <span className="text-sm font-bold text-red-800">$26</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img216} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[44] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(44, HomeMap[44])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SLEEPY SLIP</strong>
              <p className="text-sm text-black">Paros Sun visior</p>
                <span className="text-sm font-bold text-red-800">$50</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img217} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[45] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(45, HomeMap[45])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LIFEWORK</strong>
              <p className="text-sm text-black">Pigment-washed bucket hat</p>
                <span className="text-sm font-bold text-red-800">$26</span>
            </div>
          </li>
        </ul>
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
            favorite[46] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(46, HomeMap[46])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FANCY CLUB</strong>
        <p className="text-sm text-black">Belting washing leather bag</p>
        <span className="text-gray-600 text-sm font-normal">14% OFF</span>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img265} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[47] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(47, HomeMap[47])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women nylon slouch shoulder bag</p>
        <span className="text-gray-600 text-sm font-normal">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$58</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img266} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[48] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(48, HomeMap[48])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HALENE PARIS</strong>
        <p className="text-sm text-black">Leather drapped soft hobo shoulder bag</p>
        <span className="text-gray-600 text-sm font-normal">19% OFF</span>
          <span className="text-sm font-bold text-red-800">$101</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img267} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[49] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(49, HomeMap[49])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SQUARELINE</strong>
        <p className="text-sm text-black">Nox __ black</p>
          <span className="text-sm font-bold text-red-800">$97</span>
      </div>
    </li>
    
  </ul>
</div>
</section> 

<section className="mt-16">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># TRACK PANTS/JOGGERS</h2>
</div>


<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img318} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[50] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(50, HomeMap[50])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SCALLYWANG</strong>
        <p className="text-sm text-black">Small logo multi tuck sweatpant</p>
        <span className="text-gray-600 text-sm">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img319} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[51] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(51, HomeMap[51])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STARDARD WOMEN</strong>
        <p className="text-sm text-black">Women cooling jersey wide pants</p>
         <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img320} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[52] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(52, HomeMap[52])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SEW-B</strong>
        <p className="text-sm text-black">Camo boldy wide training pants</p>
          <span className="text-sm font-bold text-red-800">$55</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img321} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[53] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(53, HomeMap[53])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">NOT4NERD</strong>
        <p className="text-sm text-black">Parachute cargo pant</p>
         <span className="text-gray-600 text-sm">25% OFF</span>
          <span className="text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img322} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[54] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(54, HomeMap[54])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STARDARD WOMEN</strong>
        <p className="text-sm text-black">Women double knit denim wide sweat pants</p>
          <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$32</span>
      </div>
    </li>
   
  </ul>
</div>

{/* <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div> */}
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


<section className="mt-16">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2># DRESSES & SKIRTS</h2>
</div>
<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img335} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[55] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(55, HomeMap[55])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Women nylon long skirt</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img336} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[56] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(56, HomeMap[56])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SINCETHEN</strong>
        <p className="text-sm text-black">Fairy ruffel long dress</p>
          <span className="text-sm font-bold text-red-800">$131</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img337} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[57] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(57, HomeMap[57])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">KHAKIPOINT</strong>
        <p className="text-sm text-black">Nua mini dress</p>
          <span className="text-sm font-bold text-red-800">$100</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img338} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
        <i className={`cursor-pointer ${
            favorite[58] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(58, HomeMap[58])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">ILLIGO</strong>
        <p className="text-sm text-black">Puff frill white dress</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img339} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[59] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(59, HomeMap[59])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">SOUP</strong>
        <p className="text-sm text-black">sleeveless dress layer setup</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
   
  </ul>
</div>
</section> 




 <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># MUFFLERS</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img218} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[60] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(60, HomeMap[60])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHISCHIS</strong>
              <p className="text-sm text-black">Red wool muffler</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img219} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[61] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(61, HomeMap[61])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">WASCARA</strong>
              <p className="text-sm text-black">Classic wool muffler</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img220} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[62] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(62, HomeMap[62])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LEKIM</strong>
              <p className="text-sm text-black">Faux fur muffler</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
             <div className="relative">
              <img src={img221} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[63] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(63, HomeMap[63])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CPGN STUDIO</strong>
              <p className="text-sm text-black">Cat stitch strip muffler</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img222} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[64] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(64, HomeMap[64])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PERMANENT ARCHIEVE</strong>
              <p className="text-sm text-black">Brush long knit scarf</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img223} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[65] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(65, HomeMap[65])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BP2 DISORDER</strong>
              <p className="text-sm text-black">Gray hd muffler</p>
                <span className="text-sm font-bold text-red-800">$36</span>
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
            favorite[66] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(66, HomeMap[66])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women nylon mini bag</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img269} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[67] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(67, HomeMap[67])}></i>
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
            favorite[68] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(68, HomeMap[68])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women polka dot flapp mini bag</p>
          <span className="text-sm font-bold text-red-800">$80</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img271} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[69] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(69, HomeMap[69])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">OFFLIN</strong>
        <p className="text-sm text-black">Ribbon string bagpack</p>
        <span className="text-gray-600 text-sm font-normal">9% OFF</span>
          <span className="text-sm font-bold text-red-800">$29</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img272} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[70] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(70, HomeMap[70])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RINZ</strong>
        <p className="text-sm text-black">Rose bagpack __Dusty pink</p>
          <span className="text-sm font-bold text-red-800">$83</span>
      </div>
    </li>
  </ul>
</div>
</section> 



<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD WOMEN: TOP SELLERS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img47} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[71] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(71, HomeMap[71])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Women Slim Crew Neck T-Shirt(5 colors)</p>
        <span className="text-gray-600">23% OFF</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[72] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(72, HomeMap[72])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women Cotton curved Pants (3 color)</p>
         <span className="text-gray-600">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img50} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2text-base">Extra 30% OFF</span>
        <i className={`cursor-pointer ${
            favorite[73] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(73, HomeMap[73])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women Wide Cargo Pants[black]</p>
          <span className="text-gray-600">29% OFF</span>
          <span className="text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img51} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
         <i className={`cursor-pointer ${
            favorite[74] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(74, HomeMap[74])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Women Ribbed slim scoop neck layered jersey</p>
         <span className="text-gray-600">40% OFF</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img52} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[75] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(75, HomeMap[75])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Women Polka Long sleeves t-shirt</p>
          <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img46} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[76] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(76, HomeMap[76])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women low rise Flare Slacks [Black]</p>
          <span className="text-gray-600">25% OFF</span>
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
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>Your Favorite Brands</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img53} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center ">
          <span className=" bg-black text-green-800 font-base px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[77] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(77, HomeMap[77])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Unseen Dew Glow Balm 9 Types</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[78] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(78, HomeMap[78])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Tint Ribbon Keyring</p>
          <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img58} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[79] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(79, HomeMap[79])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Skin Sync up Cushion 2 Types</p>
          <span className="text-sm font-bold text-red-800">$11</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img56} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[80] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(80, HomeMap[80])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Oddtype Cat Keyring [black]</p>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img55} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[81] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(81, HomeMap[81])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Mirror Pounch [Silver]</p>
          <span className="text-sm font-bold text-red-800">$9</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img57} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[82] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(82, HomeMap[82])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Unveil skin Highlighter 2 colors</p>
          <span className="text-sm font-bold text-red-800">$16</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-12">

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img59} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center ">
          <span className=" bg-black text-green-800 font-base px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[83] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(83, HomeMap[83])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Unlimited Curl lift Mascara [New]</p>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img60} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[84] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(84, HomeMap[84])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">[Lip Tattoo Pack] Peel off Lip Stain</p>
          <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img61} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[85] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(85, HomeMap[85])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Unseen blur Tint [14 Type]</p>
          <span className="text-sm font-bold text-red-800">$11</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img62} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[86] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(86, HomeMap[86])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Unseen Mirror Tint [10 Type]</p>
          <span className="text-sm font-bold text-red-800">$10</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img63} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[87] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(87, HomeMap[87])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Ballon Tint X Heart Pocket T-Shirt</p>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img64} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-800 px-2 text-base">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[88] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(88, HomeMap[88])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ODDTYPE</strong>
        <p className="text-sm text-black">Sync Up over Spreader</p>
          <span className="text-sm font-bold text-red-800">$9</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP ODDTYPE</button>
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
            favorite[89] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(89, HomeMap[89])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSENT</strong>
        <p className="text-sm text-black">Salo logo metal gym bag unisex</p>
        <span className="text-gray-600 text-sm font-normal">18% OFF</span>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img284} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[90] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(90, HomeMap[90])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RAWROW</strong>
        <p className="text-sm text-black">Trip convine boston bag</p>
        <span className="text-gray-600 text-sm font-normal">5% OFF</span>
          <span className="text-sm font-bold text-red-800">$55</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img285} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[91] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(91, HomeMap[91])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LIFEWORK KIDS</strong>
        <p className="text-sm text-black">New Classic Bagpack</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img286} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[92] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(92, HomeMap[92])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CREM SODA LAB</strong>
        <p className="text-sm text-black">Gym training boston bag gray</p>
        <span className="text-gray-600 text-sm font-normal">36% OFF</span>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img287} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[93] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(93, HomeMap[93])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-14">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NOICE</strong>
        <p className="text-sm text-black">Crack leather travel bag</p>
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



  <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># JEWELRY</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img224} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
               <i className={`cursor-pointer ${
            favorite[94] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(94, HomeMap[94])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-black">Orb trace bracelet</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img225} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[95] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(95, HomeMap[95])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ARTISTWEAR</strong>
              <p className="text-sm text-black">Triple cube necklace</p>
                <span className="text-sm font-bold text-red-800">$22</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img226} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[96] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(96, HomeMap[96])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LAOMIN</strong>
              <p className="text-sm text-black">New Classic Hairpins</p>
                <span className="text-sm font-bold text-red-800">$12</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img227} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[97] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(97, HomeMap[97])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-black">Curved design ring</p>
                <span className="text-sm font-bold text-red-800">$70</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img228} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[98] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(98, HomeMap[98])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SCARLETTO</strong>
              <p className="text-sm text-black">Basic matt steel rings</p>
                <span className="text-sm font-bold text-red-800">$10</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img229} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[99] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(99, HomeMap[99])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PASSMEBY</strong>
              <p className="text-sm text-black">FLORVEN V2</p>
                <span className="text-sm font-bold text-red-800">$166</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 



<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>THE HOTTEST BRANDS IN SEOUL</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img65} alt="SCALLYWANG"></img>     
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">BORN TO WIN</strong>
        <p className="text-sm text-gray-900">Summer 2026 collection</p>
          <span className="text-lg font-bold text-red-600">$30</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img66} alt="SCALLYWANG"></img>
       
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">AMBLER second drop</strong>
          <span className="text-lg font-bold text-gray-600">$10 off</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img67} alt="SCALLYWANG"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-gray-900">Trending Now | Best selling women shoes</p>
          <span className="text-lg font-bold text-red-600">$29</span>
      </div>
    </li>
  </ul>
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
            favorite[100] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(100, HomeMap[100])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PEPPERSEASONING</strong>
        <p className="text-sm text-black">Essiential waist bag</p>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img289} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[101] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(101, HomeMap[101])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SOMEWHEREBUTTER</strong>
        <p className="text-sm text-black">Teddy waist bag</p>
          <span className="text-sm font-bold text-red-800">$59</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img290} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[102] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(102, HomeMap[102])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RAWROW</strong>
        <p className="text-sm text-black">Triple conveni hip bag</p>
           <span className="text-gray-600 text-sm font-normal">06% OFF</span>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img291} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[103] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(103, HomeMap[103])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATHEMATIC</strong>
        <p className="text-sm text-black">Steverd cross body bag</p>
          <span className="text-gray-600 text-sm font-normal">9% OFF</span>
          <span className="text-sm font-bold text-red-800">$46</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img292} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[104] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(104, HomeMap[104])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">AS YOU ARE</strong>
        <p className="text-sm text-black">cow hide belt bag</p>
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
  <h2>MUSINSA SPECIAL: Exclusive to MUSINSA</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img68} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[105] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(105, HomeMap[105])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PLEASENOFOLLOW</strong>
        <p className="text-sm text-black">Long Sleeves Top</p>
        <span className="text-gray-600">4% OFF</span>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img69} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[106] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(106, HomeMap[106])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EYEER</strong>
        <p className="text-sm text-black">02 Logo Bolero set-up black</p>
         <span className="text-gray-600">1% OFF</span>
          <span className="text-sm font-bold text-red-800">$64</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img70} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[107] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(107, HomeMap[107])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-black">Neck strip short sleeves t-shirt</p>
          <span className="text-gray-600">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$15</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img71} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[108] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(108, HomeMap[108])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-black">Stud Shriing band beanie [black]</p>
         <span className="text-gray-600">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$45</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img72} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[109] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(109, HomeMap[109])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HDEX</strong>
        <p className="text-sm text-black">Most Talk about k-Sport wear</p>
          <span className="text-gray-600">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$65</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img73} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[110] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(110, HomeMap[110])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SLEEKGLOW</strong>
        <p className="text-sm text-black">Summer Drop Arrive [50% off]</p>
          <span className="text-gray-600">5% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


 <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># SUNGLASSES</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-13">
          <li >
            <div className="relative">
              <img src={img230} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[111] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(111, HomeMap[111])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">2cube</strong>
              <p className="text-sm text-black">1007 (gray, purple)</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img231} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[112] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(112, HomeMap[112])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-black">CELVIN c1 black</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img232} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[113] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(113, HomeMap[113])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-black">Cario ice blue</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img233} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[114] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(114, HomeMap[114])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETO</strong>
              <p className="text-sm text-black">C1 BLACK</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img234} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[115] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(115, HomeMap[115])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RIETI</strong>
              <p className="text-sm text-black">Aldo c2 black</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img235} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[116] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(116, HomeMap[116])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ONE BRILLOENT</strong>
              <p className="text-sm text-black">Ambrio black brown</p>
                <span className="text-sm font-bold text-red-800">$46</span>
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
            favorite[117] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(117, HomeMap[117])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATT</strong>
        <p className="text-sm text-black">Canvas men's leather clutch</p>
          <span className="text-sm font-bold text-red-800">$80</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img304} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[118] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(118, HomeMap[118])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MONOFLUX</strong>
        <p className="text-sm text-black">Sponge pocket clutch bag</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img305} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[119] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(119, HomeMap[119])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ZOEET</strong>
        <p className="text-sm text-black">Stand mini cross bag</p>
          <span className="text-sm font-bold text-red-800">$82</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img306} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[120] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(120, HomeMap[120])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MATT</strong>
        <p className="text-sm text-black">Shrunken leather men's clutch bag</p>
          <span className="text-sm font-bold text-red-800">$130</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img307} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[121] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(121, HomeMap[121])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MONOFLUX</strong>
        <p className="text-sm text-black">2 tone clutch bag</p>
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
  <h2>THIS WEEK'S NEW ARRIVALS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img74} alt="SCALLYWANG"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">This week new arrivals First</p>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img75} alt="SCALLYWANG"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Summer 2026 Collection</p>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img76} alt="SCALLYWANG"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">GLACK</strong>
        <p className="text-sm text-gray-900">New street standard</p>
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
            favorite[122] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(122, HomeMap[122])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNBREATH KIDS</strong>
        <p className="text-sm text-black">Classic kids Radogram bagpack</p>
          <span className="text-sm font-bold text-red-800">$137</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img78} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[123] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(123, HomeMap[123])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
        <p className="text-sm text-black">Bunny Bunny Bagpack</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img79} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[124] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(124, HomeMap[124])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LIFEWORK KIDS</strong>
        <p className="text-sm text-black">New Classic Bagpack</p>
          <span className="text-sm font-bold text-red-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img80} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[125] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(125, HomeMap[125])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROANJANE</strong>
        <p className="text-sm text-black">Brown bear Dumble Backpack</p>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img81} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[126] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(126, HomeMap[126])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNNREATH KIDS</strong>
        <p className="text-sm text-black">kids Big Tag Backpack</p>
          <span className="text-am font-bold text-red-800">$68</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img82} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[127] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(127, HomeMap[127])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BROWNBREATH KIDS</strong>
        <p className="text-sm text-black">Daily kids bagpack [khaki]</p>
          <span className="text-sm font-bold text-red-800">$16</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># PETS ESSIANTIAL</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img236} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[128] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(128, HomeMap[128])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ANDBLACK</strong>
              <p className="text-sm text-black">Daycare bagpack</p>
                <span className="text-sm font-bold text-red-800">$37</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img237} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[129] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(129, HomeMap[129])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BAILEY</strong>
              <p className="text-sm text-black">Warmer for dogs</p>
                <span className="text-sm font-bold text-red-800">$42</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img238} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[130] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(130, HomeMap[130])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YALLEY</strong>
              <p className="text-sm text-black">Dog rain coat</p>
                <span className="text-sm font-bold text-red-800">$22</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img239} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[131] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(131, HomeMap[131])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ICANDOR</strong>
              <p className="text-sm text-black">Dog strap collor</p>
                <span className="text-sm font-bold text-red-800">$20</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img240} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[132] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(132, HomeMap[132])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MU LITTLE DOG</strong>
              <p className="text-sm text-black">Heart pop cool sun cap</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img241} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[133] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(133, HomeMap[133])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MEANING LESS</strong>
              <p className="text-sm text-black">Dog woolen cap</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 





<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA HOODED JACKETS: TOP SELLERS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img83} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-800 px-2">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[134] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(134, HomeMap[134])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">AMOU</strong>
        <p className="text-sm text-black">Molly Hooded zip up Navy</p>
        <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img84} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-green-700 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[135] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(135, HomeMap[135])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LEMAIN SECOND</strong>
        <p className="text-sm text-black">Vintage Pigment 2way oversize hoodie zip up [charcoal]</p>
         <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$31</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img85} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-white px-2text-base">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[136] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(136, HomeMap[136])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUGON</strong>
        <p className="text-sm text-black">Curved line zip up hoodie gray</p>
          <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img86} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-700 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[137] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(137, HomeMap[137])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CARMID</strong>
        <p className="text-sm text-black">Glory lettering crop top hoodie</p>
         <span className="text-gray-600">40% OFF</span>
          <span className="text-sm font-bold text-red-800">$79</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img87} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[138] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(138, HomeMap[138])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">RRANDOMOFF</strong>
        <p className="text-sm text-black">Overway fit up zip up Hoodie</p>
          <span className="text-gray-600">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img88} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className="bg-black text-green-700 px-2">Extra 20% OFF</span>
          <i className={`cursor-pointer ${
            favorite[139] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(139, HomeMap[139])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">TRAVEL</strong>
        <p className="text-sm text-black">Logo printed zip up Hoodie [gray]</p>
          <span className="text-gray-600">20% OFF</span>
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

 <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA FUR SHOES: TOP SELLERS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">      
        <img src={img95} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[140] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(140, HomeMap[140])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-black">MIA fUR line winter boots</p>
          <span className="text-sm font-bold text-red-800">$23</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img96} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[141] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(141, HomeMap[141])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-black">Winter collection fur boots</p>
          <span className="text-sm font-bold text-red-800">$25</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img97} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[142] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(142, HomeMap[142])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-black">Strap fun long boots - chestnut</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img98} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[143] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(143, HomeMap[143])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NUARAT STUDIO</strong>
        <p className="text-sm text-black">Classic fur short mini boots [5-colors]</p>
          <span className="text-sm font-bold text-red-800">$23</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img99} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[144] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(144, HomeMap[144])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">AKKI CLASSIC</strong>
        <p className="text-sm text-black">Iceline recovery classic boots Dark Espresso</p>
          <span className="text-sm font-bold text-red-800">$50</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img100} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[145] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(145, HomeMap[145])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-black">3 Button long boots - chestnuts</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-10">

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img89} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[146] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(146, HomeMap[146])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ELIZABETH STUART</strong>
        <p className="text-sm text-black">Biker bukle boots</p>
          <span className="text-sm font-bold text-red-800">$70</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img90} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[147] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(147, HomeMap[147])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Square chelsea boot - black</p>
          <span className="text-sm font-bold text-red-800">$71</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img91} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[148] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(148, HomeMap[148])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">23.65</strong>
        <p className="text-sm text-black">Mori mountain shoes</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img92} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[149] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(149, HomeMap[149])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT AND CHOCLATE</strong>
        <p className="text-sm text-black">Duncan buckle boots</p>
          <span className="text-sm font-bold text-red-800">$79</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img93} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[150] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(150, HomeMap[150])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SAPUN</strong>
        <p className="text-sm text-black">Ankle boots</p>
          <span className="text-sm font-bold text-red-800">$44</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img94} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[151] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(151, HomeMap[151])}></i>
       </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CUSTOMADE</strong>
        <p className="text-sm text-black">Buddie suedie long over works boots</p>
          <span className="text-sm font-bold text-red-800">$89</span>
      </div>
    </li>
  </ul>
</div>
</section> 

<section className="mt-8">
<div className="mx-30 mt-6">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img350} alt="SCALLYWANG" className="w-200 h-100 object-contain"></img>
        <div className="absolute bottom-6 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[152] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(152, HomeMap[152])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Winter plateform short boots</p>
          <span className="text-sm font-bold text-red-800">$73</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img351} alt="SCALLYWANG" className="w-200 h-95 object-contain"></img>
         <div className="absolute bottom-4 right-4  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[153] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(153, HomeMap[153])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-black">Plateform furr slipper</p>
          <span className="text-sm font-bold text-red-800">$45</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img352} alt="SCALLYWANG" className="w-200 h-100 object-contain"></img>
        <div className="absolute bottom-6 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[154] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(154, HomeMap[154])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-black">Furrline chlesa boots</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img353} alt="SCALLYWANG" className="w-200 h-100 object-contain"></img>
        <div className="absolute bottom-6 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[155] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(155, HomeMap[155])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NSWE</strong>
        <p className="text-sm text-black">Wool knit padding mid boots</p>
          <span className="text-sm font-bold text-red-800">$73</span>
      </div>
    </li>
    {/* <li>
      <div className="relative">
        <img src={img354} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className="fa-regular fa-heart text-gray-500 font-bold"></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">AKKI CLASSIC</strong>
        <p className="text-sm text-gray-900">Iceline recovery classic boots Dark Espresso</p>
          <span className="text-lg font-bold text-red-800">$50</span>
      </div>
    </li> */}
  </ul>
</div>
<div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section> 


 <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># SOCKS</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img248} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[156] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(156, HomeMap[156])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ANGEL SOCKS</strong>
              <p className="text-sm text-black">2 Tone cotton ribbon socks</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img249} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[157] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(157, HomeMap[157])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">I HATE MONDAY</strong>
              <p className="text-sm text-black">Black strip socks</p>
                <span className="text-sm font-bold text-red-800">$2</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img250} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[158] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(158, HomeMap[158])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HALDEN</strong>
              <p className="text-sm text-black">From knee socks</p>
                <span className="text-sm font-bold text-red-800">$7</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img251} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[159] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(159, HomeMap[159])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FLAREUP</strong>
              <p className="text-sm text-black">Washable black custom tight</p>
                <span className="text-sm font-bold text-red-800">$10</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img252} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[160] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(160, HomeMap[160])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MOON WALK</strong>
              <p className="text-sm text-black">Laces tie knee socks</p>
                <span className="text-sm font-bold text-red-800">$8</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img253} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[161] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(161, HomeMap[161])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FRANSERVICS</strong>
              <p className="text-sm text-black">Sheer knee high socks</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 





 <section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># BELTS</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img242} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[162] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(162, HomeMap[162])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
              <p className="text-sm text-black">Saffiano synthetic leather belt</p>
                <span className="text-sm font-bold text-red-800">$13</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img243} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[163] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(163, HomeMap[163])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PEPPERSEASONING</strong>
              <p className="text-sm text-black">Tactical wabbing nylon belt black</p>
                <span className="text-sm font-bold text-red-800">$7</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img244} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[164] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(164, HomeMap[164])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BELIER</strong>
              <p className="text-sm text-black">City bokeh slim belt</p>
                <span className="text-sm font-bold text-red-800">$12</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img245} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[165] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(165, HomeMap[165])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
              <p className="text-sm text-black">Women synthetic dot leather belt</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img246} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[166] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(166, HomeMap[166])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MILLO ARXHIVE</strong>
              <p className="text-sm text-black">Washable leather belt</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img247} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[167] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(167, HomeMap[167])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PIMADWIN</strong>
              <p className="text-sm text-black">Dia belt</p>
                <span className="text-sm font-bold text-red-800">$16</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 



<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD: HIGH HEELS AND PUMPS</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img101} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[168] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(168, HomeMap[168])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SAPUN</strong>
        <p className="text-sm text-black">Verity pump heels</p>
        <span className="text-sm font-bold text-red-800"></span>
           </div>
    </li>
    <li >
      <div className="relative">
        <img src={img102} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[169] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(169, HomeMap[169])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-black">SOREL MID HEELS</p>
        <span className="text-sm font-bold text-red-800">$21</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img103} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[170] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(170, HomeMap[170])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CUSTOMMADEWOMEN</strong>
        <p className="text-sm text-black">Mary jane pumps scarlets</p>
        <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img104} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[171] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(171, HomeMap[171])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ROLLONTHECLOUDS</strong>
        <p className="text-sm text-black">Poetic pumps heels</p>
        <span className="text-sm font-bold text-red-800">$37</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img105} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[172] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(172, HomeMap[172])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-black">Lace up plateform sandals</p>
        <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img106} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[173] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(173, HomeMap[173])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SAPPUN</strong>
        <p className="text-sm text-black">Basic pump heels black</p>
        <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>
</section> 

<section className="mt-10">
        <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
        <h2># WATCH</h2>
      </div>
      
      <div className="mx-30">
        <ul className="flex flex-row gap-4 mt-12">
          <li >
            <div className="relative">
              <img src={img254} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center px-2">
                <i className={`cursor-pointer ${
            favorite[174] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(174, HomeMap[174])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EARDEN</strong>
              <p className="text-sm text-black">Apple watch look strap buckel watch</p>
                <span className="text-sm font-bold text-red-800">$20</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img255} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[175] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(175, HomeMap[175])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MINOC</strong>
              <p className="text-sm text-black">Roe basic watch strap</p>
                <span className="text-sm font-bold text-red-800">$4</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img256} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[176] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(176, HomeMap[176])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">EARDEN</strong>
              <p className="text-sm text-black">Apple watch classic strap black watch</p>
                <span className="text-sm font-bold text-red-800">$72</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img258} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
               <i className={`cursor-pointer ${
            favorite[178] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(178, HomeMap[178])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">CRONOUS</strong>
              <p className="text-sm text-black">Apple watch strap premium leather watch</p>
                <span className="text-sm font-bold text-red-800">$40</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img257} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[179] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(179, HomeMap[179])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SILVER TAG</strong>
              <p className="text-sm text-black">Apple watch steel strap heavy watch</p>
                <span className="text-sm font-bold text-red-800">$68</span>
            </div>
          </li>
          <li>
            <div className="relative">
              <img src={img259} alt="SCALLYWANG"></img>
              <div className="absolute bottom-2 right-2  flex justify-between items-center">
                <i className={`cursor-pointer ${
            favorite[180] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(180, HomeMap[180])}></i>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LORENIO</strong>
              <p className="text-sm text-black">Basic leather strap watch</p>
                <span className="text-sm font-bold text-red-800">$36</span>
            </div>
          </li>
        </ul>
      </div>
      </section> 



<section className="mt-20">
  <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>MUSINSA STANDARD: SKINCARE & MAKEUP</h2>
</div>

<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img107} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[260] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(260, HomeMap[260])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LUMMIR</strong>
        <p className="text-sm text-black">Light on eye shadow palatte</p>
        <span className="text-sm font-bold text-red-800">$28</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img108} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[261] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(261, HomeMap[261])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">NOBEV</strong>
        <p className="text-sm text-black">Noveb under eye mood aegyo sal palette</p>
        <span className="text-sm font-bold text-red-800">$19</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img109} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[262] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(262, HomeMap[262])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KIRSH BLENDING</strong>
        <p className="text-sm text-black">Waterproof mascara</p>
        <span className="text-sm font-bold text-red-800">$18</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img110} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[263] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(263, HomeMap[263])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">I'M MEME</strong>
        <p className="text-sm text-black">I am stick shadow</p>
        <span className="text-sm font-bold text-red-800">$3</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img111} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[264] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(264, HomeMap[264])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KEYBO</strong>
        <p className="text-sm text-black">Falling in love eye shadow palette</p>
        <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img112} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[265] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(265, HomeMap[265])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PRO8</strong>
        <p className="text-sm text-black">Stay on gel eyeliner duo set</p>
        <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-5">

<div className="mx-30 mt-1">
  <ul className="flex flex-row gap-4">
    <li >
      <div className="relative">
        <img src={img113} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[266] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(266, HomeMap[266])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SKINFOOED</strong>
        <p className="text-sm text-black">Choco eyebrow cake powder</p>
        <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img114} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[267] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(267, HomeMap[267])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">ANDEAR</strong>
        <p className="text-sm text-black">Single basic multiple blush</p>
        <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img115} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[268] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(268, HomeMap[268])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BAREN</strong>
        <p className="text-sm text-black">Hand cuticle essiential oil</p>
        <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img116} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[269] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(269, HomeMap[269])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HANSKIN</strong>
        <p className="text-sm text-black">Super light touch BB-Cream + concealer</p>
        <span className="text-sm font-bold text-red-800">$37</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img117} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[270] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(270, HomeMap[270])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Dinto</strong>
        <p className="text-sm text-black">Soft Glow liquid cheek 8-type</p>
        <span className="text-sm font-bold text-red-800">$15</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img118} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[271] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(271, HomeMap[271])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DINTO</strong>
        <p className="text-sm text-black">Mid-night liquid contour</p>
        <span className="text-sm font-bold text-red-800">$15</span>
      </div>
    </li>
  </ul>
</div>
</section> 

<section className="mt-5">

<div className="mx-30 mt-1">
  <ul className="flex flex-row gap-4">
    <li >
      <div className="relative">
        <img src={img119} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[272] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(272, HomeMap[272])}></i>
        </div> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">I'M MEME</strong>
        <p className="text-sm text-black">I'm shadow multi stick</p>
        <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img120} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[273] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(273, HomeMap[273])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DUEYTREE</strong>
        <p className="text-sm text-black">Pick and quick morning depaffing face mask-sheet</p>
        <span className="text-sm font-bold text-red-800">$16</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img121} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[274] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(274, HomeMap[274])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MARY&MAY</strong>
        <p className="text-sm text-black">Blackberry complex glow face-wash pack</p>
        <span className="text-sm font-bold text-red-800">$22</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img122} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[275] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(275, HomeMap[275])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HANSKIN</strong>
        <p className="text-sm text-black">Pure vita C toning serum</p>
        <span className="text-sm font-bold text-red-800">$13</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img123} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[276] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(276, HomeMap[276])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MIZON</strong>
        <p className="text-sm text-black">Rice tone glow tonner</p>
        <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li >
      <div className="relative">
        <img src={img124} alt="SCALLYWANG"></img> 
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[277] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(277, HomeMap[277])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SOMEBLOSSEM</strong>
        <p className="text-sm text-black">Cica care body-wash + body-lotion + body-mist</p>
        <span className="text-sm font-bold text-red-800">$44</span>
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

<section className="mt-10">
  <div className="mx-30 mt-6 text-4xl font-bold tracking-wider text-center text-[#0a0f18]">
  <h2># SPORT SKIRTS</h2>
</div>
 <div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
       <div className="relative">
        <img src={img365} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[1111] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(278, HomeMap[278])}></i>       
        </div>
       </div>
       <div className="flex flex-col gap-1 mt-3">
         <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PGR</strong>
        <p className="text-sm text-black">Women waistband skirt pants</p> 
        <span className="text-sm font-bold text-red-800">$70</span>
      </div>
   </li>
    <li>
       <div className="relative">
         <img src={img366} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[278] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(279, HomeMap[279])}></i>
         </div>
       </div>
       <div className="flex flex-col gap-1 mt-3">
         <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DOWN BLOW</strong>
         <p className="text-sm text-black">Women golf wear skirt</p>
           <span className="text-sm font-bold text-red-800">$31</span>
       </div>
     </li>
     <li>
       <div className="relative">
         <img src={img367} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[279] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(280, HomeMap[280])}></i>
         </div>
       </div>
       <div className="flex flex-col gap-1 mt-3">
         <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">LORDLOR</strong>
         <p className="text-sm text-black">Women Airy inverted skirt</p>
           <span className="text-sm font-bold text-red-800">$39</span>
       </div>
     </li>
     <li>
       <div className="relative">
         <img src={img368} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[280] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(281, HomeMap[281])}></i>
         </div>
       </div>
       <div className="flex flex-col gap-1 mt-3">
         <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT AND CHOCLATE</strong>
         <p className="text-sm text-black">High waist women sport skirt pants</p>
           <span className="text-sm font-bold text-red-800">$79</span>
       </div>
     </li>
     <li>
       <div className="relative">
         <img src={img369} alt="SCALLYWANG"></img>
         <div className="absolute bottom-2 right-2 flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[281] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(282, HomeMap[282])}></i>
         </div>
       </div>
       <div className="flex flex-col gap-1 mt-3">
         <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">PGR</strong>
         <p className="text-sm text-black">Women waist banded skirt</p>
           <span className="text-sm font-bold text-red-800">$44</span>
       </div>
     </li>
    
  </ul>
 </div>

 <div className="text-center mt-10">
   <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
 </div>
 </section> 

<section className="mt-20 mx-30">
  <div className=" text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">UP-TO 83% OFF VOCATION-READY PICKS</h1>
  </div>
  <div>
    <img src={img125} alt="pants"></img>
  </div>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
         <div className="relative">
        <img src={img126} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[282] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(283, HomeMap[283])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FILLUMINATE</strong>
        <p className="text-sm text-black">Damage washes denim pants</p>
           <span className="text-sm font-sm text-gray-600">10%</span>
            <span className="text-sm font-bold text-red-800">$20</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img127} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[283] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(284, HomeMap[284])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DEMITRI BLACK</strong>
        <p className="text-sm text-black">Everyone banded curved slack</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img128} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[284] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(285, HomeMap[285])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DEMITRI BLACK</strong>
        <p className="text-sm text-black">Single curved slack sweat-pants</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
      </li>
      <li>
         <div className="relative">
        <img src={img129} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[285] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(286, HomeMap[286])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">FORR</strong>
        <p className="text-sm text-black">Small logo curved sweat-pants</p>
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


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12">UP-TO 83% OFF VOCATION-READY PICKS</h1>
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
            favorite[286] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(287, HomeMap[287])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm black">Wahable double front-button curved neck shirt</p>
           <span className="text-sm text-gray-600">10%</span>
            <span className="text-sm font-bold text-red-800">$20</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img132} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[287] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(288, HomeMap[288])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">musinsa special white zip up crop top hoodie</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
      <li>
      <div className="relative">
        <img src={img133} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[288] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(289, HomeMap[289])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Single curved black pants for women</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
      </li>
      <li>
         <div className="relative">
        <img src={img134} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[289] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(290, HomeMap[290])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">long sleeves full dotted summer shirt</p>
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
            favorite[290] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(291, HomeMap[291])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Aran cable collar zip up</p>
           <span className="text-sm text-gray-600">29%</span>
            <span className="text-sm font-bold text-red-800">$53</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img137} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[291] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(292, HomeMap[292])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Pixel logo shirt half sleeves black</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img138} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[292] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(293, HomeMap[293])}></i>
      </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Silver b over fit t-shirt</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img139} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[293] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(294, HomeMap[294])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Super wide hidden elastic waist band medium-gray</p>
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

<section className="mt-10">
 <div className="mx-30 mt-6 text-4xl font-bold tracking-wider text-center text-[#0a0f18]">
  <h2># SPORT CAPS</h2>
</div>
<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 mt-15 ">
    <li >
      <div className="relative">
        <img src={img380} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[294] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(295, HomeMap[295])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Running ripstone cap</p>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img381} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[295] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(296, HomeMap[296])}></i>
          </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">WALTER EXPERIMENT</strong>
        <p className="text-sm text-black">Equinox wool beanie Black</p>
          <span className="text-sm font-bold text-red-68"></span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img382} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[296] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(297, HomeMap[297])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MACKY</strong>
        <p className="text-sm text-black">Buckle cap hat beanie</p>
          <span className="text-sm font-bold text-red-800">$39</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img383} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[297] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(298, HomeMap[298])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">VDR</strong>
        <p className="text-sm text-black">Off day cotton cap</p>
          <span className="text-sm font-bold text-red-800">$19</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img384} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[298] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(299, HomeMap[299])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KODAK</strong>
        <p className="text-sm text-black">Cotton soccer bucket hat</p>
          <span className="text-sm font-bold text-red-800">$44</span>
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
            favorite[299] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(300, HomeMap[300])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-black">Ribboned mini short black</p>
           <span className="text-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img142} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[300] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(301, HomeMap[301])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-black">Multi tank top white</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img143} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[301] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(302, HomeMap[302])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-black">Nepolien jersey black</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img144} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[302] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(303, HomeMap[303])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KHAKIPOINT</strong>
        <p className="text-sm text-black">Stcture high neck leather jacket</p>
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
            favorite[303] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(304, HomeMap[304])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-black">house essiential long sleeve</p>
           <span className="text-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img147} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[304] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(305, HomeMap[305])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-black">red heart slim fit t-shirt</p>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img148} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[305] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(306, HomeMap[306])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-black">running horse linger gray t-shirt</p>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img149} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[306] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(307, HomeMap[307])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BUAF</strong>
        <p className="text-sm text-black">A soft t-shirt gray strip</p>
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
    <h1 className="mb-12">J-INFLUENCER'S SUMMER PICKS</h1>
  </div>
       <img src={img150} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img151} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[307] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(308, HomeMap[308])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-black">Round toe rider buckle boots</p>
           <span className="text-sm text-gray-600">20%</span>
            <span className="text-sm font-bold text-red-800">$69</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img152} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[308] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(309, HomeMap[309])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-black">Wrinkle cover long boots</p>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img153} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[309] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(310, HomeMap[310])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-black">Wide long boots</p>
          <span className="text-sm font-bold text-red-800">$86</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img154} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[310] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(311, HomeMap[311])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-black">Soft foam slim curved strap sandals</p>
          <span className="text-sm font-bold text-red-800">$38</span>
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
            favorite[311] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(312, HomeMap[312])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD SPORTS</strong>
        <p className="text-sm text-black">Sports backpack</p>
         <span className="text-gray-600 text-sm font-normal">14% OFF</span>
          <span className="text-sm font-bold text-red-800">$44</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img309} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[312] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(313, HomeMap[313])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">HDEX</strong>
        <p className="text-sm text-black">Glossy nylon doffel bag</p>
          <span className="text-sm font-bold text-red-800">$42</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img310} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[313] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(314, HomeMap[314])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">KODAK</strong>
        <p className="text-sm text-black">Large cross body bag</p>
          <span className="text-sm font-bold text-black-800">$72</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img311} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[314] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(315, HomeMap[315])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DREEMYDEAR</strong>
        <p className="text-sm text-black">logo aports duffel bags</p>
          <span className="text-sm font-bold text-red-800">$27</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img312} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[315] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(316, HomeMap[316])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">BARBELLWORK</strong>
        <p className="text-sm text-black">Gym boston bag</p>
         <span className="text-gray-600 text-sm font-normal">42% OFF</span>
          <span className="text-sm font-bold text-red-800">$48</span>
      </div>
    </li>
  </ul>
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
            favorite[316] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(317, HomeMap[317])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-black">Women  yoga wear blur pilate banded wrap crop top</p>
           <span className="text-sm text-gray-600">18%</span>
            <span className="text-sm font-bold text-red-800">$22</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img157} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[317] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(318, HomeMap[318])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
          <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-black">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img158} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[318] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(319, HomeMap[319])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-black">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$86</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img159} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[319] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(320, HomeMap[320])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">DAVIWEAR</strong>
        <p className="text-sm text-black">One sholder loose fit short sleeves t-shirt</p>
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
            favorite[320] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(321, HomeMap[321])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-black">one pleat bermuda sweat pant [light gray]</p>
           <span className="text-sm text-gray-600">11%</span>
            <span className="text-sm font-bold text-red-800">$30</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img162} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[321] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(322, HomeMap[322])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-black">Big brush long bermuda denim pant [blue]</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img163} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[322] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(323, HomeMap[323])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-black">one pleat bermuda denim pant [blue]</p>
         <span className="text-sm text-gray-600">8%</span>
          <span className="text-sm font-bold text-red-800">$25</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img164} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
        <i className={`cursor-pointer ${
            favorite[323] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(324, HomeMap[324])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">Musinsa standard</strong>
        <p className="text-sm text-black">One tuck long bermuda sweat pant</p>
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


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12"># LIVE BOLT: NEW BAGS</h1>
  </div>
       <img src={img165} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img166} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[324] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(325, HomeMap[325])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-black">Mini sloty bag [MINT]</p>
       <span className="text-sm font-bold text-red-800">$123</span>  
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img167} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[325] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(326, HomeMap[326])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-black">Sloty bag [SODA]</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$138</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img168} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[326] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(327, HomeMap[327])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-black">Ribbon gym sack blue check</p>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img169} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[327] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(328, HomeMap[328])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-black">Mini pumpkin bag - butter cream</p>
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


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
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
            favorite[328] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(329, HomeMap[329])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women light weight bandeddenim pant</p>
            <span className="text-sm font-bold text-red-800">$13</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img172} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[329] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(330, HomeMap[330])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women loose strap banded denim pant [indigo]</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img173} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[330] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(331, HomeMap[331])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women light weight denim pant</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$13</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img174} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[320] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(332, HomeMap[332])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women light weight banded denim pant</p>
         <span className="text-sm text-gray-600">59%</span>
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


<section className="mt-20 mx-30">
  <div className="mt-8 text-4xl font-bold tracking-wider text-[#0a0f18]">
    <h1 className="mb-12"># SUMMER TRAVEL BAGS</h1>
  </div>
       <img src={img175} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img176} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[321] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(333, HomeMap[333])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women belted shoulder bags</p>
         <span className="text-sm text-gray-600">9%</span>
            <span className="text-sm font-bold text-red-800">$73</span>
          
      </div>  
      </li>
      <li>
       <div className="relative">
        <img src={img177} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[322] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(334, HomeMap[334])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women nylon shoulder bag</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$63</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img178} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[323] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(335, HomeMap[335])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women slouch shoulder bag</p>
         <span className="text-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$63</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img186} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[324] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(336, HomeMap[336])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women nylon slounch shoulder bag</p>
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
            favorite[325] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(337, HomeMap[337])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Women wrinkle check shirt [2 color]</p>
            <span className="text-sm font-bold text-red-800">$23</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img181} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[326] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(338, HomeMap[338])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">One side folding collar charcoal</p>
         <span className="text-sm text-gray-600">9%</span>
          <span className="text-sm font-bold text-red-800">$51</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img182} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[327] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(339, HomeMap[339])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Butterfly print slim fit short sleeves t-shirt</p>
         <span className="text-sm text-gray-600">29%</span>
          <span className="text-sm font-bold text-red-800">$26</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img183} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[328] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(340, HomeMap[340])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-black">Backpoint studio short sleeve over size t-shirt</p>
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




<section className="mt-20">
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
            favorite[329] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(341, HomeMap[341])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-black">Block cardigan sleeveless</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img188} alt="SCALLYWANG" className="h-[230px] w-[400px]"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[330] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(342, HomeMap[342])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">MUSINSA STANDARD</strong>
        <p className="text-sm text-black">Summer half sleeve plane t-shirt</p>
         <span className="text-gray-600 text-sm font-normal">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$19</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img189} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[331] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(343, HomeMap[343])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">SUARE</strong>
        <p className="text-sm text-black">Cool cotton half sleev washable t-shirt</p>
          <span className="text-gray-600 text-sm font-normal">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$7</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img190} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
           <i className={`cursor-pointer ${
            favorite[332] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(344, HomeMap[344])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">UNDEROFF</strong>
        <p className="text-sm text-black">Rollup sleeve cropped short sleeve t-shirt</p>
         <span className="text-gray-600 text-sm font-normal">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img191} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[333] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-200"
          }`}
          onClick={() => toggleFavorite(345, HomeMap[345])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">TRAVEL</strong>
        <p className="text-sm text-black">Saint pigment half sleeves t-shirt</p>
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
            favorite[334] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(346, HomeMap[346])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-madium">DIMITRI BLACK</strong>
        <p className="text-sm text-black">ASI 4-season essiantial hoodie zip up gray</p>
          <span className="text-gray-600 text-sm font-normal">30% OFF</span>
          <span className="text-sm font-bold text-red-800">$40</span>
      </div>
    </li>
  </ul>
</div>
</section> 

<section className="mt-8">
<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img193} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 20% OFF</span>
           <i className={`cursor-pointer ${
            favorite[335] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(347, HomeMap[347])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">LEIRI</strong>
        <p className="text-sm text-black">Muscla fit short sleeve t-shirt knit</p>
        <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img194} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[336] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(348, HomeMap[348])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">FLAREUP</strong>
        <p className="text-sm text-black">Layer bustler t-shirt</p>
         <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$45</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img195} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[337] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(349, HomeMap[349])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">CHASIN RABBIT'S</strong>
        <p className="text-sm text-black">All about glow cover cream</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$14</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img196} alt="SCALLYWANG" className="h-[230px] w-[400px]"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
           <i className={`cursor-pointer ${
            favorite[338] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(350, HomeMap[350])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">DASHU</strong>
        <p className="text-sm text-black">Daily volume picks front hair root volume</p>
         <span className="text-gray-600 text-sm font-normal">50% OFF</span>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img197} alt="SCALLYWANG" className="h-[230px] w-[400px]"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[339] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(351, HomeMap[351])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">FITGLOW</strong>
        <p className="text-sm text-black">Angel wing hoodie zip up</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$34</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img198} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[340] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(352, HomeMap[352])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">P.IN.O</strong>
        <p className="text-sm text-black">Cotton crop short sleeve t-shirt muscle-fir</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>

</section> 

<section className="mt-8">
<div className="mx-30 mt-8">
  <ul className="flex flex-row gap-4 ">
    <li>
      <div className="relative">
        <img src={img199} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 10% OFF</span>
           <i className={`cursor-pointer ${
            favorite[341] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(353, HomeMap[353])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">CPGN STUDIO</strong>
        <p className="text-sm text-black">Full star pigment hoodie zip up</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img200} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 10% OFF</span>
           <i className={`cursor-pointer ${
            favorite[342] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(354, HomeMap[354])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">FANSHOW</strong>
        <p className="text-sm text-black">Six color ninteen geometry pants</p>
         <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$58</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img201} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[343] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(355, HomeMap[355])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">FLAREUP</strong>
        <p className="text-sm text-black">Half sleeve layer busten t-shirt</p>
          <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$47</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img202} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className="bg-black text-white px-2">Extra 10% OFF</span>
           <i className={`cursor-pointer ${
            favorite[344] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(356, HomeMap[356])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">AGOD</strong>
        <p className="text-sm text-black">Wide denim pant</p>
         <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img203} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[345] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(357, HomeMap[357])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-madium">FILLUMINATE</strong>
        <p className="text-sm text-black">Damage washeable denim pant</p>
           <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img204} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[346] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(358, HomeMap[358])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="text-medium">DEMITRI BLACK</strong>
        <p className="text-sm text-black">Women curved track sweat pant</p>
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


 <section className="mt-25 mx-30">
    <div className="items-center ">
      <h1 className="text-5xl mb-15 font-bold"> # SPORTS GOODS</h1>
      <div className="flex flex-row gap-6">
        <div>
          <img src={img385} alt="musinsa" />
          <p className="text-left mt-4 text-2xl">MUSINSA STANDARD</p>
        </div>
        <div>
          <img src={img386} alt="musinsa" />
          <p className="text-left mt-4 text-2xl">RIETI</p>
        </div>
        <div>
          <img src={img387} alt="musinsa" />
          <p className="text-left mt-4 text-2xl">RAVER</p>
        </div>
      </div>
    </div>
  </section>


<section className="mt-25 mx-30">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-15">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img205} alt="musinsa" />
        <p className="text-left mt-4 text-xl">DARISEL</p>
      </div>
      <div>
        <img src={img206} alt="musinsa" />
        <p className="text-left mt-4 text-xl">Dresses and Sleeveless style chosen by HAN SO-HEE</p>
      </div>
      <div>
        <img src={img207} alt="musinsa" />
        <p className="text-left mt-4 text-xl">MUSINSA STANDARD</p>
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
export default Hero
