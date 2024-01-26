import React from "react";
import styles from "./marketing.module.css";
import Image from "next/image";
import IMAGE from "../../../public/images/marketing.png";

const page = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="container flex  justify-between py-9 ">
        <div className={`${styles.marketing__left}`}>
          <p className="text-[13px]  mb-[3px] text-gray-900/20">
            Exquitech for Digital marketing & Graphic Design
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
            A better Digital Marketing Solutions for your business
          </h1>
          <p className="mt-6 text-zinc-500">
            With data-driven tactics and innovative campaigns, we propel your
            brand to success, ensuring you reach and engage your target
            audience. Let's elevate your brand together as guardians of your
            vision, leaving a lasting mark on the digital landscape.
          </p>
          <button
            className={`${styles.marketing__btn} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`}
          >
            Get started
          </button>
        </div>
        <div className={`${styles.marketing__right} flex justify-end`}>
          <Image
            src={IMAGE}
            alt="Digital marketing"
            width={1000}
            height={1000}
            className={styles.marketing__image}
          />
        </div>
      </section>
    </main>
  );
};

export default page;
