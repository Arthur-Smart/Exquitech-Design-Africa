"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./website.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
// import te from "@/styles/te";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? `${styles.dark__bg} flex flex-col items-center justify-center`
          : "flex flex-col items-center justify-center"
      }
    >
      <section className="flex container py-7 website__hero">
        <div className={styles.website__left}>
          <Image
            src="/images/website.png"
            alt="Website Development"
            width={1000}
            height={1000}
            className={styles.web__image}
          />
        </div>
        <div className={`${styles.website__right} mt-11`}>
          <p
            className={
              state.isDarkMode == true
                ? "text-[13px]  mb-[3px] text-white/20"
                : "text-[13px]  mb-[3px] text-gray-900/20"
            }
          >
            Exquitech for web development
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-4xl font-bold ">
            How we will build your website to life
          </h1>
          <p
            className={
              state.isDarkMode == true
                ? "text-white mt-6"
                : "mt-6 text-zinc-500"
            }
          >
            We meticulously design and develop websites and web applications,
            starting with a detailed project vision. Our process involves
            user-centric design, cutting-edge technology, and custom-tailored
            components. Rigorous testing ensures reliability and security.
            Post-launch, we offer ongoing support and maintenance for continuous
            evolution in the digital landscape.
          </p>
          <Link href="/mobile">
            <button
              className={
                state.isDarkMode == true
                  ? `${styles.mobile__web__btn__dark} py-3 px-10 mt-7 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
                  : ` ${styles.mobile__web__btn} py-3 px-10 mt-7 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
              }
            >
              Mobile apps
            </button>
          </Link>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center rounded-lg mb-[95px] bg-gradient-to-r from-indigo-700 to-indigo-500 p-[45px]">
        <h1 className="text-white font-bold text-2xl">
          We do it all for you !
        </h1>
        <p className="text-white text-[15px]">
          We empower Your Online Presence with Comprehensive Web Development
          Solutions
        </p>
        <div className={`${styles.web__services__wrapper} container mt-9`}>
          <div className="web__service flex flex-col items-center justify-center">
            <Image
              src="./images/developer-team.svg"
              alt="Website development"
              width={350}
              height={350}
              // className={styles.web__service__image}
            />
            <h1 className="text-white font-semibold text-center mt-5">
              WEBSITE DEVELOPMENT
            </h1>
            <p className="text-white text-[14px] text-center">
              We believe that professional web development is an art and
              science, and we are dedicated to crafting exceptional online
              experiences that not only meet our clients' needs but also exceed
              their expectations
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
              WEBSITE MAINTENANCE
            </h1>
            <p className="text-white text-[14px] text-center">
              We are committed to providing reliable and comprehensive website
              maintenance services, ensuring that your online presence remains
              secure, up-to-date, and fully functional, so you can focus on
              growing your business.
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
              WEBSITE IMPROVEMENT
            </h1>
            <p className="text-white text-[14px] text-center">
              We are passionate about enhancing your website's performance and
              user experience. Our goal is to continuously analyze, innovate,
              and implement improvements that help your online presence evolve
              and thrive, meeting the changing demands of your audience and
              industry.
            </p>
          </div>
        </div>
        <div className="w-[200px] h-[3px] mt-6 bg-white"></div>
      </section>
    </main>
  );
};

export default page;
