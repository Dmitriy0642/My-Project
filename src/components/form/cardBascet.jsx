import React from "react";
import styles from "../styles.component/reviewBascet.module.css";
import CardProduct from "./cardProduct";
const ReviewBascet = ({ data, quantity }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title_text}>Корзина Товаров</h1>
      <div className={styles.header}>
        <h2 className={styles.header_nav_bar}>Фото товара</h2>
        <h2 className={styles.header_nav_bar}>Размеры</h2>
        <h2 className={styles.header_nav_bar}>Стоимость</h2>
      </div>
      <CardProduct data={data} quantity={quantity} />
      <div className={styles.footer}></div>
    </div>
  );
};

export default ReviewBascet;
