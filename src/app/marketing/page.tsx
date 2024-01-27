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
      <section className="container">
        <h1 className="text-2xl text-zinc-700 font-bold">
          We craft a powerfull online presence for you
        </h1>
        <h2 className="text-zinc-600">
          Simple Strategies for Building Your Brand{" "}
        </h2>
        <div className={`${styles.branding__wrapper} mt-7`}>
          <div className={`${styles.brand__container}w-full`}>
            <div className="flex items-center">
              <Image
                src="./images/radio.svg"
                alt="Branding"
                width={18}
                height={18}
              />
              <h1 className="text-[18px] font-semibold ml-[3px]">
                Logo and Visual Identity
              </h1>
            </div>
            <p className="mt-4 text-zinc-600 text-[15px]">
              We ensure that your logo is prominently displayed on the website
              and other social media platforms. Use consistent colors, fonts,
              and design elements that align with your brand identity
            </p>
            <div className={`${styles.separator}`}></div>
          </div>
          <div className={`${styles.brand__container}w-full`}>
            <div className="flex items-center">
              <Image
                src="./images/radio.svg"
                alt="Branding"
                width={18}
                height={18}
              />
              <h1 className="text-[18px] font-semibold ml-[3px]">
                Branded Content:
              </h1>
            </div>
            <p className="mt-4 text-zinc-600 text-[15px]">
              We Develop a unique and compelling brand story. We also create
              branded content such as articles, videos, or infographics that
              reflect your brand's values and personality.
            </p>
            <div className={`${styles.separator}`}></div>
          </div>
          <div className={`${styles.brand__container}w-full`}>
            <div className="flex items-center">
              <Image
                src="./images/radio.svg"
                alt="Branding"
                width={18}
                height={18}
              />
              <h1 className="text-[18px] font-semibold ml-[3px]">
                Branded Social Media Integration{" "}
              </h1>
            </div>
            <p className="mt-4 text-zinc-600 text-[15px]">
              We use branded imagery and captions on social media. We as well
              integrate social media feeds into your website with a consistent
              look and feel.
            </p>
            <div className={`${styles.separator}`}></div>
          </div>
          <div className={`${styles.brand__container}w-full`}>
            <div className="flex items-center">
              <Image
                src="./images/radio.svg"
                alt="Branding"
                width={18}
                height={18}
              />
              <h1 className="text-[18px] font-semibold ml-[3px]">
                Branded Email Templates
              </h1>
            </div>
            <p className="mt-4 text-zinc-600 text-[15px]">
              We design email templates that reflect your brand identity. Ensure
              consistency in email communication, from newsletters to
              transactional emails.
            </p>
            <div className={`${styles.separator}`}></div>
          </div>
          <div className={`${styles.brand__container}w-full`}>
            <div className="flex items-center">
              <Image
                src="./images/radio.svg"
                alt="Branding"
                width={18}
                height={18}
              />
              <h1 className="text-[18px] font-semibold ml-[3px]">
                Branded Merchandise
              </h1>
            </div>
            <p className="mt-4 text-zinc-600 text-[15px]">
              Consider incorporating an online store for branded merchandise.
              Offer items such as T-shirts, mugs, or stickers that can serve as
              promotional tools
            </p>
            <div className={`${styles.separator}`}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
