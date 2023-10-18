"use client";
import Navbar from "../../Component/Navbar";
import roshanojha from "../../Assets/roshanojha.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Navbar page="about"></Navbar>
      <div className="flex flex-col self-center text-[50px] mt-[35px] ">
        About Me
        <br />
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div className="flex flex-row justify-center align-middle mt-[100px] max-[1280px]:flex-col max-[1280px]:self-center max-[1280px]:mt-[50px] ">
        <div className="mt-[45px] mr-[100px] max-[1280px]:self-center max-[1280px]:mt-[25px]">
          <Image src={roshanojha} alt="" width={300} height={300}></Image>
        </div>

        <div className="flex flex-col w-[650px] h-fit  max-[1280px]: mt-[30px] max-[1110px]:w-[350x]">
          <div className="flex flex-col text-[25px]">
            Designing With Passion While Exploring The World
            <hr className="self-start w-[120px] h-[3px] bg-green-500 rounded mt-[5px]" />
          </div>
          <div className="mt-[20px]  leading-[30px] text-[#6c6c6b]">
            Hey there! I&apos;ve got a portfolio that shows off my frontend
            development skills using React.js and my exploration into fullstack
            development with next.js. It&apos;s a cool mix of projects I&apos;ve
            rocked in Hackthons, competitions, and just for fun. Check it out
            and you&apos;ll see how I&apos;ve been crushing it in the coding
            game!
            <br />
            <br />
            Let&apos;s talk with me
            <br />
            <div className="font-[450]">roshanojha65@gmail.com</div>
            <div className="flex flex-row w-[200px] space-x-[30px] mt-[20px]">
              <FontAwesomeIcon
                icon={faLinkedin}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/roshan-ojha-78832a1aa/",
                    "_blank"
                  )
                }
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#0077b5",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/roshan.ojha01",
                    "_blank"
                  )
                }
                icon={faFacebook}
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#0987ee",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/r.o.s.h.a.n__o.j.h.a/",
                    "_blank"
                  )
                }
                icon={faInstagram}
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#f51240",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex flex-col w-[535px] justify-start align-top mt-[60px] mb-[30px] max-[1110px]:w-[350px]">
        <div className="flex flex-col text-[35px] leading-[90px]">
          My Services
          <hr className="self-start w-[120px] h-[3px] bg-green-500 rounded" />
        </div>
        <br />
        <div className="leading-[30px] mt-[20px] text-[#6c6c6b]">
          Hey there! Need help with your website? Look no further! I offer
          top-notch website development services that will make your online
          presence shine. Whether you need a brand new website from scratch or
          want to revamp your existing one, I, as a skilled developer, will work
          my magic to create a stunning and user-friendly site that perfectly
          represents your brand. Already have a website but need some changes?
          No problem! I can edit and update your website to ensure it&apos;s
          always up-to-date and in line with your evolving business needs. And
          if you&apos;re thinking about migrating your website to a new platform
          or hosting provider, I&apos;ve got you covered there too! I will
          handle the entire migration process smoothly and efficiently, giving
          you peace of mind. So, why wait? Let&apos;s make your website dreams
          come true!
        </div>
        <a href="resumeroshan.pdf" download="roshan" className="max-[1280px]:self-center max-[1280px]:mt-[10px]">
          <div className="mt-[25px] border-[1px] flex w-[150px] cursor-pointer justify-center rounded bg-[#007aff] px-5 py-3 align-middle text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff] ">
            Download CV
          </div>
        </a>
      </div>

      <div className="flex flex-col self-center justify-center align-top mb-[30px] mt-[80px] ">
        <div className="self-center flex flex-col text-[35px] justify-center leading-[90px] max-[1110px]:w-[350px]">
          Work Experience
          <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded max-[660px]:self-start" />
        </div>
        <div className="flex flex-row space-x-[40px] mt-[50px]  max-[1280px]:flex-col max-[1280px]:justify-center max-[1280px]:align-middle max-[1280px]:space-x-[0px] max-[1110px]:w-[350px] max-[1280px]: space-y-[40px]">
          <div className="flex flex-col bg-white w-[400px] h-[300px] p-[20px] max-[1280px]:self-center">
            <div className="text-[25px] max-[1280px]:self-center">React.js</div>
            <div className="mt-[20px] text-[#6c6c6b]">
              React.js is a badass JavaScript library that makes building user
              interfaces a breeze. With its component-based architecture and
              virtual DOM, you can create interactive and dynamic web
              applications like a boss.
            </div>
          </div>
          <div className="flex flex-col bg-white w-[400px] h-[300px] p-[20px] max-[1280px]:self-center">
            <div className="text-[25px] max-[1280px]:self-center">Next.js</div>
            <div className="mt-[20px] text-[#6c6c6b]">
              Next.js is a powerful framework for building server-side rendered
              React applications. It provides an easy-to-use and efficient way
              to create dynamic and fast websites, making it a great choice for
              building complex and high-performance web applications.
            </div>
          </div>
          <div className="flex flex-col bg-white w-[400px] h-[300px] p-[20px] max-[1280px]:self-center">
            <div className="text-[25px] max-[1280px]:self-center">Flask</div>
            <div className="mt-[20px] text-[#6c6c6b]">
              Flask is a super cool Python web framework that makes it easy to
              build web applications. It&apos;s lightweight, flexible, and
              perfect for beginners or those who want to quickly prototype their
              ideas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
