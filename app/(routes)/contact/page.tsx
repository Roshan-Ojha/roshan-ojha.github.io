import Navbar from "@/app/Component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

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

      <div className="flex flex-row self-center mt-[125px] space-x-[60px]">
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

      <div className="w-[1095px] flex flex-row self-center mt-[75px]">
        <div className="flex flex-col bg-white p-[50px] shadow">
          <div className="flex flex-col text-[35px]">
            Get in Touch
            <hr className="self-start w-[210px] h-[3px] bg-green-500 rounded" />
          </div>

          <div className="mt-[50px]">
            <form
              className="flex flex-col space-y-[20px]"
              action="mailto:roshanojha65@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[500px] h-[40px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa]"
              ></input>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-[500px] h-[40px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa]"
                required
              ></input>
              <textarea
                placeholder="Enter your message"
                className="w-[500px] h-[140px] outline-none  border-[1px] focus:border-[2px] rounded-[5px] bg-[#fafafa]"
              ></textarea>
              <input
                type="submit"
                value="Send message"
                className="flex w-[150px] cursor-pointer justify-center rounded bg-[#007aff] px-5 py-3 align-middle text-white hover:border-[1px] hover:border-[#007aff] hover:bg-white hover:text-[#007aff]"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
