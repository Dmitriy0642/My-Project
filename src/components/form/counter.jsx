import React from "react";
import styles from "../styles.component/cardProduct.module.css";
const Counter = ({ size, value, initialSize }) => {
  const [data, setData] = [{ size: `${size}`, value: 0 }];
  const handleIncrement = () => {};
  return (
    <div className={styles.under_counter}>
      <div className={styles.increment} id={size} onClick={handleIncrement}>
        +
      </div>
      <div className={styles.div_with_input}>
        <input
          type="text"
          disabled
          value={data.value}
          className={styles.input_sizes}
        />
      </div>
      <div className={styles.decrement} id={size}>
        -
      </div>
    </div>
  );
};

export default Counter;
