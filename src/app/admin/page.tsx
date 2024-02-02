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
    </main>
  );
};

export default page;
