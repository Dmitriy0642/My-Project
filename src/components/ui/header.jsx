import React from "react";
import styles from "../styles.component/header.module.css";
import logo from "../../resources/icons/logo.png";
import login from "../../resources/icons/login.png";
import search from "../../resources/icons/search.png";
import bascket from "../../resources/icons/bascet.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.main_div}>
      <Link to="/">
        <img src={logo} alt="" className={styles.img_logo} />
      </Link>
      <ul className={styles.ancor}>
        <Link to="/">Главная</Link>
        <Link to="#">№</Link>
        <Link to="#">№</Link>
        <Link to="/aboutShop">О нас</Link>
      </ul>
      <div className={styles.icon_links}>
        <Link to="/login">
          <img src={login} alt="" className={styles.img_nav_links} />
        </Link>
        <Link to="/filter">
          <img src={search} alt="" className={styles.img_nav_links} />
        </Link>
        <Link to="/basket">
          <img src={bascket} alt="" className={styles.img_nav_links} />
        </Link>
      </div>
    </div>
  );
};
export default Header;
