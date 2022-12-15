import React from "react";
import styles from "../components/footer.module.css";
import logo from "../icons/logo.png";

const Footer = () => {
  return (
    <div className={styles.page}>
      <div className={styles.footer_div}>
        <div className={styles.under_block_div}>
          <img src={logo} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
