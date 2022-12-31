import React, { useState } from "react";
import styles from "../styles.component/addedToBascet.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddedFormBascet = (props) => {
  const [sizes, setSizes] = useState(null);
  const handleClick = (e) => {
    setSizes(e.target.innerText);
  };

  const handleAddBascet = () => {
    if (sizes === null) {
      toast("Вы не выбрали размер");
    } else if (sizes === typeof string) {
      toast("Товар добавлен в корзину");
    }
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
              <button
                onClick={handleClick}
                className={
                  sizes !== `${item.size}`
                    ? styles.button
                    : styles.button_active
                }
              >
                {item.size}
              </button>
            </div>
          ))}
        </div>
        <button
          className={
            sizes === null ? styles.bascet_button_disable : styles.bascet_button
          }
          onClick={handleAddBascet}
        >
          Добавить в корзину
        </button>
      </div>
    </>
  );
};

export default AddedFormBascet;
