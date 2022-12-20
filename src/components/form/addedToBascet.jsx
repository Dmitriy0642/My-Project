import React from "react";
import styles from "../styles.component/addedToBascet.module.css";

const AddedFormBascet = (props) => {
  const handleClick = () => {
    console.log("click");
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
          <button
            className={styles.button}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.quantity[0].size}
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.quantity[1].size}
          </button>
        </div>
        <div className={styles.third_div_button}>
          <button
            className={styles.button}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.quantity[2].size}
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.quantity[3].size}
          </button>
        </div>
        <button className={styles.bascet_button}>Добавить в корзину</button>
      </div>
    </>
  );
};

export default AddedFormBascet;
