import React from "react";
import "./Product.css";
import original from "../assets/original.png";
import beef from "../assets/beef.png";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="Product-page min-h-screen font-epilogue text-black">
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

      {/*content */}
      <div className="product-1 flex-col-reverse flex items-center mt-[100px] px-[50px] sm:flex-row sm:justify-between sm:mt-[170px] sm:px-[150px]">
        <div className="product-1-caption flex flex-col items-center sm:items-start">
          <h2 className="text-[35px] font-semibold text-[#683824] sm:text-[40px] sm:font-bold">-Original</h2>
          <h2 className="text-[25px] font-medium text-[#683824] mt-[10px] flex items-center gap-[10px] sm:text-[30px]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 43 43" fill="none">
                <path
                  d="M25.5312 38.3416C24.8444 39.0284 23.9934 39.3718 22.9781 39.3718C21.9628 39.3718 21.1118 39.0284 20.425 38.3416L4.65832 22.5749C4.32985 22.2465 4.06827 21.8583 3.87357 21.4103C3.67888 20.9624 3.58213 20.4846 3.58332 19.977V7.16659C3.58332 6.18117 3.93449 5.3373 4.63682 4.63496C5.33916 3.93263 6.18244 3.58206 7.16666 3.58325H19.9771C20.4847 3.58325 20.9625 3.6806 21.4104 3.8753C21.8583 4.06999 22.2465 4.33098 22.575 4.65825L38.3417 20.4697C39.0285 21.1565 39.3719 22.0004 39.3719 23.0013C39.3719 24.0023 39.0285 24.8456 38.3417 25.5312L25.5312 38.3416ZM11.6458 14.3333C12.3924 14.3333 13.0272 14.0717 13.5504 13.5485C14.0735 13.0253 14.3345 12.3911 14.3333 11.6458C14.3333 10.8992 14.0717 10.2644 13.5486 9.74121C13.0254 9.21805 12.3912 8.95706 11.6458 8.95826C10.8993 8.95826 10.2644 9.21984 9.74128 9.74301C9.21812 10.2662 8.95713 10.9004 8.95832 11.6458C8.95832 12.3923 9.21991 13.0271 9.74307 13.5503C10.2662 14.0735 10.9005 14.3345 11.6458 14.3333Z"
                  fill="#683824"
                />
              </svg>
            </span>
            IDR 8k
          </h2>
          <button
            className="px-[10px] py-[10px] border-2 border-[#683824] rounded-md text-[#683824] font-semibold mt-[10px] flex items-center gap-[10px] sm:mt-[30px] sm:text-[20px]"
            onClick={() => (window.location.href = "https://forms.gle/WsCEmCbTMfvhFU3g8")}
          >
            Buy Now{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_41_44)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.06 10.9399C16.3409 11.2212 16.4987 11.6024 16.4987 11.9999C16.4987 12.3974 16.3409 12.7787 16.06 13.0599L10.404 18.7179C10.1226 18.9992 9.74102 19.1571 9.34316 19.157C8.9453 19.1569 8.56377 18.9988 8.28251 18.7174C8.00125 18.436 7.84329 18.0544 7.84338 17.6566C7.84348 17.2587 8.00162 16.8772 8.28301 16.5959L12.879 11.9999L8.28301 7.40391C8.00964 7.12114 7.85827 6.7423 7.8615 6.34901C7.86473 5.95571 8.0223 5.57941 8.30028 5.30117C8.57827 5.02292 8.95441 4.86499 9.34771 4.86139C9.741 4.85779 10.12 5.0088 10.403 5.28191L16.061 10.9389L16.06 10.9399Z"
                    fill="#683824"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_41_44">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
        <div className="product-1-img">
          <img src={original} className="w-[350px] sm:w-[600px]" />
        </div>
      </div>

      {/** */}
      <div className="product-2 flex-col-reverse flex items-center mt-[170px] px-[50px] pb-[100px] sm:flex-row-reverse sm:justify-between sm:mt-[300px] sm:px-[150px]">
        <div className="product-1-caption flex flex-col items-center sm:items-end">
          <h2 className="text-[35px] font-semibold text-[#683824] sm:text-[40px] sm:font-bold">-Beef</h2>
          <h2 className="text-[25px] font-medium text-[#683824] mt-[10px] flex items-center gap-[10px] sm:text-[30px]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 43 43" fill="none">
                <path
                  d="M25.5312 38.3416C24.8444 39.0284 23.9934 39.3718 22.9781 39.3718C21.9628 39.3718 21.1118 39.0284 20.425 38.3416L4.65832 22.5749C4.32985 22.2465 4.06827 21.8583 3.87357 21.4103C3.67888 20.9624 3.58213 20.4846 3.58332 19.977V7.16659C3.58332 6.18117 3.93449 5.3373 4.63682 4.63496C5.33916 3.93263 6.18244 3.58206 7.16666 3.58325H19.9771C20.4847 3.58325 20.9625 3.6806 21.4104 3.8753C21.8583 4.06999 22.2465 4.33098 22.575 4.65825L38.3417 20.4697C39.0285 21.1565 39.3719 22.0004 39.3719 23.0013C39.3719 24.0023 39.0285 24.8456 38.3417 25.5312L25.5312 38.3416ZM11.6458 14.3333C12.3924 14.3333 13.0272 14.0717 13.5504 13.5485C14.0735 13.0253 14.3345 12.3911 14.3333 11.6458C14.3333 10.8992 14.0717 10.2644 13.5486 9.74121C13.0254 9.21805 12.3912 8.95706 11.6458 8.95826C10.8993 8.95826 10.2644 9.21984 9.74128 9.74301C9.21812 10.2662 8.95713 10.9004 8.95832 11.6458C8.95832 12.3923 9.21991 13.0271 9.74307 13.5503C10.2662 14.0735 10.9005 14.3345 11.6458 14.3333Z"
                  fill="#683824"
                />
              </svg>
            </span>
            IDR 10k
          </h2>
          <button
            className="px-[10px] py-[10px] border-2 border-[#683824] rounded-md text-[#683824] font-semibold mt-[10px] flex items-center gap-[10px] sm:mt-[30px] sm:text-[20px]"
            onClick={() => (window.location.href = "https://forms.gle/WsCEmCbTMfvhFU3g8")}
          >
            Buy Now{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_41_44)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.06 10.9399C16.3409 11.2212 16.4987 11.6024 16.4987 11.9999C16.4987 12.3974 16.3409 12.7787 16.06 13.0599L10.404 18.7179C10.1226 18.9992 9.74102 19.1571 9.34316 19.157C8.9453 19.1569 8.56377 18.9988 8.28251 18.7174C8.00125 18.436 7.84329 18.0544 7.84338 17.6566C7.84348 17.2587 8.00162 16.8772 8.28301 16.5959L12.879 11.9999L8.28301 7.40391C8.00964 7.12114 7.85827 6.7423 7.8615 6.34901C7.86473 5.95571 8.0223 5.57941 8.30028 5.30117C8.57827 5.02292 8.95441 4.86499 9.34771 4.86139C9.741 4.85779 10.12 5.0088 10.403 5.28191L16.061 10.9389L16.06 10.9399Z"
                    fill="#683824"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_41_44">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
        <div className="product-1-img">
          <img src={beef} className="w-[300px] sm:w-[600px]" />
        </div>
      </div>
      {/*end content */}
    </div>
  );
};

export default Product;
