"use client"
import Navbar from "@/app/Component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <Navbar page="contact" />
      <div className="flex self-center">
        <div className="flex flex-col self-center text-[50px] mt-[35px] ">
          Contact
          <br />
          <hr className="self-center w-[120px] h-[3px] bg-green-500 rounded" />
        </div>
      </div>

      <div className="flex flex-row self-center mt-[125px] space-x-[60px] max-[1110px]:flex-col max-[1110px]:space-x-[0px] max-[1110px]:space-y-[50px] max-[1110px]:mt-[70px]">
        <div className="w-[325px] h-[150px] bg-white flex align-middle justify-center flex-col space-y-[20px] shadow-lg rounded">
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              background: "white",
              color: "#49a078",
              height: "30px",
              width: "30px",
            }}
          />
          <div className="self-center text-[#6c6c6b]">+9779847115587</div>
        </div>
        <div className="w-[325px] h-[150px] bg-white flex align-middle justify-center flex-col space-y-[20px] shadow-lg rounded">
          <FontAwesomeIcon
            icon={faHouse}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              background: "white",
              color: "#49a078",
              height: "30px",
              width: "30px",
            }}
          />
          <div className="self-center text-[#6c6c6b]">
            New Baneshwor, Kathmandu
          </div>
        </div>
        <div className="w-[325px] h-[150px] bg-white flex align-middle justify-center flex-col space-y-[20px] shadow-lg rounded">
          <FontAwesomeIcon
            icon={faInbox}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              background: "white",
              color: "#49a078",
              height: "30px",
              width: "30px",
            }}
          />
          <div className="self-center text-[#6c6c6b]">
            roshanojha65@gmail.com
          </div>
        </div>
      </div>

      <div className="w-[1095px] flex flex-row self-center  mt-[75px] space-x-[100px] max-[1110px]:flex-col max-[1110px]:px-[0px] max-[1110px]:space-x-[0px] ">
        <div className="flex flex-col bg-white px-[100px] py-[75px] shadow max-[1110px]:px-[10px] max-[1110px]:self-center max-[1110px]:w-[450px] max-[1110px]:py-[30px]">
          <div className="flex flex-col text-[27px] max-[1110px]:self-center">
            Get in Touch
            <hr className="self-start w-[160px] h-[3px] bg-green-500 rounded" />
          </div>

          <div className="mt-[50px]">
            <form
              className="flex flex-col space-y-[20px] "
              action="mailto:roshanojha65@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[500px] h-[40px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa] max-[1110px]:w-[320px]"
              ></input>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-[500px] h-[40px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa] max-[1110px]:w-[320px]"
                required
              ></input>
              <textarea
                placeholder="Enter your message"
                className="w-[500px] h-[140px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa] max-[1110px]:w-[320px]"
              ></textarea>
              <input
                type="submit"
                value="Send message"
                className="flex w-[150px] cursor-pointer justify-center rounded bg-[#007aff] px-5 py-3 align-middle text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff] max-[1110px]:self-end max-[1110px]:w-[320px]"
              ></input>
            </form>
          </div>
        </div>

        <div className="flex  flex-col w-[160px] mt-[25px] max-[1110px]:self-center max-[1110px]:mt-[30px]  max-[1110px]:w-[320px]">
          <div className="flex flex-col text-[27px]">
            Message Me
            <hr className="self-start w-[30px] h-[3px] bg-green-500 rounded mt-[15px] max-[1110px]:self-center " />
          </div>
          <div className="mt-[35px] text-[#6c6c6b]">
            Please feel free to call or email me, or use my contact form to get
            in touch with me.
            <br />
            <br />I look forward to hearing from you!
          </div>
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
                window.open("https://www.facebook.com/roshan.ojha01", "_blank")
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
  );
}
