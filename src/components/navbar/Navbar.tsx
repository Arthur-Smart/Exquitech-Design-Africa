import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import LOGO from "../../../public/images/logo.png";
import MOON from "../../../public/images/moon.svg";
import MENU from "../../../public/images/menu-icon.svg";

const Navbar = () => {
  return (
    <div
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
          <div className="ml-3 cursor-pointer">
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
    </div>
  );
};

export default Navbar;
