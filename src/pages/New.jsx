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
import { NewProduct } from '../data/NewProductMap.jsx';


const New = ({ favorite, toggleFavorite }) => {
  return (
    <div className="relative overflow-x-hidden mb-10">
      
<section className="mt-20 md:mt-40 lg:mt-40">
  <div className="mx-2 md:mx-10 lg:mx-20  
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2 className="text-center">THIS WEEK'S NEW ARRIVALS</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-8">
  <ul className=" flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li className="flex-shrink-0 w-full sm:w-full md:w-[800px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img74} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[350px] md:h-[480px] lg:h-[300px] object-cover rounded"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">This week new arrivals First</p>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-[800px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img75} alt="SCALLYWANG" className="w-full h-[230px] sm:h-[350px] md:h-[480px] lg:h-[300px] object-cover rounded"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Summer 2026 Collection</p>
      </div>
    </li>
    <li className="flex-shrink-0 w-full sm:w-full md:w-[800px] lg:w-[420px] snap-center">
      <div className="relative">
        <img src={img76} alt="SCALLYWANG" className="w-full h-[250px] sm:h-[350px] md:h-[480px] lg:h-[300px] object-cover rounded"></img> 
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">GLACK</strong>
        <p className="text-sm text-gray-900">New street standard</p>
      </div>
    </li>
  </ul>
</div>
</section> 


<section className="mt-14">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA SPECIAL: Exclusive to MUSINSA</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-8">
  <ul className=" flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li >
      <div className="relative">
        <img src={img68} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[594] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(594, NewProduct[594])}></i>
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
            favorite[595] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(595, NewProduct[595])}></i>
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
            favorite[596] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(596, NewProduct[596])}></i>
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
            favorite[597] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(597, NewProduct[597])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">YEOMIM</strong>
        <p className="text-sm text-gray-900">Stud Shriing band beanie [black]</p>
         <span className="text-gray-600 text-sm">10% OFF</span>
          <span className="text-sm font-bold text-red-600">$45</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img72} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[598] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(598, NewProduct[598])}></i>
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
            favorite[599] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(599, NewProduct[599])}></i>
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


<section className="mt-10 mx-2 lg:mx-20 md:mx-10 ">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h1 className="mb-12">J-INFLUENCER'S SUMMER PICKS</h1>
  </div>
        <div className="mb-6">
           <img src={img150} alt="pants" className="w-[350px] h-[200px] object-cover lg:w-[1400px] lg:h-[550px] lg:object-cover md:object-cover md:w-[900px] md:h-[400px]"></img>
         </div>
  <div>
    <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-x-visible no-scrollbar">
      <li>
        <div className="relative">
        <img src={img151} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[600] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(600, NewProduct[600])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-gray-900">Round toe rider buckle boots</p>
           <span className="text-sm text-gray-600">20%</span>
            <span className="text-sm font-bold text-red-800">$69</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img152} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[601] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(601, NewProduct[601])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-gray-900">Wrinkle cover long boots</p>
          <span className="text-sm font-bold text-red-800">$87</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img153} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[602] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(602, NewProduct[602])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-gray-900">Wide long boots</p>
          <span className="text-sm font-bold text-red-800">$86</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img154} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[603] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(603, NewProduct[603])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">SALT & CHOCOLATE</strong>
        <p className="text-sm text-gray-900">Soft foam slim curved strap sandals</p>
          <span className="text-sm font-bold text-red-800">$38</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-5">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>

<section className="mt-10">
<div className="mx-2 lg:mx-20 md:mx-10">
  <ul className=" flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img199} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className=" bg-black text-white px-2">Extra 10% OFF</span>
          <i className={`cursor-pointer ${
            favorite[604] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(604, NewProduct[604])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">CPGN STUDIO</strong>
        <p className="text-sm text-gray-900">Full star pigment hoodie zip up</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$43</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img200} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 10% OFF</span>
         <i className={`cursor-pointer ${
            favorite[605] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(605, NewProduct[605])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">FANSHOW</strong>
        <p className="text-sm text-gray-900">Six color ninteen geometry pants</p>
         <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$58</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img201} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[606] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(606, NewProduct[606])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">FLAREUP</strong>
        <p className="text-sm text-gray-900">Half sleeve layer busten t-shirt</p>
          <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$47</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img202} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center px-2">
          <span className="bg-black text-white px-2">Extra 10% OFF</span>
         <i className={`cursor-pointer ${
            favorite[607] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(607, NewProduct[607])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">AGOD</strong>
        <p className="text-sm text-gray-900">Wide denim pant</p>
         <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img203} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[608] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(608, NewProduct[608])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">FILLUMINATE</strong>
        <p className="text-sm text-gray-900">Damage washeable denim pant</p>
           <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="text-sm font-bold text-red-800">$33</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img204} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[609] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(609, NewProduct[609])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">DEMITRI BLACK</strong>
        <p className="text-sm text-gray-900">Women curved track sweat pant</p>
        <span className="text-gray-600 text-sm font-normal">10% OFF</span>
          <span className="font-sm text-red-800">$32</span>
      </div>
    </li>
  </ul>
</div>

<div className="text-center mt-5">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">VIEW MORE BEST SELLER</button>
</div>
</section> 

<section className="mt-10">
<div className="mx-2 lg:mx-20 md:mx-10">
  <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar ">
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img193} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 20% OFF</span>
         <i className={`cursor-pointer ${
            favorite[610] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(610, NewProduct[610])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">LEIRI</strong>
        <p className="text-sm text-gray-900">Mescul fit short sleeve t-shirt knit</p>
        <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$12</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img194} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
         <i className={`cursor-pointer ${
            favorite[611] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(611, NewProduct[611])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">FLAREUP</strong>
        <p className="text-sm text-gray-900">Layer bustler t-shirt</p>
         <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$45</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img195} alt="SCALLYWANG"  className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[612] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(612, NewProduct[612])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">CHASIN RABBIT'S</strong>
        <p className="text-sm text-gray-900">All about glow cover cream</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$14</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img196} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2 flex justify-between items-center px-2">
          <i className={`cursor-pointer ${
            favorite[613] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(613, NewProduct[613])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">DASHU</strong>
        <p className="text-sm text-gray-900">Daily volume picks front hair root volume</p>
         <span className="text-gray-600 text-sm font-normal">50% OFF</span>
          <span className="text-sm font-bold text-red-800">$17</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img197} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[614] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(614, NewProduct[614])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">FITGLOW</strong>
        <p className="text-sm text-gray-900">Angel wing hoodie zip up</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-600">$34</span>
      </div>
    </li>
    <li className="flex-shrink-0 w-[200px] snap-center lg:w-auto">
      <div className="relative">
        <img src={img198} alt="SCALLYWANG" className="w-full h-auto object-cover rounded"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[615] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(615, NewProduct[615])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium">P.IN.O</strong>
        <p className="text-sm text-gray-900">Cotton crop short sleeve t-shirt muscle-fir</p>
          <span className="text-gray-600 text-sm font-normal">20% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
  </ul>
</div>

</section> 

{/* <section className="mt-20">
  <div className="mx-6 md:mx-20 lg:mx-30 mt-8 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
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
          <span className="text-lg font-bold text-red-800">$30</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img66} alt="SCALLYWANG"></img>
       
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">AMBLER second drop</strong>
          <span className="text-lg font-bold text-red-800">$10 off</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img67} alt="SCALLYWANG"></img>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">CHAAKAN</strong>
        <p className="text-sm text-gray-900">Trending Now | Best selling women shoes</p>
          <span className="text-lg font-bold text-red-800">$29</span>
      </div>
    </li>
  </ul>
</div>
</section>  */}

<section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20  
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
    <h2>THE HOTTEST BRANDS IN SEOUL</h2>
  </div>

  <div className="mx-2 md:mx-10 lg:mx-20 mt-8">
    <ul className="
      flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible no-scrollbar
    ">
      {/* Item 1 */}
      <li className="flex-shrink-0 w-full sm:w-full md:w-[400px] lg:w-[420px] snap-center">
        <div className="">
          <img src={img65} alt="SCALLYWANG" className="w-full h-[500px] sm:h-[700px] md:h-[500px] lg:h-[500px] object-cover rounded"/>
        </div>
        <div className="flex flex-col gap-1 mt-3 ">
          <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">BORN TO WIN</strong>
          <p className="text-sm text-gray-900">Summer 2026 collection</p>
          <span className="text-lg font-bold text-red-800">$30</span>
        </div>
      </li>

      {/* Item 2 */}
      <li className="flex-shrink-0 w-full sm:w-full md:w-[400px] lg:w-[420px] snap-center">
        <div className="">
          <img src={img66} alt="SCALLYWANG" className="w-full h-[500px] sm:h-[700px] md:h-[500px] lg:h-[500px] object-cover rounded"/>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">AMBLER second drop</strong>
          <span className="text-lg font-bold text-red-800">$10 off</span>
        </div>
      </li>

      {/* Item 3 */}
      <li className="flex-shrink-0 w-full sm:w-full md:w-[400px] lg:w-[420px] snap-center">
        <div className="">
          <img src={img67} alt="SCALLYWANG" className="w-full h-[500px] sm:h-[700px] md:h-[500px] lg:h-[500px] object-cover rounded"/>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">CHAAKAN</strong>
          <p className="text-sm text-gray-900">Trending Now | Best selling women shoes</p>
          <span className="text-lg font-bold text-red-800">$29</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section className="mt-10">
  <div className="mx-2 md:mx-10 lg:mx-20 
                  text-sm sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold text-[#0a0f18]">
  <h2>MUSINSA STANDARD WOMEN: TOP SELLERS</h2>
</div>

<div className="mx-2 lg:mx-20 md:mx-10 mt-6">
  <ul className="flex flex-row gap-4 
      overflow-x-auto flex-nowrap snap-x snap-mandatory
      lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-x-visible no-scrollbar">
    <li >
      <div className="relative">
        <img src={img47} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
         <i className={`cursor-pointer ${
            favorite[616] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(616, NewProduct[616])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Slim Crew Neck T-Shirt(5 colors)</p>
        <span className="text-gray-600">23% OFF</span>
          <span className="text-sm font-bold text-red-800">$20</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img48} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2  flex justify-between items-center">
          <span className=" bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[617] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(617, NewProduct[617])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women Cotton curved Pants (3 color)</p>
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
            favorite[618] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(618, NewProduct[618])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women Wide Cargo Pants[black]</p>
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
            favorite[619] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(619, NewProduct[619])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Ribbed slim scoop neck layered jersey</p>
         <span className="text-medium">40% OFF</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
    </li>
    <li>
      <div className="relative">
        <img src={img52} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
          <span className="bg-black text-white px-2">Extra 30% OFF</span>
          <i className={`cursor-pointer ${
            favorite[620] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(620, NewProduct[620])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD</strong>
        <p className="text-sm text-gray-900">Women Polka Long sleeves t-shirt</p>
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
            favorite[621] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(621, NewProduct[621])}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUSINSA STANDARD WOMEN</strong>
        <p className="text-sm text-gray-900">Women low rise Flare Slacks [Black]</p>
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

export default New
