import React, { useState } from "react";
import styles from "../styles.component/cardProduct.module.css";
import Counter from "./counter";

const CardProduct = ({ data, quantity }) => {
  return (
    <div className={styles.main_div}>
      <div className={styles.div_with_img}>
        <img src={data.img[0]} alt="" className={styles.product_img} />
      </div>
      <div className={styles.counter}>
        {quantity.map((item) => (
          <Counter
            size={item.size}
            value={item.value}
            initialSize={data.size}
            key={item.size}
          />
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
