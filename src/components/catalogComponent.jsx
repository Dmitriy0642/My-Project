import React from "react";
import logoSwetshirt from "../LogoCatalog/logoSwetshirt.jpg";
import styles from "../components/catalog.module.css";
import logoShoes from "../LogoCatalog/logoShoes.jpg";
import logoHoodies from "../LogoCatalog/logoHoodies.jpg";
import logoSocks from "../LogoCatalog/LogoSocks.jpg";
import logoTshirt from "../LogoCatalog/logoTshirt.jpg";

const CatalogComponent = () => {
  return (
    <div className={styles.main_div}>
      <img src={logoSwetshirt} alt="" className={styles.logo_swetshirts} />
      <h2 className={styles.title}>Stone Island Swetshirt</h2>
      <div className={styles.second_block}>
        <div className={styles.block_Sneakers}>
          <img src={logoShoes} alt="" className={styles.logo_img} />
          <h2 className={styles.title}>Sneakers</h2>
        </div>
        <div className={styles.block_hoodies}>
          <img src={logoHoodies} alt="" className={styles.logo_img} />
          <h2 className={styles.title}>Hoodies</h2>
        </div>
      </div>
      <div className={styles.third_block}>
        <div className={styles.block_socks}>
          <img src={logoSocks} alt="" className={styles.logo_img} />
          <h2 className={styles.title}>Socks</h2>
        </div>
        <div className={styles.block_tshorts}>
          <img src={logoTshirt} alt="" className={styles.logo_img} />
          <h2 className={styles.title}>T-shirts</h2>
        </div>
      </div>
    </div>
  );
};

export default CatalogComponent;
