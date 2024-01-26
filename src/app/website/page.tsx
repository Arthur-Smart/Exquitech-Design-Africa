import React from "react";
import Image from "next/image";
import styles from "./website.module.css";
// import te from "@/styles/te";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex container py-7 website__hero">
        <div className={styles.website__left}>
          <Image
            src="/images/software-engineer.svg"
            alt="Website Development"
            width={200}
            height={500}
            className={styles.web__image}
          />
        </div>
        <div className={`${styles.website__right} mt-11`}>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-4xl font-bold ">
            How we will build your website to life
          </h1>
          <p className="mt-6">
            We meticulously design and develop websites and web applications,
            starting with a detailed project vision. Our process involves
            user-centric design, cutting-edge technology, and custom-tailored
            components. Rigorous testing ensures reliability and security.
            Post-launch, we offer ongoing support and maintenance for continuous
            evolution in the digital landscape.
          </p>
          <button
            className={`${styles.mobile__web__btn} py-3 px-10 mt-5 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`}
          >
            Mobile apps
          </button>
        </div>
      </section>
    </main>
  );
};

export default page;
