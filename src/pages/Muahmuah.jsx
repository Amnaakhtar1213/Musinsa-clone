import React, { useState } from "react";


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
import { MuahProduct } from "../data/MuahProductMap.jsx";


const Muahmuah = ({ favorite, toggleFavorite, setFavorite }) => {
  const [pageFavorite, setPageFavorite] = useState(false);

  const togglePageFavorite = () => {
    setPageFavorite((prev) => {
      const newValue = !prev;

      if (newValue) {
        // ✅ mark all products as favorite
        const updatedFavorite = {};
        Object.keys(MuahProduct).forEach((id) => {
          updatedFavorite[id] = true;
        });
        setFavorite(updatedFavorite);
      } else {
        // ✅ clear all favorites when unliking the page
        const clearedFavorite = {};
        Object.keys(MuahProduct).forEach((id) => {
          clearedFavorite[id] = false;
        });
        setFavorite(clearedFavorite);
      }

      return newValue;
    });
  };

  return (
    <>
<div className="mt-32  bg-gray-100 p-3 text-center">
  <span className="text-base">Official online store for leading korean brands</span>
</div>


<div className="flex flex-row gap-2 mx-30 mt-10 border-b pb-8 border-gray-200">

<div>
    <img src={img208} alt="muahmuah" className="w-110 h-110 object-contain"></img>
  </div>

  <div>
    <h1 className="text-4xl font-bold mb-5">MUAHMUAH</h1>
    <p className="text-sm w-150"><span>MUAHMUAH</span>, is inspired by the sound of kiss, delivers a collection that embodies romantic, joyous and bashfull feelings.</p>
   </div>
    <div>
       <i
  className={`cursor-pointer text-4xl ml-12 ${
    pageFavorite ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
  }`}
  onClick={togglePageFavorite}
></i>
    </div>
    
</div>

    <div className="mx-30 mt-10">
      <div className="text-4xl font-bold text-center mb-10">
        <h1>MUAHMUAH TOP SELLING ITEMS</h1>
      </div>
          </div>

<section className="mt-15 mx-30">
  <div className="text-4xl font-bold text-center tracking-wider text-[#0a0f18]">
    <h1 className="mb-8"># Trending now</h1>
  </div>
       <img src={img155} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img156} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[532] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(532, MuahProduct[532])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
           <span className="text-sm font-sm text-gray-600">18%</span>
            <span className="text-sm font-bold text-red-800">$22</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img157} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[533] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(533, MuahProduct[533])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm font-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$22</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img158} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[534] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(534, MuahProduct[534])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Women  yoga wear blur pilate banded wrap crop top</p>
         <span className="text-sm font-sm text-gray-600">18%</span>
          <span className="text-sm font-bold text-red-800">$86</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img159} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[535] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(535, MuahProduct[535])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">One sholder loose fit short sleeves t-shirt</p>
         <span className="text-sm font-sm text-gray-600">18%</span>
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
    <h1 className="mb-12">[MUAHMUAH] GLOBAL EXCLUSIVE: SUMMER 2026 T-SHIRTS</h1>
  </div>
       <img src={img145} alt="SCALLYWANG"></img>
  <div>
    <ul className="flex flex-row gap-4 mt-10">
      <li>
        <div className="relative">
        <img src={img146} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[536] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(536, MuahProduct[536])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">house essiential long sleeve</p>
           <span className="text-sm font-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img147} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[537] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(537, MuahProduct[537])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">red heart slim fit t-shirt</p>
          <span className="text-sm font-bold text-red-800">$30</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img148} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[538] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(538, MuahProduct[538])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">running horse linger gray t-shirt</p>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img149} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[539] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(539, MuahProduct[539])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
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
            favorite[540] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(540, MuahProduct[540])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Ribboned mini short black</p>
           <span className="text-sm font-sm text-gray-600">17%</span>
            <span className="text-sm font-bold text-red-800">$27</span>
          
      </div>
         
      </li>
      <li>
       <div className="relative">
        <img src={img142} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[541] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(541, MuahProduct[541])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Multi tank top white</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img143} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[542] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(542, MuahProduct[542])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Nepolien jersey black</p>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img144} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[543] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(543, MuahProduct[543])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
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
            favorite[544] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(544, MuahProduct[544])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Aran cable collar zip up</p>
           <span className="text-sm font-sm text-gray-600">29%</span>
            <span className="text-sm font-bold text-red-800">$53</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img137} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[545] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(545, MuahProduct[545])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Pixel logo shirt half sleeves black</p>
         <span className="text-sm font-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img138} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[546] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-gray-300"
          }`}
          onClick={() => toggleFavorite(546, MuahProduct[546])}></i>
      </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Silver b over fit t-shirt</p>
         <span className="text-sm font-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$36</span>
      </div>
      </li>
      <li>
       <div className="relative">
        <img src={img139} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[547] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(547, MuahProduct[547])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-bold overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Super wide hidden elastic waist band medium-gray</p>
         <span className="text-sm font-sm text-gray-600">13%</span>
          <span className="text-lg font-bold text-red-800">$35</span>
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
            favorite[548] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(548, MuahProduct[548])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Damage washes denim pants</p>
           <span className="text-sm font-sm text-gray-600">10%</span>
            <span className="text-sm font-bold text-red-800">$20</span>
          
      </div>
         
      </li>
      <li>
        <div className="relative">
        <img src={img127} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
           <i className={`cursor-pointer ${
            favorite[549] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(549, MuahProduct[549])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Everyone banded curved slack</p>
         <span className="text-sm font-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$18</span>
      </div>
      </li>
      <li>
        <div className="relative">
        <img src={img128} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
          <i className={`cursor-pointer ${
            favorite[550] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(550, MuahProduct[550])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Single curved slack sweat-pants</p>
         <span className="text-sm font-sm text-gray-600">10%</span>
         <span className="text-sm font-bold text-red-800">$18</span>
         </div>
      </li>
      <li>
         <div className="relative">
        <img src={img129} alt="SCALLYWANG"></img>
        <div className="absolute bottom-2 right-2  flex justify-between items-center">
            <i className={`cursor-pointer ${
            favorite[551] ? "fa-solid fa-heart text-red-600" : "fa-regular fa-heart text-white"
          }`}
          onClick={() => toggleFavorite(551, MuahProduct[551])}></i>
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-3">
        <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap w-53">MUAHMUAH</strong>
        <p className="text-sm text-gray-900">Small logo curved sweat-pants</p>
         <span className="text-sm font-sm text-gray-600">10%</span>
          <span className="text-sm font-bold text-red-800">$35</span>
      </div>
      </li>
    </ul>
  </div>

  <div className="text-center mt-10">
  <button className="border border-black rounded text-lg px-5 py-2 text-gray-500">SHOP NOW</button>
</div>
</section>


<section className="mt-35 mx-30">
  <div className="items-center text-center">
    <h1 className="text-5xl mb-15">MORE TO EXPLORE</h1>
    <div className="flex flex-row gap-6">
      <div>
        <img src={img205} alt="musinsa" />
        <p className="text-left mt-4 text-xl">DARISEL</p>
      </div>
      <div>
        <img src={img206} alt="musinsa" />
        <p className="text-left mt-4 text-base">Dresses and Sleeveless style chosen by HAN SO-HEE</p>
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

    </>
  );
};

export default Muahmuah;