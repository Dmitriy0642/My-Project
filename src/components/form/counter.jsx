import React, { useState } from "react";
import styles from "../styles.component/cardProduct.module.css";

const Counter = ({ size, initialSize, price, name }) => {
  const initialCounters = [
    {
      size: `${size}`,
      value: initialSize === `${size}` ? 1 : 0,
      price: price,
      name: name,
    },
  ];
  const [data, setData] = useState(initialCounters);

  const handleIncrement = (id) => {
    const updateObj = data.map((el) =>
      el.size === id ? { ...el, value: el.value + 1, price } : el
    );
    console.log(updateObj);
    setData(updateObj);
  };
  const handleDecrement = (id) => {
    const updateObj = data.map((el) =>
      el.size === id ? { ...el, value: el.value - 1, price } : el
    );
    setData(updateObj);
  };
  return (
    <div>
      {data.map((el) => (
        <div className={styles.under_counter} key={el.size}>
          <div
            className={styles.increment}
            id={el.size}
            onClick={() => handleIncrement(el.size)}
          >
            +
          </div>
          <div className={styles.div_with_input}>
            <h2 id={el.size} className={styles.title_sizes}>
              {el.value}
            </h2>
          </div>
          <div
            className={styles.decrement}
            id={el.size}
            onClick={() => handleDecrement(el.size)}
          >
            -
          </div>
          <div>
            <h2 className={styles.block_title_sizes}>{size}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
