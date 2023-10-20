"use client";
import Navbar from "@/app/Component/Navbar";
import { useRef, useState } from "react";
import Image from "next/image";
import mis from "../../Assets/mis.png";
import newsportal from "../../Assets/newsportal.png";
import onlinestore from "../../Assets/onlinestore.png";
import searchproduct from "../../Assets/searchproduct.png";

export default function Portfolio() {

  const carousel =  useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col w-full">
      <Navbar page="portfolio"></Navbar>
      <div className="flex flex-col self-center text-[50px] mt-[35px] ">
        Portfolio
        <br />
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div className="flex flex-col self-center text-[30px] mt-[100px]">
        Some of my Projects
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div ref={carousel } className="flex w-[1020px] self-center mt-[50px] space-x-[30px] overflow-x-scroll no-scrollbar scroll-smooth max-[1110px]:w-[320px] max-[480px]:self-center" >
        <div
          className={` w-[300px] h-[300px] self-center relative shrink-0`}
          onClick={() =>
            window.open("https://sagarmathamis.netlify.app/", "_blank")
          }
        >
          <Image src={mis} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center relative shrink-0`}
          onClick={() =>
            window.open("https://revampnewsportal.netlify.app/", "_blank")
          }
        >
          <Image src={newsportal} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center relative shrink-0`}
          onClick={() =>
            window.open("https://onlinesstores.netlify.app/", "_blank")
          }
        >
          <Image src={onlinestore} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center relative shrink-0`}
          onClick={() =>
            window.open("https://searcheproducts.netlify.app/", "_blank")
          }
        >
          <Image src={searchproduct} alt="" layout="fill"></Image>
        </div>
        
      </div>
      <div className="flex mt-[30px] px-[50px] w-[1020px] justify-between self-center  max-[480px]:hidden">
        <div
          className="text-[50px] font-bold text-[#007aff] cursor-pointer"
          onClick={() =>
            {carousel.current?carousel.current.scrollLeft += 600:""}
          }
        >
          &larr;
        </div>
        <div
          className={`text-[50px] font-bold text-[#007aff] cursor-pointer `}
          onClick={() =>
            {carousel.current?carousel.current.scrollLeft -= 600:""}
          }
        >
          &rarr;
        </div>
        
      </div>
    </div>
  );
}
