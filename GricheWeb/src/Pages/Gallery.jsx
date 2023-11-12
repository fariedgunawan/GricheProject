import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="gallery-body min-h-screen text-black">
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
          <h2 className="cursor-pointer hover:font-bold">Gallery</h2>
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
                <a className="flex justify-center">Gallery</a>
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
      <h2 className="font-semibold text-[40px] text-center mt-[13rem] text-[#723D0F]">Up Coming</h2>
    </div>
  );
};

export default Gallery;
