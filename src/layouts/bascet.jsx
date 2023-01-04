import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import styles from "../components/styles.component/bascet.module.css";

const Bascket = () => {
  const ar = [];
  const getData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const getIt = localStorage.getItem(localStorage.key(i));
      const getAr = JSON.parse(getIt);
      ar.push(getAr);
    }
  };
  getData();

  return (
    <>
      <Header />
      <div>
        {ar.map((item) => (
          <div key={item.id} className={styles.main_div}>
            {<img src={item.img[0]} className={styles.title_img}></img>}
            <div className={styles.second_block}>
              <h2 className={styles.title_order}>Название товара</h2>
              <div className={styles.under_block}>
                <h2 className={styles.under_title_order}>{item.name}</h2>
              </div>
              <div className={styles.secound_under_block}>
                <button className={styles.button_sizes}></button>
              </div>
            </div>
            <div className={styles.second_block}>
              <h2 className={styles.title_order}>Название фирмы</h2>
              <div className={styles.under_block}>
                <h2 className={styles.under_title_order}>{item.firm}</h2>
              </div>
              <div className={styles.secound_under_block}>
                <button className={styles.button_sizes}>XL</button>
              </div>
            </div>
            <div className={styles.second_block}>
              <h2 className={styles.title_order}>Цена товара</h2>
              <div className={styles.under_block}>
                <h2 className={styles.under_title_order}>{item.price}$</h2>
              </div>
              <div className={styles.secound_under_block}>
                <button className={styles.button_sizes}>XL</button>
              </div>
            </div>
            <div className={styles.second_block}>
              <h2 className={styles.title_order}>Выбранный размер</h2>
              <div className={styles.under_block}>
                <h2 className={styles.under_title_order}>{item.size}</h2>
              </div>
              <div className={styles.secound_under_block}>
                <button className={styles.button_sizes}>XL</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Bascket;
