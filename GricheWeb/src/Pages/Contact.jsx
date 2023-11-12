import React from "react";
import "./Contact.css";
import call from "../assets/call.png";
import pickup from "../assets/pickup.png";
import instagram from "../assets/instagram.png";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-page min-h-screen font-epilogue text-black">
      {/*navbar */}
      <div className="product-nav flex justify-between px-[50px] pt-[35px] items-center sm:pt-[50px]">
        <div className="nav-left">
          <h2 className="text-[20px] font-bold text-[#723D0F] drop-shadow-lg sm:text-[30px]">HOLA !</h2>
        </div>
        <div className="nav-center gap-[70px] hidden text-[#723D0F] sm:flex sm:text-[18px]">
          <h2 className="cursor-pointer hover:font-bold" onClick={() => navigate("/")}>
            Home
          </h2>
          <h2 className="cursor-pointer hover:font-bold" onClick={() => navigate("/product")}>
            Product
          </h2>
          <h2 className="cursor-pointer hover:font-bold" onClick={() => navigate("/gallery")}>
            Gallery
          </h2>
        </div>
        <div className="nav-right hidden sm:flex">
          <button className="px-[15px] py-[10px] border-2 rounded-lg text-[16px] font-semibold text-white bg-[#723D0F] hover:bg-transparent hover:border-[#723D0F] hover:text-[#723D0F]" onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </div>
        <div className="nav-dropdown sm:hidden">
          <div className="dropdown dropdown-end">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-[#723D0F]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
              <li>
                <a className="flex justify-center" onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li>
                <a className="flex justify-center" onClick={() => navigate("/product")}>
                  Product
                </a>
              </li>
              <li>
                <a className="flex justify-center" onClick={() => navigate("/gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a className="flex justify-center bg-[#723D0F] text-white" onClick={() => navigate("/contact")}>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*navbar */}

      {/*Content */}

      <div className="container-hero flex flex-col items-center sm:flex-row sm:justify-center sm:gap-[200px] sm:mt-[100px]">
        <div className="hero-content flex-col flex items-center mt-[50px] drop-shadow-2xl">
          <div className="card-1 flex flex-col items-center bg-[#723D0F] px-[40px] py-[25px] rounded-lg text-white">
            <img src={call} />
            <h2 className="font-semibold mt-4">Faried Gunawan</h2>
            <button className="mt-[20px] px-[20px] py-[10px] bg-[#01AE9A] text-white rounded-xl font-semibold" onClick={() => (window.location.href = "https://wa.me/6281389214045")}>
              WhatsApp
            </button>
          </div>
          <div className="card-2"></div>
        </div>

        <div className="hero-content flex-col flex items-center mt-[50px] drop-shadow-2xl">
          <div className="card-1 flex flex-col items-center bg-[#723D0F] px-[40px] py-[25px] rounded-lg text-white">
            <img src={call} />
            <h2 className="font-semibold mt-4">Hafidz Kamaludin</h2>
            <button className="mt-[20px] px-[20px] py-[10px] bg-[#01AE9A] text-white rounded-xl font-semibold" onClick={() => (window.location.href = "https://wa.me/6285659869542")}>
              WhatsApp
            </button>
          </div>
          <div className="card-2"></div>
        </div>
      </div>

      {/*info Pickup */}
      <div className="info-pickup flex flex-col items-center mt-[60px] px-[50px] pb-[60px] sm:flex-row sm:justify-center sm:gap-[100px] sm:mt-[80px]">
        <img src={instagram} className="w-[60px] sm:w-[100px]" />
        <button className="px-[30px] py-[5px]  mt-[30px] rounded-md font-bold text-[25px]  text-[#723D0F] sm:mt-0 sm:px-[30px] sm:py-[15px]" onClick={() => (window.location.href = "https://www.instagram.com/thegriche/")}>
          Visit
        </button>
      </div>
      {/*end info Pickup */}
      {/*end Content */}
    </div>
  );
};

export default Contact;
