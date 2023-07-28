"use client";
import Navbar from "@/app/Component/Navbar";
import { useState } from "react";
import Image from "next/image";
import mis from "../../Assets/mis.png";
import newsportal from "../../Assets/newsportal.png";
import onlinestore from "../../Assets/onlinestore.png";
import searchproduct from "../../Assets/searchproduct.png";

export default function Portfolio() {
  const [position, setposition] = useState(0);
  return (
    <div className="flex flex-col justify-center">
      <Navbar page="portfolio"></Navbar>
      <div className="flex flex-col self-center text-[50px] mt-[35px] ">
        Portfolio
        <br />
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div className="flex flex-col self-center text-[30px] mt-[100px]">
        Some of my Project
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div className=" w-[1200px] h-[350px] mt-[50px] flex relative overflow-hidden transition-left ">
        <div
          className={` w-[300px] h-[300px] self-center absolute left-[${position}px] transition-all`}
          onClick={() =>
            window.open(
              "https://sagarmathamis.netlify.app/",
              "_blank"
            )
          }
        >
          <Image src={mis} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center absolute left-[${
            position + 340
          }px] transition-all `}
          onClick={() =>
            window.open(
              "https://revampnewsportal.netlify.app/",
              "_blank"
            )
          }
        >
          <Image src={newsportal} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center absolute left-[${
            position + 680
          }px] transition-all `}
          onClick={() =>
            window.open(
              "https://onlinesstores.netlify.app/",
              "_blank"
            )
          }
        >  
          <Image src={onlinestore} alt="" layout="fill"></Image>
        </div>
        <div
          className={` w-[300px] h-[300px] self-center absolute left-[${
            position + 1020
          }px] transition-all `}
          onClick={() =>
            window.open(
              "https://searcheproducts.netlify.app/",
              "_blank"
            )
          }
        >
          <Image src={searchproduct} alt="" layout="fill"></Image>
        </div>
        <div
          className={`bg-teal-500 w-[300px] h-[300px] self-center absolute left-[${
            position + 1360
          }px] transition-all `}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/roshan-ojha-78832a1aa/",
              "_blank"
            )
          }
        ></div>
      </div>
      <div className="flex w-full mt-[30px] px-[50px] justify-between">
        <div
          className="text-[50px] font-bold text-[#007aff] cursor-pointer"
          onClick={() =>
            position < -1020 ? setposition(0) : setposition(position - 340)
          }
        >
          &larr;
        </div>
        <div
          className={`text-[50px] font-bold text-[#007aff] cursor-${
            position < 0 ? "pointer" : "not-allowed"
          }`}
          onClick={() => (position < 0 ? setposition(position + 340) : "")}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
}
