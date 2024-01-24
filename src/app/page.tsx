import Image from "next/image";
import Link from "next/link";
import STAR from "../../public/images/star.svg";
import CODEIMAGE from "../../public/images/vscode.png";
import INFOICON from "../../public/images/info.svg";
import QUESTIONiMAGE from "../../public/images/question.jpg";

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
      <section className="more__info__section container rounded-lg bg-[#9b51e0] p-[35px]">
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
      </section>
    </main>
  );
}
