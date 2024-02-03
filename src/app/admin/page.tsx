"use client";

import React, { useContext } from "react";
import styles from "./admin.module.css";
import Image from "next/image";
import USERIMAGE from "../../../public/images/question.jpg";
import { ThemeContext } from "@/context/ThemeContext";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="container flex items-center justify-between">
        <div className={`${styles.user__left} flex items-center`}>
          <Image
            src={USERIMAGE}
            alt="Exquitech User account"
            width={200}
            height={200}
            className={styles.user__avatar}
          />
          <div className="ml-3">
            <p className="text-[15px] text-amber-500">Welcome</p>
            <h1
              className={
                state.isDarkMode == true
                  ? "font-bold text-xl text-white"
                  : "font-bold text-xl text-zinc-600"
              }
            >
              Admin(Arthur Smart)
            </h1>
            <p
              className={
                state.isDarkMode == true ? "text-white/50" : "text-black/50"
              }
            >
              It's a new day to serve people
            </p>
          </div>
        </div>
        <div
          className={
            state.isDarkMode == true
              ? `${styles.user__right} flex justify-end text-white`
              : `${styles.user__right} flex justify-end`
          }
        >
          You have 2 requests
        </div>
      </section>
      <div className="h-[2px] mt-3 container bg-zinc-200 py-9 rounded-md bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
      <section className="mt-4 container p">
        <div>
          <Image
            src={USERIMAGE}
            alt=""
            width={100}
            height={100}
            className={styles.user__avatar__pic}
          />
          <p className="font-semibold text-lg mt-2">Joshua Maina</p>
          <p className="font-medium text-zinc-700 ">joshua@gmail.com</p>
          <p className="mt-2 text-[15px] text-zinc-500">
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <div className="my-2">
            <button className="py-[4px] px-5 bg-blue-500 rounded-md text-white">
              Pending
            </button>
            <button className="py-[4px] px-5 bg-[tomato] ml-2 rounded-md text-white">
              Delete
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
