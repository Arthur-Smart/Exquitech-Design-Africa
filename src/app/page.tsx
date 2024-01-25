import Image from "next/image";
import Link from "next/link";
import STAR from "../../public/images/star.svg";
import CODEIMAGE from "../../public/images/vscode.png";
import INFOICON from "../../public/images/info.svg";
import QUESTIONiMAGE from "../../public/images/question.jpg";
import SOFTWARE from "../../public/images/codes.jpg";
import MOBILEDEV from "../../public/images/moapp.jpg";
import DESIGN from "../../public/images/design.jpg";
import PATTERNS from "../../public/images/bg.png";
import ODOO from "../../public/images/odoo.png";
import DESIGNICON from "../../public/images/design.svg";
import SUPPORTICON from "../../public/images/support.svg";
import INTERGRATIONS from "../../public/images/integration.svg";
import REPORTICON from "../../public/images/report.svg";
import TIMEICON from "../../public/images/time.svg";
import MANAGEICON from "../../public/images/management.svg";
import LottieAnimation from "@/components/LottieAnimation";

export default function Home() {
  const stars = [
    {
      source: STAR,
      alter: "Exquitech Design Africa",
    },
    { source: STAR, alter: "Exquitech Design Africa" },
    { source: STAR, alter: "Exquitech Design Africa" },
    { source: STAR, alter: "Exquitech Design Africa" },
    { source: STAR, alter: "Exquitech Design Africa" },
  ];
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="hero__section container flex mt-5 py-7">
        <div className="hero__section__left">
          <p className="font-black text-5xl text-desc text-slate-800 ">
            Launch an epic website with
            <br />
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              the best Software engineering company
            </span>
            <br /> in Kenya
          </p>
          <p className="mt-2">
            Take your business online with us. Manage your business operation
            with our software today. We develop{" "}
            <span className="font-bold">websites, software, mobile apps </span>{" "}
            and provide professional designing services globally.
          </p>
          <div className="flex flex-wrap">
            <Link
              href=""
              download
              className="py-3 px-10 mt-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
            >
              Get Brochure
            </Link>
            <Link
              href="https://github.com/Arthur-Smart"
              target="_blank"
              className="github py-3 px-11 mt-2 rounded-md border-[1px] border-cyan-400 text-blue-400  ml-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white"
            >
              Visit Github
            </Link>
          </div>
          <div className="mt-3">
            <div className="flex gap-2">
              {stars.map((star) => (
                <Image
                  key={star.alter}
                  src={star.source}
                  width={20}
                  height={20}
                  alt={star.alter}
                />
              ))}
            </div>

            <p>More than 1000 customers reviews</p>
          </div>
        </div>
        <div className="hero__section__right">
          <Image
            width={600}
            height={700}
            src={CODEIMAGE}
            alt=""
          />
        </div>
      </section>
      <section className="more__info__section container rounded-lg  bg-gradient-to-r from-indigo-700 to-indigo-500 p-[45px]">
        <div className="flex items-center">
          <p className="text-white">What you should envision</p>
          <Image
            src={INFOICON}
            alt="Exquitech Info"
            width={20}
            height={20}
            className="info__icon"
          />
        </div>

        <h1 className="text-white font-bold text-4xl mt-10 leading-[60px]">
          Advance your business with a software solution and good <br></br>{" "}
          Digital Marketing Strategies.
        </h1>
        <div className="flex items-center mt-10">
          <Image
            src={QUESTIONiMAGE}
            alt="Exquitech Design Africa"
            height={60}
            width={60}
            className="question__image"
          />
          <div className="ml-2">
            <h4 className="text-white font-bold">How do you do this?</h4>
            <p className="text-white text-[14px]">
              Aligning with a proficient company that offers quality software
              and effective digital marketing can supercharge your business
              success like us.
            </p>
          </div>
        </div>
        <Image
          src={PATTERNS}
          alt="About Exquitech Design africa"
          width={500}
          height={100}
          className="pattern__image"
        />
      </section>
      <section className="services container flex flex-col items-center justify-center py-14">
        <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-3xl font-bold ">
          Our service packages
        </h1>
        <p className="mb-7 text-center px-2">
          Excellent Web apps | Portals | Mobile apps | Website | Software | ICT
          solutions and consultancy for you
        </p>
        <div className="services_wrapper">
          <div className="service__card rounded-md p-2 flex flex-col items-center ">
            <Image
              src={SOFTWARE}
              alt="Software development"
              width={1000}
              height={1000}
              className="service__image"
            />
            <div className="w-full">
              <h2 className="text-lg py-1 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                Software development
              </h2>
              <p className="text-gray-500 text-[15px]">
                Unlock the full potential of the digital realm with our expert
                web and web app development services. We craft seamless online
                experiences, harnessing cutting-edge technology to bring your
                vision to life, ensuring speed, scalability, and stunning design
                that captivates your audience.
              </p>
            </div>
          </div>
          <div className="service__card rounded-md p-2 flex flex-col items-center">
            <Image
              src={MOBILEDEV}
              alt="Software development"
              width={1000}
              height={1000}
              className="service__image"
            />
            <div className="w-full">
              <h2 className="text-lg py-1 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                Mobile apps development
              </h2>
              <p className="text-gray-500 text-[15px]">
                Elevate your brand across Android and iOS platforms with our
                exceptional mobile app development. We create immersive,
                user-centric apps that seamlessly blend functionality and
                aesthetics, ensuring your presence in the palm of every hand.
              </p>
            </div>
          </div>
          <div className="service__card rounded-md p-2 flex flex-col items-center ">
            <Image
              src={DESIGN}
              alt="Software development"
              width={1000}
              height={1000}
              className="service__image"
            />
            <div className="w-full">
              <h2 className="text-lg py-1 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                Digital marketing / Designing
              </h2>
              <p className="text-gray-500 text-[15px]">
                Supercharge your brand with our holistic digital marketing and
                design expertise. We blend strategic campaigns with captivating
                design to elevate your online presence and drive exceptional
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center py-6">
        <p className="text-center px-3 text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
          {" "}
          Why you need a good application
        </p>
        <p className="text-center">
          A good software can help you work more effectively and efficiently,
          save time and money, and achieve better results.
        </p>
        <div className="why__wrapper flex">
          <div className="why__left">
            <LottieAnimation />
          </div>
          <div className="why__right mt-[60px]">
            <div>
              <h1 className="font-bold text-lg text-zinc-600">Efficiency</h1>
              <p className="text-zinc-500">
                Good software helps you get things done faster and more
                efficiently. It should be easy to use, reliable, and efficient
                at performing its intended tasks.
              </p>
            </div>
            <div className="mt-[30px]">
              <h1 className="font-bold text-lg text-zinc-600">Productivity</h1>
              <p className="text-zinc-500">
                Good software can help increase productivity by automating
                tasks, providing tools and features that make it easier to get
                work done, and eliminating bottlenecks and inefficiencies in
                your workflow.
              </p>
            </div>
            <div className="mt-[30px]">
              <h1 className="font-bold text-lg text-zinc-600">Accuracy</h1>
              <p className="text-zinc-500">
                Good software can help ensure that your work is accurate and
                error-free, which is especially important for tasks that require
                a high level of precision, such as financial calculations or
                scientific data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center">
        <h1 className="text-center px-3 text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600  text-3xl font-bold ">
          We also work with Odoo ERP software to serve you best
        </h1>
        <p className="text-center px-2">
          An excellent software for your business needs, but you need an expert
          to intergrate it for you. We do Odoo implementation.
        </p>
        <div className="odoo__wrapper mt-7 flex justify-between">
          <div className="odoo__left">
            <Image
              src={ODOO}
              alt="Odoo for your business"
              width={1000}
              height={1000}
              className="odoo__image"
            />
          </div>
          <div className="odoo__right">
            <h1 className="text-3xl font-bold text-zinc-500">It is free !</h1>
            <p className="text-zinc-500 mt-4 text-[15px]">
              We give complex and simple ERP implementation services to
              different Organization globally. We implement Odoo ERP system
              based on clients need. With Odoo we are able to bring into ease
              all of your Human Resource Functions, Accounting functions, Sales
              & purchase and Project management into a one base software. Apart
              from Odoo implementation, We do Odoo development. That is to
              develop addition modules that adds to the functionalities of the
              ERP systems.
            </p>
            <button className="odoo__btn mt-[30px] py-3 px-10 mt-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              Get started
            </button>
          </div>
        </div>
      </section>
      <section className="container rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 p-[20px]">
        <h1 className="text-white font-bold text-2xl text-center">
          Wondering how we make it all happen?
        </h1>
        <p className="text-white">
          We craft web, mobile, and ERP apps, aligned with client NEEDS,ensuring
          smooth business operations through superior solutions.
        </p>
        <div className="processes__wrapper mt-10">
          <div className="process__wrapper flex items-start bg-white p-7 flex rounded-md">
            <Image
              src={DESIGNICON}
              alt="Design and development"
              width={40}
              height={40}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-lg">Design and development</h1>
              <p className="text-[15px] text-zinc-600">
                The client shapes the application's aesthetics, and We execute
                their vision through the development process.
              </p>
            </div>
          </div>
          <div className="process__wrapper items-start flex bg-white p-7 flex rounded-md">
            <Image
              src={REPORTICON}
              alt="Design and development"
              width={30}
              height={30}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-lg">Reporting & analysis</h1>
              <p className="text-[15px] text-zinc-600">
                Reporting plays a pivotal role in evaluating system
                effectiveness. Automated report generation and distribution are
                crucial components.
              </p>
            </div>
          </div>
          <div className="process__wrapper flex items-start bg-white p-7 flex rounded-md">
            <Image
              src={MANAGEICON}
              alt="Design and development"
              width={40}
              height={40}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-lg">
                Administration & Promotion
              </h1>
              <p className="text-[15px] text-zinc-600">
                Systems that gauge personnel and marketing effectiveness by
                leveraging the company's knowledge repository.
              </p>
            </div>
          </div>
          <div className="process__wrapper flex items-start bg-white p-7 flex rounded-md">
            <Image
              src={INTERGRATIONS}
              alt="Design and development"
              width={40}
              height={40}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-lg">Integrations</h1>
              <p className="text-[15px] text-zinc-600">
                Integrations with payment systems and external software to
                ensure seamless cross-platform communication.
              </p>
            </div>
          </div>
          <div className="process__wrapper flex items-start bg-white p-7 flex rounded-md">
            <Image
              src={SUPPORTICON}
              alt="Design and development"
              width={40}
              height={40}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-gl">Support</h1>
              <p className="text-[15px] text-zinc-600">
                We offer comprehensive development support, including updates to
                align with emerging technologies
              </p>
            </div>
          </div>
          <div className="process__wrapper flex items-start items-top bg-white p-7 flex rounded-md">
            <Image
              src={TIMEICON}
              alt="Design and development"
              width={40}
              height={40}
            />
            <div className="ml-2">
              <h1 className="font-semibold text-lg">Real time notifications</h1>
              <p className="text-[15px] text-zinc-600">
                Access real-time data on your mobile, desktop, or web
                application, enhanced with analysis and progress-tracking
                features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
