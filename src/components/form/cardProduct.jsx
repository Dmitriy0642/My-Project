import React from "react";
import styles from "../styles.component/cardProduct.module.css";
import Counter from "./counter";

const CardProduct = ({ data, quantity }) => {
  console.log(data.price);
  return (
    <div className={styles.main_div}>
      <div className={styles.div_with_img}>
        <img src={data.img[0]} alt="" className={styles.product_img} />
      </div>
      <div className={styles.counter}>
        {quantity.map((item) => (
          <Counter
            size={item.size}
            initialSize={data.size}
            key={item.size}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
