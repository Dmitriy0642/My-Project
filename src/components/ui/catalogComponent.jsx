import React from "react";
import logoSwetshirt from "../../resources/LogoCatalog/logoSwetshirt.jpg";
import { Link } from "react-router-dom";
import styles from "../styles.component/catalog.module.css";
import logoHoodies from "../../resources/LogoCatalog/logoHoodies.jpg";
import logoSocks from "../../resources/LogoCatalog/LogoSocks.jpg";
import logoTshirt from "../../resources/LogoCatalog/logoTshirt.jpg";

import logoShoes from "../../resources/LogoCatalog/logoShoes.jpg";

const CatalogComponent = () => {
  return (
    <div className={styles.main_div}>
      <Link to="/swetshirt">
        <img src={logoSwetshirt} alt="" className={styles.logo_swetshirts} />
      </Link>
      <h2 className={styles.title}>Stone Island Swetshirt</h2>
      <div className={styles.second_block}>
        <div className={styles.block_Sneakers}>
          <Link to="/shoes">
            <img src={logoShoes} alt="" className={styles.logo_img} />
          </Link>
          <h2 className={styles.title}>Sneakers</h2>
        </div>
        <div className={styles.block_hoodies}>
          <Link to="/hoodies">
            <img src={logoHoodies} alt="" className={styles.logo_img} />
          </Link>
          <h2 className={styles.title}>Hoodies</h2>
        </div>
      </div>
      <div className={styles.third_block}>
        <div className={styles.block_socks}>
          <Link to="/socks">
            <img src={logoSocks} alt="" className={styles.logo_img} />
          </Link>
          <h2 className={styles.title}>Socks</h2>
        </div>
        <div className={styles.block_tshorts}>
          <Link to="/tshirts">
            <img src={logoTshirt} alt="" className={styles.logo_img} />
          </Link>
          <h2 className={styles.title}>T-shirts</h2>
        </div>
      </div>
    </div>
  );
};

export default CatalogComponent;
