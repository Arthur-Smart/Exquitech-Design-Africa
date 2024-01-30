"use client";

import React, { useContext } from "react";
import styles from "./account.module.css";
import Image from "next/image";
import USERIMAGE from "../../../../public/images/question.jpg";
import { ThemeContext } from "@/context/ThemeContext";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? "w-full py-7 flex flex-col items-center justify-center bg-black"
          : "w-full py-7 flex flex-col items-center justify-center"
      }
    >
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
              Samuel Maina
            </h1>
            <p
              className={
                state.isDarkMode == true ? "text-white/50" : "text-black/50"
              }
            >
              Let us know how we can serve you
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
          You have 2 orders
        </div>
      </section>
      <div className="h-[2px] mt-3 container bg-zinc-200 py-9 rounded-md bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
      <section className="container mt-5">
        <p
          className={
            state.isDarkMode == true
              ? "text-[14px] text-white"
              : "text-[14px] text-zinc-500"
          }
        >
          Create a new Order
        </p>
        <div className={`${styles.request__wrapper} flex `}>
          <form className={`${styles.form__detail} flex flex-col py-3 pr-3`}>
            <select className="w-full border-gray-200 border-[1px] py-2 px-3 rounded-md outline-0">
              <option value="design">Graphic Designing</option>
              <option value="website">Website development</option>
              <option value="mobile">Mobile apps development</option>
              <option value="marketing">Digital marketing</option>
              <option value="erp">ERP solution</option>
            </select>
            <input
              className={`${styles.input} w-full border-gray-200 border-[1px] py-2 px-3 rounded-md outline-0 mt-2`}
              type="text"
              placeholder="Enter mobile number"
            />
            <textarea
              className={`${styles.textarea} w-full border-gray-200 border-[1px] py-2 px-3 rounded-md outline-0 mt-2`}
              placeholder="Describe your request"
            ></textarea>
            <button
              className={`${styles.sunbmit__btn} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`}
            >
              {" "}
              Submit
            </button>
          </form>
          <div
            className={
              state.isDarkMode == true
                ? `${styles.requests__wrapper} flex flex-col p-3 rounded-md bg-white`
                : `${styles.requests__wrapper} flex flex-col p-3 rounded-md`
            }
          >
            <div
              className={`${styles.detail__cont} flex flex-col w-full bg-gray-100 rounded-md p-3 rounded-md`}
            >
              <div>
                <h1 className="font-semibold text-lg">Graphic Designing</h1>
                <p className="text-[13px]">Order made on: January 14, 2024</p>
              </div>
              <div className="mt-2 w-full flex items-center justify-between">
                <button className="rounded-full bg-blue-500/50 px-3 py-[2px] text-[14px] text-white">
                  Pending
                </button>
                <button className="rounded-full bg-red-500/50 px-3 py-[2px] text-[14px] text-white">
                  Cancel
                </button>
              </div>
            </div>
            <div
              className={`${styles.detail__cont} flex flex-col w-full bg-gray-100 rounded-md p-3 rounded-md mt-3`}
            >
              <div>
                <h1 className="font-semibold text-lg">Website Development</h1>
                <p className="text-[13px]">Order made on: January 10, 2024</p>
              </div>
              <div className="mt-2 w-full flex items-center justify-between">
                <button className="rounded-full bg-green-500/50 px-3 py-[2px] text-[14px] text-white">
                  Done
                </button>
                <button className="rounded-full bg-red-500/50 px-3 py-[2px] text-[14px] text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
