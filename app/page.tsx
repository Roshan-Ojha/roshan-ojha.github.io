import Navbar from "./Component/Navbar";
import Image from "next/image";
// import roshan from "http://roshanojha.com.np/Assets/roshan.png";
import roshan from "./Assets/roshan.png";


export default function Home() {

  

  return (
    <div className="w-full">
      <Navbar page="home"></Navbar>
      
      <div className="mt-[130px] flex flex-row justify-center space-x-[100px] max-[1110px]:space-x-[0px] max-[1110px]:flex-col max-[1110px]:mt-[25px]">
        <div className="mt-[135px] flex w-[500px] flex-col max-[1110px]:self-center max-[1110px]:mt-[10px] max-[1110px]:w-[350px]">
          <div className="text-[50px] font-[475] leading-[50px] text-[#212121]">
            <span className="max-[1110px]:hidden">I&apos;m</span> Roshan&nbsp;
            <br className="max-[1110px]:hidden"></br>
            Ojha
          </div>
          <div className="mt-[20px] text-[#6c6c6b] max-[1110px]:w-[350px]">
            My Portfolio shows off my abilities in frontend devlopment using
            React.js and my exploration of fullstack devlopment with next.js,
            featuring a variety of projects from Hackathons, competions, and
            personal projects.
          </div>
          <div className="mt-[25px] flex w-[150px] cursor-pointer justify-center rounded bg-[#007aff] px-5 py-3 align-middle text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff] max-[1110px]:self-center max-[1110px]:mt-[75px]">
            Learn More
          </div>
        </div>
        <div className="max-[1110px]:self-center h-[768px] w-[507px] relative max-[1110px]:mt-[40px] max-[1110px]:h-[400px] max-[1110px]:w-[264px]">
          <Image src={roshan} alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
}
