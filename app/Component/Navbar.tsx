"use client";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center w-full mt-5 align-middle h-30 ">
        <div className="flex flex-row self-center justify-center align-middle ">
          <div className="px-10 text-[#565c60] hover:text-[#007aff] cursor-pointer">Home</div>
          <div
            className="px-10 text-[#565c60] hover:text-[#007aff] cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About
          </div>
          <div className="px-10 text-[#565c60] hover:text-[#007aff] cursor-pointer">
            Portfolio
          </div>
          <div className="px-10 text-[#565c60] hover:text-[#007aff] cursor-pointer">
            Contact
          </div>
        </div>
        <div className="ml-[235px] rounded bg-[#007aff] px-5 py-3 text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
          Hire Me
        </div>
      </div>
    </div>
  );
}
