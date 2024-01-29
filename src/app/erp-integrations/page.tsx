"use client";

import React, { useContext } from "react";
import styles from "./erp.module.css";
import Image from "next/image";
import ErpAnimation from "@/components/ErpAnimation";
import { ThemeContext } from "@/context/ThemeContext";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? "w-full flex flex-col items-center justify-center py-9 bg-black"
          : "w-full flex flex-col items-center justify-center py-9"
      }
    >
      <section className="container flex py-7">
        <div className={styles.erp__hero__left}>
          <p
            className={
              state.isDarkMode == true
                ? "text-[13px] mb-[3px] text-white/50"
                : "text-[13px]  mb-[3px] text-gray-900/20"
            }
          >
            Exquitech for ERPs & integrations
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
            Enterprice Resouce Plaining(ERP) Software & Integrations
          </h1>
          <p
            className={
              state.isDarkMode == true
                ? "mt-6 text-white"
                : "mt-6 text-zinc-500"
            }
          >
            What's in for you? We offer HR ERP modules | Sales & Purchase | POS
            | School & Hospital ERP | Integrations
          </p>
          <button
            className={
              state.isDarkMode == true
                ? `${styles.demo__btn__dark} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
                : `${styles.demo__btn} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
            }
          >
            Request for a demo
          </button>
        </div>
        <div className={styles.erp__hero__right}>
          <ErpAnimation />
        </div>
      </section>
      <section
        className={`${styles.solutions__wrapper} container rounded-lg  bg-gradient-to-r from-indigo-700 to-indigo-500 py-[45px] px-4 md:px-[40px]`}
      >
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/manager.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">Human Resource EPR</h1>
            <p className="text-[15px] text-zinc-600">
              We provide comprehensive Human Resource ERP software, tailored to
              streamline HR processes. Our solution encompasses a wide range of
              HR features, facilitating efficient workforce management, talent
              acquisition, payroll, attendance tracking, performance evaluation,
              and more. With our user-friendly interface and advanced analytics,
              businesses can optimize their HR operations, improve employee
              engagement, and make data-driven decisions, ultimately enhancing
              organizational productivity and success
            </p>
          </div>
        </div>
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/sales.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">Sales & Purchase</h1>
            <p className="text-[15px] text-zinc-600">
              Our integrated Sales and Purchase ERP software streamlines both
              sales and procurement processes seamlessly. Features encompass
              sales order management, lead tracking, inventory control, purchase
              order processing, vendor management, and robust analytics. This
              comprehensive solution enables businesses to enhance sales
              performance, optimize procurement, reduce costs, and make informed
              decisions
            </p>
          </div>
        </div>
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/pos.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">POS</h1>
            <p className="text-[15px] text-zinc-600">
              Our Point of Sale (POS) ERP software offers a complete solution
              for businesses. It combines essential features like sales
              transaction processing, inventory management, payment processing,
              and real-time sales analytics. With a user-friendly interface and
              mobile compatibility, it enables efficient sales operations,
              improves customer service, and provides valuable insights for
              decision-making. This POS ERP solution helps businesses streamline
              their retail operations, manage inventory more effectively, and
              enhance the overall customer experience
            </p>
          </div>
        </div>
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/report2.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">Schools & Hosipitals</h1>
            <p className="text-[15px] text-zinc-600">
              Our ERP software for schools and hospitals offers tailored
              solutions to streamline operations. For schools, it includes
              features such as student enrollment, attendance tracking, grade
              management, and parent communication, facilitating efficient
              administration and enhancing educational outcomes etc. In
              hospitals, our ERP covers patient records, appointment scheduling,
              billing, and inventory management, improving patient care and
              operational efficiency. Both solutions offer secure data
              management, analytics, and reporting capabilities to support
              informed decision-making and enhance the overall experience for
              students, patients, and staff etc.
            </p>
          </div>
        </div>
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/bot.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">M-pesa & Chat bots</h1>
            <p className="text-[15px] text-zinc-600">
              We provide integration services for a wide range of essential
              functionalities, including seamless M-Pesa payment integration,
              chatbot implementation for efficient customer support, and social
              media integration for enhanced online presence. Our expertise
              extends to various other services, such as CRM systems, e-commerce
              platforms, and data analytics solutions, allowing businesses to
              harness the power of technology to streamline operations, engage
              customers, and drive growth
            </p>
          </div>
        </div>
        <div
          className={`${styles.solution} items-start flex bg-white p-7 flex rounded-md`}
        >
          <Image
            src="./images/cart.svg"
            alt="ERP solutions"
            width={20}
            height={20}
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg">E-commerce</h1>
            <p className="text-[15px] text-zinc-600">
              Our E-commerce web app is designed to revolutionize online
              shopping. With advanced features like web scraping for real-time
              product updates, personalized email notifications for promotions
              and order updates, intuitive product recommendations, and secure
              payment processing, we offer a user-friendly and dynamic shopping
              experience. Additionally, our app includes user reviews, wishlist
              management, order tracking, and robust customer support, making it
              a one-stop destination for all your online shopping needs
            </p>
          </div>
        </div>
      </section>
      <section className="container action py-11 flex items-center">
        <div className={`${styles.action_left}`}>
          <div
            className={`${styles.banner_holder} flex items-center justify-center cursor-pointer`}
          >
            <Image
              src="./images/player.svg"
              width={70}
              height={70}
              alt="Hospital POS solution"
              className={`${styles.player__btn}`}
            />
            <div className={`${styles.gradient__banner}`}></div>
            <Image
              src="./images/demo.svg"
              alt="E-health POS demo"
              width={400}
              height={40}
              className={styles.demo__pos__image}
            />
          </div>
        </div>
        <div className={`${styles.action_right}`}>
          <h1 className="text-zinc-900 font-semibold text-3xl">
            See our Exqui E-health POS in<br></br> action
          </h1>
          <p className="mt-4 text-zinc-500">
            Learn abour Exqui E-health solution and what are some of the
            <br></br>benefits it comes with.
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
