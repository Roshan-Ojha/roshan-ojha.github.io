"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  page: string;
}

function Navbar(props: Props) {
  const [responsive, setresponsive] = useState(false);
  console.log(props.page);
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="invisible flex flex-col max-[885px]:visible relative m-3">
        <FontAwesomeIcon icon={faBars} style={{height:"30px",width:"30px"}} onClick={()=>setresponsive(!responsive)}></FontAwesomeIcon>
        <div className={`absolute w-full pl-[10px] top-[40px] bg-white ${responsive?"visible":"invisible"}`}>
        <div className="h-[45px] flex align-middle items-center text-[20px] text-[#6c6c6b] focus:text-[#007aff]" onClick={() => router.push("/")}>Home</div>
        <div className="h-[45px] flex align-middle items-center text-[20px] text-[#6c6c6b]" onClick={() => router.push("/about")}>About</div>
        <div className="h-[45px] flex align-middle items-center text-[20px] text-[#6c6c6b]" onClick={() => router.push("/portfolio")}>Portfolio</div>
        <div className="h-[45px] flex align-middle items-center text-[20px] text-[#6c6c6b]" onClick={() => router.push("/contact")}>Contact</div>
        </div>
      </div>
      <div className="w-full max-[885px]:hidden">
        <div className="flex flex-row justify-center w-full mt-5 align-middle h-30 ">
          <div className="flex flex-row self-center justify-center align-middle ">
            <div
              className={`px-10  hover:text-[#007aff] ${
                props.page == "home" ? "text-[#007aff]" : "text-[#565c60]"
              } cursor-pointer`}
              onClick={() => router.push("/")}
            >
              Home
            </div>
            <div
              className={`px-10  hover:text-[#007aff] ${
                props.page == "about" ? "text-[#007aff]" : "text-[#565c60]"
              } cursor-pointer`}
              onClick={() => router.push("/about")}
            >
              About
            </div>
            <div
              className={`px-10  hover:text-[#007aff] ${
                props.page == "portfolio" ? "text-[#007aff]" : "text-[#565c60]"
              } cursor-pointer`}
              onClick={() => router.push("/portfolio")}
            >
              Portfolio
            </div>
            <div
              className={`px-10 hover:text-[#007aff] ${
                props.page === "contact" ? "text-[#007aff]" : "text-[#565c60]"
              } cursor-pointer`}
              onClick={() => router.push("/contact")}
            >
              Contact
            </div>
          </div>
          <div
            className="ml-[235px] border-[1px] cursor-pointer rounded bg-[#007aff] px-5 py-3 text-white hover:border-[#007aff]  hover:bg-white hover:text-[#007aff]"
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~013668305659fa27c7",
                "_blank"
              )
            }
          >
            Hire Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
