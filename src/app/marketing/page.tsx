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
      <section className="container flex flex-col py-9  items-center justify-center">
        <h1 className="text-2xl text-zinc-700 font-bold">
          Get amazing services at a price that make sense
        </h1>
        <p className="text-zinc-600">Affordable pricing with zero setup fees</p>
        <div className={`${styles.pricing__wrapper} my-8`}>
          <div
            className={`${styles.pricing} rounded-md bg-orange-500/20 p-6 flex flex-col items-center justify-center`}
          >
            <div className="w-[90%] bg-orange-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3 className="text-xl font-semibold">Signature Swan</h3>
              <p className="mt-2">Fit for your starting business</p>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Ksh 10,000</h3>
            <p>Per month</p>

            <h3 className="mt-5">Package services</h3>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center">
                Social Media Management (2-3 Platforms)
              </p>
              <p className="text-center">
                Content Creation (2-3 Posts per Week)
              </p>
              <p className="text-center">
                Social Media Advertising (Basic Ad Campaigns)
              </p>
              <p className="text-center">
                Basic SEO (Keyword Research, On-Page Optimization)
              </p>
              <p className="text-center">Monthly Performance Reports</p>
              <p className="text-center">
                Email Marketing (Newsletter Campaigns)
              </p>
            </div>
          </div>
          <div
            className={`${styles.pricing} rounded-md bg-red-500/20 p-6 flex flex-col items-center justify-center`}
          >
            <div className="w-[90%] bg-red-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3 className="text-xl font-semibold">Advanced Alligator</h3>
              <p className="mt-2">Fit for your growing business</p>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Ksh 15,000</h3>
            <p>Per month</p>

            <h3 className="mt-5">Package services</h3>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center">
                Comprehensive Social Media Management (4-5 Platforms)
              </p>
              <p className="text-center">
                Content Creation (3-5 Posts per Week)
              </p>
              <p className="text-center">
                Advanced Social Media Advertising (Ad Campaigns, Retargeting)
              </p>
              <p className="text-center">
                In-Depth Keyword Analysis and Strategy
              </p>
              <p className="text-center">
                Detailed Monthly Analytics and Recommendations
              </p>
              <p className="text-center">
                Email Marketing (Segmentation, Automation)
              </p>
            </div>
          </div>
          <div
            className={`${styles.pricing} rounded-md bg-blue-500/20 p-6 flex flex-col items-center justify-center`}
          >
            <div className="w-[90%] bg-blue-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3 className="text-xl font-semibold">Elite Elephant Seal</h3>
              <p className="mt-2">
                Fit for your business{" "}
                <span className="bg-green-500/50 rounded-full py-[3px] px-4 text-[13px] text-white">
                  Recommended
                </span>
              </p>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Ksh 25,000</h3>
            <p>Per month</p>

            <h3 className="mt-5">Package services</h3>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center">
                Extensive Social Media Management (6+ Platforms)
              </p>
              <p className="text-center">
                Premium Content Creation (5-7 Posts per Week)
              </p>
              <p className="text-center">
                Advanced Social Media Advertising (Multi-Channel Advertising)
              </p>
              <p className="text-center">
                Comprehensive Competitor Analysis and Strategy
              </p>
              <p className="text-center">
                24/7 Customer Support and Consultation
              </p>
              <p className="text-center">Influencer Marketing Campaigns</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
