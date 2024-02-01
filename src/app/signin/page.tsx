import React from "react";
import styles from "./signin.module.css";
import Image from "next/image";

import GOOGLE from "../../../public/images/google.svg";
import FACEBOOK from "../../../public/images/facebook.svg";

const page = () => {
  return (
    <main
      className={`${styles.signin__page} flex flex-col items-center justify-center`}
    >
      <h2 className="font-bold text-lg">Welcome to Exquitech</h2>
      <p className="text-[14px] text-gray-400">
        Sign in to your account. We are here to serve you
      </p>
      <section
        className={`${styles.signin__wrapper} flex flex-col border-gray-300 border-[1px] rounded-md text-[14px] text-gray-300 mt-4 p-5`}
      >
        <div className="flex w-full items-center justify-center border-gray-300 border-[1px] rounded-md">
          <Image
            src={GOOGLE}
            alt="Exquitech Login"
            width={35}
            height={35}
          />
          <p className="">Continue with Google</p>
        </div>
        <div className="flex w-full items-center py-[4px] justify-center border-gray-300 border-[1px] rounded-md mt-3">
          <Image
            src={FACEBOOK}
            alt="Exquitech Login"
            width={25}
            height={25}
          />
          <p className="ml-2">Continue with facebook</p>
        </div>
        {/* <div className={`${styles.separator} bg-gray-300 my-5`}></div> */}
        <p className="text-center text-black/50 my-5">
          Continue with Email and password
        </p>
        <form className="flex flex-col items-center">
          <input
            className={`${styles.input} border-gray-300 border-[1px] py-2 px-3 outline-0 rounded-md mt-2`}
            type="email"
            placeholder="Enter Email"
          />
          <input
            className={`${styles.input} border-gray-300 border-[1px] py-2 px-3 outline-0 rounded-md mt-2`}
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-3 rounded-md border-blue-500 bg-blue-500 text-white py-3 px-10">
            Sign in
          </button>
        </form>
        <p className="text-center my-2 text-black">
          Don't have an account? <span className="underline">Sign up</span>
        </p>
      </section>
    </main>
  );
};

export default page;
