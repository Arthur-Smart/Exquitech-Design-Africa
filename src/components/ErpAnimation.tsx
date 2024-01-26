"use client";

import React from "react";
import Lottie from "lottie-react";
import ErpAnimate from "../app/erp.json";

const ErpAnimation = () => {
  return (
    <div
      style={{ height: "30%" }}
      className="-mt-[200px]"
    >
      <Lottie
        loop={true}
        animationData={ErpAnimate}
      />
    </div>
  );
};

export default ErpAnimation;
