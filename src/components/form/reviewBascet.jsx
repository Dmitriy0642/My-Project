import React, { useState } from "react";
import styles from "../styles.component/reviewBascet.module.css";
const ReviewBascet = ({ data, quantity }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title_text}>Корзина Товаров</h1>
      <div className={styles.header}>
        <h2 className={styles.header_nav_bar}>Наименование</h2>
        <h2 className={styles.header_nav_bar}>Кол-во</h2>
        <h2 className={styles.header_nav_bar}>Размеры</h2>
        <h2 className={styles.header_nav_bar}>Стоимость</h2>
      </div>
      <div className={styles.under_header_block}>
        {/* <img src={data.img[0]} alt="" /> */}
      </div>
    </div>
  );
};

export default ReviewBascet;
