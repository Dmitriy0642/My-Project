import React from "react";
import logoShoes from "../../resources/LogoCatalog/logoShoes.jpg";
import styles from "../styles.component/shoes.module.css";
const Shoes = () => {
  return (
    <div>
      <img src={logoShoes} alt="" className={styles.logo_img} />
      <h2 className={styles.title}>Sneakers</h2>
    </div>
  );
};

export default Shoes;
