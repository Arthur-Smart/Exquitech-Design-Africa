"use client";

import type { Metadata } from "next";
import React, { useContext } from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import CONTACTIMG from "../../../public/images/contact.png";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? "w-full flex flex-col items-center justify-center bg-black px-3"
          : "w-full flex flex-col items-center justify-center px-3"
      }
    >
      <section
        className={`${styles.contact__wrapper} container flex items-center justify-between  h-[95vh]`}
      >
        <div
          data-aos="fade-up"
          className={`${styles.contact__left}`}
        >
          <p
            className={
              state.isDarkMode == true
                ? "text-[13px]  mb-[3px] text-white/50"
                : "text-[13px]  mb-[3px] text-gray-900/20"
            }
          >
            Contact details
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
            We are social.<br></br>Reach us both online and offline.
          </h1>
          <p className={state.isDarkMode == true ? "mt-6 text-white" : "mt-6"}>
            <strong>
              <Link href="mailto:react777@gmail.com">
                reactdev777@gmail.com:
              </Link>
            </strong>
            For any inquiries and service proposal
          </p>
          <p className={state.isDarkMode == true ? "mt-6 text-white" : "mt-6"}>
            <strong>
              <Link href="tel:+254742068914">Click here to call us:</Link>
            </strong>
            For any inquiries and service proposal or any technical consultaion
          </p>
          <div className="flex flex-col mt-7">
            <p
              className={
                state.isDarkMode == true ? "text-white" : "text-zinc-600"
              }
            >
              Visit our social media platform
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="https://www.facebook.com/profile.php?id=100064319250841"
                target="_blank"
                className="py-2 px-4 rounded-full text-black-500/20 text-[13px] font-semibold bg-blue-500/20"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="py-2 px-4 rounded-full text-black-500/20 text-[13px] font-semibold bg-pink-500/20"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="py-2 px-4 rounded-full text-black-500/20 text-[13px] font-semibold bg-gray-500/50"
              >
                X-twitter
              </Link>
              <Link
                href="#"
                className="py-2 px-4 rounded-full text-black-500/20 text-[13px] font-semibold bg-sky-500/50"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={`${styles.contact__right} flex justify-end`}
        >
          <Image
            src={CONTACTIMG}
            alt="Exquitech Design Africa Contact"
            width={1000}
            height={1000}
            className={styles.contact__image}
          />
        </div>
      </section>
    </main>
  );
};

export default page;
