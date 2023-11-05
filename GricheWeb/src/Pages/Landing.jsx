import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import logo from "../assets/logo.png";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page min-h-screen font-epilogue  text-black">
      {/*start content */}
      {/*navbar */}
      <div className="landing-nav flex justify-between px-[50px] pt-[35px] items-center sm:pt-[50px]">
        <div className="nav-left">
          <h2 className="text-[20px] font-bold text-[#723D0F] drop-shadow-lg sm:text-[30px]">HOLA !</h2>
        </div>
        <div className="nav-center gap-[70px] hidden text-[#723D0F] sm:flex sm:text-[18px]">
          <h2 className="cursor-pointer hover:font-bold">Home</h2>
          <h2 className="cursor-pointer hover:font-bold" onClick={() => navigate("/product")}>
            Product
          </h2>
          <h2 className="cursor-pointer hover:font-bold">Packaging</h2>
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
                <a className="flex justify-center">Home</a>
              </li>
              <li>
                <a className="flex justify-center" onClick={() => navigate("/product")}>
                  Product
                </a>
              </li>
              <li>
                <a className="flex justify-center">Packaging</a>
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

      <div className="landing-content flex-col-reverse flex items-center px-[50px] pt-[10px] sm:flex-row sm:justify-between">
        <div className="landing-caption flex items-center flex-col sm:items-start">
          <h2 className="text-[#81593C] text-[25px] font-semibold sm:text-[30px]">Dessert - </h2>
          <h2 className="text-[#683824] text-[30px] font-bold mt-[12px] sm:text-[60px]">Grilled Cheese</h2>
          <h2 className="text-[#813B13] text-center text-[12px] mt-[12px] sm:text-[18px] sm:w-[544px] sm:text-justify">
            Nikmati sensasi lezat tanpa merogoh kocek dalam! Grilled cheese kami adalah pilihan sempurna untuk mahasiswa cerdas yang mencari makanan murah, praktis, dan enak. Rasakan kelezatan keju yang meleleh dalam setiap gigitan.
          </h2>
          <button className="px-[10px] py-[5px] border-2 border-[#723D0F] sm:px-[15px] sm:py-[10px]  font-semibold text-[#723D0F] rounded-[7px] flex items-center gap-[8px] mt-[40px] sm:text-[20px]" onClick={() => navigate("/product")}>
            Product{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none" className="hover:text-white">
                <path d="M13.0108 3.25H0V5.41667H13.0108V8.66667L17.3333 4.33333L13.0108 0V3.25Z" fill="#723D0F" />
              </svg>
            </span>
          </button>
        </div>
        <div className="logo">
          <img src={logo} className="w-[300px] sm:w-[590px]" />
        </div>
      </div>

      {/*end content */}
    </div>
  );
};

export default Landing;
