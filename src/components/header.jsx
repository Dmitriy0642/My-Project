import React from "react";
import styles from "../components/header.module.css";
import logo from "../icons/logo.png";
import login from "../icons/login.png";
import search from "../icons/search.png";
import bascket from "../icons/bascet.png";

const Header = () => {
  return (
    <div className={styles.main_div}>
      <img src={logo} alt="" className={styles.img_logo} />
      <ul className={styles.ancor}>
        <a href="#">Главная</a>
        <a href="#">№</a>
        <a href="#">№</a>
        <a href="#">О нас</a>
      </ul>
      <div className={styles.icon_links}>
        <img src={login} alt="" className={styles.img_nav_links} />
        <img src={search} alt="" className={styles.img_nav_links} />
        <img src={bascket} alt="" className={styles.img_nav_links} />
      </div>
    </div>
  );
};
export default Header;
