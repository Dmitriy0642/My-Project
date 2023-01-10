import React from "react";
import styles from "../styles.component/cardProduct.module.css";
import Counter from "./counter";

const CardProduct = ({ data, quantity }) => {
  const handleClick = () => {
    localStorage.removeItem(`${data.id}`);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.div_with_img}>
        <img src={data.img[0]} alt="" className={styles.product_img} />
      </div>
      <div className={styles.counter}>
        {quantity.map((item) => (
          <Counter
            name={data.name}
            size={item.size}
            initialSize={data.size}
            key={item.size}
            price={data.price}
          />
        ))}
      </div>
      <div className={styles.block_button}>
        <button className={styles.button_delete_product} onClick={handleClick}>
          Удалить товар
        </button>
      </div>
      <div>
        <h2 size={data}>{data.price}$</h2>
      </div>
    </div>
  );
};

export default CardProduct;
