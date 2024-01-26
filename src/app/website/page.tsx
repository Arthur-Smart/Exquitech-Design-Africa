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
      <section
        className={`${styles.web__services__wrapper} container rounded-lg  bg-gradient-to-r from-indigo-700 to-indigo-500 p-[45px]`}
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
            WEBSITE DEVELOPMENT
          </h1>
          <p className="text-white text-[14px] text-center">
            We believe that professional web development is an art and science,
            and we are dedicated to crafting exceptional online experiences that
            not only meet our clients' needs but also exceed their expectations
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
            user experience. Our goal is to continuously analyze, innovate, and
            implement improvements that help your online presence evolve and
            thrive, meeting the changing demands of your audience and industry.
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
