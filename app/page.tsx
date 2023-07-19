
import Navbar from "./Component/Navbar";
import Image from "next/image";
// import roshan from "http://roshanojha.com.np/Assets/roshan.png";

import roshan from "./Assets/roshan.png"

export default function Home() {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="mt-[130px] flex flex-row justify-center space-x-[100px]">
        <div className="mt-[135px] flex w-[500px] flex-col">
          <div className="text-[50px] font-[475] leading-[50px] text-[#212121]">
            I&apos;m Roshan
            <br />
            Ojha
          </div>
          <div className="mt-[20px] text-[#6c6c6b]">
            My Portfolio shows off my abilities in frontend devlopment using
            React.js and my exploration of fullstack devlopment with next.js,
            featuring a variety of projects from Hackathons, competions, and
            personal projects.
          </div>
          <div className="mt-[25px] flex w-[150px] cursor-pointer justify-center rounded bg-[#007aff] px-5 py-3 align-middle text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
            Learn More
          </div>
        </div>
        <div>
          <Image src={roshan} alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
