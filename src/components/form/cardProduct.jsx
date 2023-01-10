import React from "react";
import styles from "../styles.component/cardProduct.module.css";
const CardProduct = ({
  name,
  initialSize,
  img,
  quantity,
  id,
  price,
  allSizes,
}) => {
  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.img_div}>
          <img src={img} alt="" />
        </div>
        <div className={styles.counter}>
          {allSizes.map((item) => (
            <div className={styles.under_counter}>
              <button className={styles.button_inc}>+</button>
              <h2></h2>
              <button className={styles.button_dec}>-</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
