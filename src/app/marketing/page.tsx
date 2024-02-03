"use client";

import React, { useContext } from "react";
import styles from "./marketing.module.css";
import Image from "next/image";
import IMAGE from "../../../public/images/marketing.png";
import { ThemeContext } from "@/context/ThemeContext";

const page = () => {
  const { state } = useContext(ThemeContext);
  return (
    <main
      className={
        state.isDarkMode == true
          ? "w-full flex flex-col items-center justify-center bg-black"
          : "w-full flex flex-col items-center justify-center"
      }
    >
      <section className="container flex  justify-between py-9 ">
        <div
          data-aos="fade-right"
          className={`${styles.marketing__left}`}
        >
          <p
            className={
              state.isDarkMode == true
                ? "text-[13px]  mb-[3px] text-white/20"
                : "text-[13px]  mb-[3px] text-gray-900/20"
            }
          >
            Exquitech for Digital marketing & Graphic Design
          </p>
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
            A better Digital Marketing Solutions for your business
          </h1>
          <p
            className={
              state.isDarkMode == true
                ? "mt-6 text-white"
                : "mt-6 text-zinc-500"
            }
          >
            With data-driven tactics and innovative campaigns, we propel your
            brand to success, ensuring you reach and engage your target
            audience. Let's elevate your brand together as guardians of your
            vision, leaving a lasting mark on the digital landscape.
          </p>
          <button
            className={
              state.isDarkMode == true
                ? `${styles.marketing__btn__dark} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
                : `${styles.marketing__btn} py-3 px-10 mt-11 rounded-md border-blue-500 bg-blue-500 text-white button-border flex self-start`
            }
          >
            Get started
          </button>
        </div>
        <div
          data-aos="fade-left"
          className={`${styles.marketing__right} flex justify-end`}
        >
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
        <h1
          className={
            state.isDarkMode == true
              ? "text-2xl text-white font-bold"
              : "text-2xl text-zinc-700 font-bold"
          }
        >
          We craft a powerfull online presence for you
        </h1>
        <h2
          className={state.isDarkMode == true ? "text-white" : "text-zinc-600"}
        >
          Simple Strategies for Building Your Brand{" "}
        </h2>
        <div className={`${styles.branding__wrapper} mt-7`}>
          <div
            data-aos="fade-up"
            className={`${styles.brand__container}w-full`}
          >
            <div className="flex items-center">
              {state.isDarkMode == true ? (
                <Image
                  src="./images/radio_white.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="./images/radio.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              )}

              <h1
                className={
                  state.isDarkMode
                    ? "text-[18px] font-semibold ml-[3px] text-white"
                    : "text-[18px] font-semibold ml-[3px]"
                }
              >
                Logo and Visual Identity
              </h1>
            </div>
            <p
              className={
                state.isDarkMode == true
                  ? "mt-4 text-white text-[15px]"
                  : "mt-4 text-zinc-600 text-[15px]"
              }
            >
              We ensure that your logo is prominently displayed on the website
              and other social media platforms. Use consistent colors, fonts,
              and design elements that align with your brand identity
            </p>
            <div
              className={
                state.isDarkMode == true
                  ? `${styles.separator__dark}`
                  : `${styles.separator}`
              }
            ></div>
          </div>
          <div
            data-aos="fade-up"
            className={`${styles.brand__container}w-full`}
          >
            <div className="flex items-center">
              {state.isDarkMode == true ? (
                <Image
                  src="./images/radio_white.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="./images/radio.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              )}
              <h1
                className={
                  state.isDarkMode == true
                    ? "text-[18px] font-semibold ml-[3px] text-white"
                    : "text-[18px] font-semibold ml-[3px]"
                }
              >
                Branded Content:
              </h1>
            </div>
            <p
              className={
                state.isDarkMode == true
                  ? "mt-4 text-white text-[15px]"
                  : "mt-4 text-zinc-600 text-[15px]"
              }
            >
              We Develop a unique and compelling brand story. We also create
              branded content such as articles, videos, or infographics that
              reflect your brand's values and personality.
            </p>
            <div
              className={
                state.isDarkMode == true
                  ? `${styles.separator__dark}`
                  : `${styles.separator}`
              }
            ></div>
          </div>
          <div
            data-aos="fade-up"
            className={`${styles.brand__container}w-full`}
          >
            <div className="flex items-center">
              {state.isDarkMode == true ? (
                <Image
                  src="./images/radio_white.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="./images/radio.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              )}
              <h1
                className={
                  state.isDarkMode == true
                    ? "text-[18px] font-semibold ml-[3px] text-white"
                    : "text-[18px] font-semibold ml-[3px]"
                }
              >
                Branded Social Media Integration{" "}
              </h1>
            </div>
            <p
              className={
                state.isDarkMode == true
                  ? "mt-4 text-white text-[15px]"
                  : "mt-4 text-zinc-600 text-[15px]"
              }
            >
              We use branded imagery and captions on social media. We as well
              integrate social media feeds into your website with a consistent
              look and feel.
            </p>
            <div
              className={
                state.isDarkMode == true
                  ? `${styles.separator__dark}`
                  : `${styles.separator}`
              }
            ></div>
          </div>
          <div
            data-aos="fade-up"
            className={`${styles.brand__container}w-full`}
          >
            <div className="flex items-center">
              {state.isDarkMode == true ? (
                <Image
                  src="./images/radio_white.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="./images/radio.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              )}
              <h1
                className={
                  state.isDarkMode == true
                    ? "text-[18px] font-semibold ml-[3px] text-white"
                    : "text-[18px] font-semibold ml-[3px]"
                }
              >
                Branded Email Templates
              </h1>
            </div>
            <p
              className={
                state.isDarkMode == true
                  ? "mt-4 text-white text-[15px]"
                  : "mt-4 text-zinc-600 text-[15px]"
              }
            >
              We design email templates that reflect your brand identity. Ensure
              consistency in email communication, from newsletters to
              transactional emails.
            </p>
            <div
              className={
                state.isDarkMode == true
                  ? `${styles.separator__dark}`
                  : `${styles.separator}`
              }
            ></div>
          </div>
          <div
            data-aos="fade-up"
            className={`${styles.brand__container}w-full`}
          >
            <div className="flex items-center">
              {state.isDarkMode == true ? (
                <Image
                  src="./images/radio_white.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="./images/radio.svg"
                  alt="Branding"
                  width={18}
                  height={18}
                />
              )}
              <h1
                className={
                  state.isDarkMode
                    ? "text-[18px] font-semibold ml-[3px] text-white"
                    : "text-[18px] font-semibold ml-[3px]"
                }
              >
                Branded Merchandise
              </h1>
            </div>
            <p
              className={
                state.isDarkMode == true
                  ? "mt-4 text-white text-[15px]"
                  : "mt-4 text-zinc-600 text-[15px]"
              }
            >
              Consider incorporating an online store for branded merchandise.
              Offer items such as T-shirts, mugs, or stickers that can serve as
              promotional tools
            </p>
            <div
              className={
                state.isDarkMode == true
                  ? `${styles.separator__dark}`
                  : `${styles.separator}`
              }
            ></div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col py-9  items-center justify-center">
        <h1
          data-aos="fade-up"
          className={
            state.isDarkMode == true
              ? "text-2xl text-white font-bold"
              : "text-2xl text-zinc-700 font-bold"
          }
        >
          Get amazing services at a price that make sense
        </h1>
        <p
          data-aos="fade-up"
          className={
            state.isDarkMode == true ? "text-white/50" : "text-zinc-600"
          }
        >
          Affordable pricing with zero setup fees
        </p>
        <div
          data-aos="fade-up"
          className={`${styles.pricing__wrapper} my-8`}
        >
          <div
            className={
              state.isDarkMode == true
                ? `${styles.pricing__dark} rounded-md bg-red-500/20 p-6 flex flex-col items-center justify-center`
                : `${styles.pricing} rounded-md bg-blue-500/20 p-6 flex flex-col items-center justify-center`
            }
          >
            <div className="w-[90%] bg-orange-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3
                className={
                  state.isDarkMode == true
                    ? "text-xl font-semibold text-white"
                    : "text-xl font-semibold"
                }
              >
                Signature Swan
              </h3>
              <p
                className={
                  state.isDarkMode == true ? "mt-2 text-white" : "mt-2"
                }
              >
                Fit for your starting business
              </p>
            </div>
            <h3
              className={
                state.isDarkMode == true
                  ? "mt-4 text-xl font-semibold text-white"
                  : "mt-4 text-xl font-semibold"
              }
            >
              Ksh 10,000
            </h3>
            <p className={state.isDarkMode == true ? "text-white" : ""}>
              Per month
            </p>

            <h3
              className={
                state.isDarkMode == true
                  ? "mt-5 font-semibold mb-2 text-white"
                  : "mt-5 font-semibold mb-2"
              }
            >
              Package services
            </h3>
            <div className="flex flex-col items-center justify-center">
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Social Media Management (2-3 Platforms)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Content Creation (2-3 Posts per Week)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Social Media Advertising (Basic Ad Campaigns)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Basic SEO (Keyword Research, On-Page Optimization)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Monthly Performance Reports
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Email Marketing (Newsletter Campaigns)
              </p>
            </div>
          </div>
          <div
            className={
              state.isDarkMode == true
                ? `${styles.pricing__dark} rounded-md bg-red-500/20 p-6 flex flex-col items-center justify-center`
                : `${styles.pricing} rounded-md bg-red-500/20 p-6 flex flex-col items-center justify-center`
            }
          >
            <div className="w-[90%] bg-red-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3
                className={
                  state.isDarkMode == true
                    ? "text-xl font-semibold text-white"
                    : "text-xl font-semibold"
                }
              >
                Advanced Alligator
              </h3>
              <p
                className={
                  state.isDarkMode == true ? "mt-2 text-white" : "mt-2"
                }
              >
                Fit for your growing business
              </p>
            </div>
            <h3
              className={
                state.isDarkMode == true
                  ? "mt-4 text-xl font-semibold text-white"
                  : "mt-4 text-xl font-semibold"
              }
            >
              Ksh 15,000
            </h3>
            <p className={state.isDarkMode == true ? "text-white" : ""}>
              Per month
            </p>

            <h3
              className={
                state.isDarkMode == true
                  ? "mt-5 font-semibold mb-2 text-white"
                  : "mt-5 font-semibold mb-2"
              }
            >
              Package services
            </h3>
            <div className="flex flex-col items-center justify-center">
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Comprehensive Social Media Management (4-5 Platforms)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Content Creation (3-5 Posts per Week)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Advanced Social Media Advertising (Ad Campaigns, Retargeting)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                In-Depth Keyword Analysis and Strategy
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Detailed Monthly Analytics and Recommendations
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Email Marketing (Segmentation, Automation)
              </p>
            </div>
          </div>
          <div
            className={
              state.isDarkMode == true
                ? `${styles.pricing__dark} rounded-md bg-red-500/20 p-6 flex flex-col items-center justify-center`
                : `${styles.pricing} rounded-md bg-blue-500/20 p-6 flex flex-col items-center justify-center`
            }
          >
            {" "}
            <div className="w-[90%] bg-blue-500/50 flex items-center justify-center flex-col py-6 rounded-md">
              <h3
                className={
                  state.isDarkMode == true
                    ? "text-xl font-semibold text-white"
                    : "text-xl font-semibold"
                }
              >
                Elite Elephant Seal
              </h3>
              <p
                className={
                  state.isDarkMode == true ? "mt-2 text-white" : "mt-2"
                }
              >
                Fit for your business{" "}
                <span className="bg-green-500/50 rounded-full py-[3px] px-4 text-[13px] text-white">
                  Recommended
                </span>
              </p>
            </div>
            <h3
              className={
                state.isDarkMode == true
                  ? "mt-4 text-xl font-semibold text-white"
                  : "mt-4 text-xl font-semibold"
              }
            >
              Ksh 25,000
            </h3>
            <p className={state.isDarkMode == true ? "text-white" : ""}>
              Per month
            </p>
            <h3
              className={
                state.isDarkMode == true
                  ? "mt-5 font-semibold mb-2 text-white"
                  : "mt-5 font-semibold mb-2"
              }
            >
              Package services
            </h3>
            <div className="flex flex-col items-center justify-center">
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Extensive Social Media Management (6+ Platforms)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Premium Content Creation (5-7 Posts per Week)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Advanced Social Media Advertising (Multi-Channel Advertising)
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Comprehensive Competitor Analysis and Strategy
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                24/7 Customer Support and Consultation
              </p>
              <p
                className={
                  state.isDarkMode == true
                    ? "text-center text-white"
                    : "text-center"
                }
              >
                Influencer Marketing Campaigns
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
