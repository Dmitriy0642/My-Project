import React from "react";
import styles from "../styles.component/cardProduct.module.css";

const CardProduct = ({ data, quantity }) => {
  return (
    <div className={styles.main_div}>
      <div className={styles.div_with_img}>
        <img src={data.img[0]} alt="" className={styles.product_img} />
      </div>
      <div className={styles.counter}>
        {quantity.map((item) => (
          <div className={styles.under_counter} key={item.size}>
            <div className={styles.increment}>+</div>
            <div className={styles.div_with_input}>
              <input
                type="text"
                disabled
                value={0}
                className={styles.input_sizes}
              />
            </div>
            <div className={styles.decrement}>-</div>
          </div>
        ))}
      </div>
      <div className={styles.div_sizes}>
        {quantity.map((item) => (
          <div className={styles.under_div} key={item.size}>
            <h2 className={styles.text_sizes}>{item.size}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
