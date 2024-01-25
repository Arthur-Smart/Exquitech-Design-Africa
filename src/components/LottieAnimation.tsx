"use client";

import React from "react";
import WebLottie from "../app/Web.json";
import Lottie from "lottie-react";

const LottieAnimation = () => {
  return (
    <div
      style={{ height: "40%" }}
      className="-mt-[102px]"
    >
      <Lottie
        loop={true}
        animationData={WebLottie}
      />
    </div>
  );
};

export default LottieAnimation;
