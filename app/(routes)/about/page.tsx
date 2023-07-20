import Navbar from "../../Component/Navbar";
import roshanojha from "../../Assets/roshanojha.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const page = "about";
  return (
    <div className="flex flex-col justify-center align-middle">
      <Navbar page="about"></Navbar>
      <div className="flex flex-col self-center text-[50px] mt-[35px] ">
        About Me
        <br />
        <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
      </div>

      <div className="flex flex-row justify-center align-middle mt-[100px] ">
        <div className="mt-[45px] mr-[100px]">
          <Image src={roshanojha} alt="" width={300} height={300}></Image>
        </div>

        <div className="flex flex-col w-[650px] h-fit  ">
          <div className="flex flex-col text-[25px]">
            Designing With Passion While Exploring The World
            <hr className="self-start w-[120px] h-[3px] bg-green-500 rounded mt-[5px]" />
          </div>
          <div className="mt-[20px]  leading-[30px] text-[#6c6c6b]">
            r Hey there! I&apos;ve got a killer portfolio that shows off my
            frontend development skills using React.js and my exploration into
            fullstack development with next.js. It&apos;s a cool mix of projects
            I&apos;ve rocked in Hackthons, competitions, and just for fun. Check
            it out and you&apos;ll see how I&apos;ve been crushing it in the
            coding game!
            <br />
            <br />
            Let&apos;s talk with me
            <br />
            <div className="font-[450]">roshanojha65@gmail.com</div>
            <div className="flex flex-row w-[200px] space-x-[30px] mt-[20px]">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#0077b5",
                }}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#0987ee",
                }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  height: "30px",
                  width: "30px",
                  background: "white",
                  color: "#f51240",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
