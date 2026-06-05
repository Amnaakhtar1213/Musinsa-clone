import React from 'react'
import "./Hero.css"
import img1 from "../../assets/u-1.webp";
import img2 from "../../assets/u-2.webp";
import img3 from "../../assets/u-3.webp";
import img4 from "../../assets/u-4.webp";
import img5 from "../../assets/u-5.webp";
import img6 from "../../assets/u-6.webp";
import img7 from "../../assets/u-7.webp";
import img8 from "../../assets/u-8.webp";
import img9 from "../../assets/u-9.webp";
import img10 from "../../assets/u-10.webp";
import img11 from "../../assets/u-11.webp";
import img12 from "../../assets/u-12.webp";
import img13 from "../../assets/u-13.webp";
import img14 from "../../assets/s-1.webp";
import img15 from "../../assets/s-2.webp";
import img16 from "../../assets/m-6.webp";
import img17 from "../../assets/m-7.webp";
import img18 from "../../assets/m-8.webp";
import img19 from "../../assets/s-3.jpg";
import img20 from "../../assets/m-10.webp";
import img21 from "../../assets/sti-9.png";
import img22 from "../../assets/h-1.jpg";
import img23 from "../../assets/h-2.jpg";
import img24 from "../../assets/h-3.jpg";
import img25 from "../../assets/h-4.jpg";
import img26 from "../../assets/b-2.jpg";

const Hero = () => {
   return (
    <div>
      <div className="flex items-center justify-center h-10 bg-gray-100 mt-35">
        <p>Start shopping on our APP and get 15% OFF | WLCMAPP</p>
      </div>

<div className="mx-30">
  <div className="flex justify-center gap-4 mt-4">
        {/* <img src={img1} alt="img-1" className="w-1/4 h-auto"></img>
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
      
<div className=" mx-40 mt-5 flex flex-row gap-4 justify-center items-center">
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

<section>
  <div className="mx-30 mt-6 text-4xl font-bold tracking-wider text-[#0a0f18]">
  <h2>24H ONLY: EXTRA 30% OFF </h2>
</div>

<div className="mx-30 mt-10  bg-gray-200 p-4 text-center">
  <span>End in: <strong>01:30:20</strong></span>
</div>

<div>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</div>
</section>

    </div>
  )
}

export default Hero
