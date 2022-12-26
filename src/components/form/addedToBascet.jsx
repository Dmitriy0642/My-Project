import React from "react";

import styles from "../styles.component/addedToBascet.module.css";

const AddedFormBascet = (props) => {
  const handleClick = (event) => {
    console.log(event.target.innerText);
  };

  const handleAddToBascet = () => {
    console.log();
  };

  return props.quantity === undefined ? (
    <h2>Loading</h2>
  ) : (
    <>
      <div className={styles.main_div}>
        <h2 className={styles.main_title}>Параметры товара</h2>
        <div className={styles.title_block}>
          <h2>Имя Модели : {props.name}</h2>
        </div>
        <div className={styles.title_block}>
          <h2>Фирма : {props.firm}</h2>
        </div>
        <div className={styles.title_block}>
          <h2>Цена : {props.price}$</h2>
        </div>
        <h2 className={styles.title_sizes}>Размеры</h2>
        <div className={styles.second_div_button}>
          {props.quantity.map((item) => (
            <div key={item.size}>
              <button className={styles.button} onClick={handleClick}>
                {item.size}
              </button>
            </div>
          ))}
        </div>
        <button className={styles.bascet_button} onClick={handleAddToBascet}>
          Добавить в корзину
        </button>
      </div>
    </>
  );
};

export default AddedFormBascet;
