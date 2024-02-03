"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./mobile.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
// import te from "@/styles/te";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? "flex flex-col items-center justify-center bg-black px-3"
          : "flex flex-col items-center justify-center px-3"
      }
    >
      <section className={`flex container py-7 ${styles.mobile__hero}`}>
        <div
          data-aos="fade-right"
          className={styles.mobile__left}
        >
          <Image
            src="/images/phone.png"
            alt="Website Development"
            width={2000}
            height={2000}
            className={styles.mobile__image}
          />
        </div>
        <div
          data-aos="fade-left"
          className={`${styles.mobile__right}`}
        >
          <p
            className={
              state.isDarkMode == true
                ? "text-[13px]  mb-[3px] text-white/20"
                : "text-[13px]  mb-[3px] text-gray-900/20"
            }
          >
            Exquitech for mobile apps development
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-4xl font-bold ">
            How we will build your mobile app to life
          </h1>
          <p
            className={
              state.isDarkMode == true
                ? "mt-6 text-white"
                : "mt-6 text-zinc-500"
            }
          >
            At our core, we are dedicated to the art and science of crafting
            exceptional mobile apps for both Android and iOS platforms. Our
            approach is marked by meticulous attention to detail, beginning with
            the conceptualization phase, where we envision and define the
            project's objectives. As we dive into the design stage, our focus
            remains steadfast on creating user-centric interfaces that not only
            captivate visually but also intuitively respond to the needs and
            preferences of your target audience.
          </p>
          <Link href="/website">
            <button
              className={
                state.isDarkMode == true
                  ? `${styles.mobile__web__btn__dark} py-3 px-10 mt-7 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
                  : `${styles.mobile__web__btn} py-3 px-10 mt-7 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
              }
            >
              Websites
            </button>
          </Link>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center rounded-lg mb-[95px] bg-gradient-to-r from-indigo-700 to-indigo-500 p-[45px]">
        <h1
          data-aos="fade-up"
          className="text-white font-bold text-2xl"
        >
          We do it all for you !
        </h1>
        <p
          data-aos="fade-up"
          className="text-white text-[15px]"
        >
          Elevating Your Mobile Experience through Comprehensive App Development
          Solutions
        </p>
        <div
          data-aos="fade-up"
          className={`${styles.mobile__services__wrapper} container mt-9`}
        >
          <div className="web__service flex flex-col items-center justify-center">
            <Image
              src="./images/developer-team.svg"
              alt="Website development"
              width={350}
              height={350}
              // className={styles.web__service__image}
            />
            <h1 className="text-white font-semibold text-center mt-5">
              MOBILE DEVELOPMENT
            </h1>
            <p className="text-white text-[14px] text-center">
              In mobile app development, we prioritize exceeding client
              expectations by creating innovative and user-centric experiences.
              Our process combines cutting-edge technology and rigorous quality
              assurance, ensuring reliability and security.
            </p>
          </div>
          <div className="web__service flex flex-col items-center justify-center">
            <Image
              src="./images/web-maintainace.svg"
              alt="Website development"
              width={350}
              height={350}
            />
            <h1 className="text-white font-semibold text-center mt-5">
              MOBILE MAINTENANCE
            </h1>
            <p className="text-white text-[14px] text-center">
              In mobile app maintenance, our commitment revolves around ensuring
              the continued reliability and optimal performance of your app. We
              offer ongoing support and regular updates to keep your app secure
              and up-to-date, providing a seamless experience for users.
            </p>
          </div>
          <div className="web__service flex flex-col items-center justify-center">
            <Image
              src="./images/improvements.svg"
              alt="Website development"
              width={350}
              height={350}
            />
            <h1 className="text-white font-semibold text-center mt-5">
              Mobile IMPROVEMENT
            </h1>
            <p className="text-white text-[14px] text-center">
              In mobile app improvement, our focus is on enhancing your app's
              performance and user experience. We continuously analyze,
              innovate, and implement improvements to keep your app aligned with
              evolving industry trends and user expectations.
            </p>
          </div>
        </div>
        <div className="w-[200px] h-[3px] mt-6 bg-white"></div>
      </section>
    </main>
  );
};

export default page;
