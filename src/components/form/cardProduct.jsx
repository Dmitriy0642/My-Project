import React from "react";
import styles from "../styles.component/cardProduct.module.css";

const CardProduct = ({ data, quantity }) => {
  return (
    <div className={styles.main_div}>
      <div className={styles.div_with_img}>
        <img src={data.img[0]} alt="" className={styles.product_img} />
      </div>
      <div className={styles.counter}>
        <div className={styles.block_counter}>
          <div className={styles.counter_increment}>+</div>
          <div>
            <input
              type="text"
              disabled
              className={styles.counter_input}
              value={1}
            />
          </div>
          <div className={styles.counter_decrement}>-</div>
        </div>
      </div>
      <div className={styles.add_sizes}></div>
    </div>
  );
};

export default CardProduct;
