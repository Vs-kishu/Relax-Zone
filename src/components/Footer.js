import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-500 bg-black border-t-2 flex border-gray-500">
      <div className="flex flex-col p-5 sm:ml-[20%] py-10">
        <p>Question? Call 0000-00000-00000-00</p>
        <div className=" flex items-start gap-10 mt-5 text-xs sm:text-sm ">
          <div className="flex flex-col items-start gap-3">
            <span className="hover:text-white hover:border-b-2 ">FAQ</span>
            <span className="hover:text-white hover:border-b-2 ">
              Cookies Preferences
            </span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="hover:text-white hover:border-b cursor-pointer ">
              Help Centre
            </span>
            <span className="hover:text-white hover:border-b cursor-pointer ">
              Corporate Information
            </span>
          </div>
          <span className="hover:text-white hover:border-b cursor-pointer ">
            Terms of Use
          </span>
          <span className="hover:text-white hover:border-b  cursor-pointer">
            privacy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
