"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import LOGO from "../../../public/images/logo.png";
import MOON from "../../../public/images/moon.svg";
import MENU from "../../../public/images/menu-icon.svg";
import Link from "next/link";

const Navbar = () => {
  const [isOpened, setIsOpend] = useState<Boolean>(false);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsOpend((prev) => !prev);
  };

  const handleLinkToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpend((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.navbar} flex items-center justify-center py-2 bg-white`}
    >
      <div className="container flex items-center justify-between">
        <div className="nav-left">
          <Image
            src={LOGO}
            alt="Exquitech Design Africa"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
        <div className="nav-right flex items-center">
          <div className="cursor-pointer">
            <Image
              src={MOON}
              alt="dark mode"
              width={100}
              height={100}
              className={styles.thememode}
            />
          </div>
          <div
            onClick={handleToggle}
            className="ml-3 cursor-pointer"
          >
            <Image
              src={MENU}
              alt="dark mode"
              width={100}
              height={100}
              className={styles.menu}
            />
          </div>
        </div>
      </div>
      {isOpened && (
        <div className={`${styles.menu__wrapper} p-4`}>
          <Link
            onClick={handleLinkToggle}
            href="/"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>Home</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="/website"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>Website Development</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="/marketing"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>Digital marketing</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="/mobile"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>Phone development</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="/erp-integrations"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>ERP & Integrations</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="/contacts"
          >
            <div className={`${styles.link} w-90% mb-7 h`}>
              <h3>Contact us</h3>
            </div>
          </Link>
          <Link
            onClick={handleLinkToggle}
            href="#"
          >
            <button
              className={`${styles.dashboard__btn} py-3 px-10 mt-7 rounded-md border-blue-500 bg-blue-500 text-white button-border`}
            >
              <h3>Dashboard</h3>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
