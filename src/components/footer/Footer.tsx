import React from "react";
import "./footer.module.css";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#202942]">
      <div className="container flex items-center justify-between py-5">
        <div>
          <p className="text-white text-sm">
            Exquitech Design Africa &copy;2024, All rights reserved
          </p>
        </div>
        <p className="text-white text-sm">Tel: 0742068914 | 0103245172</p>
      </div>
    </div>
  );
};

export default Footer;
