import React, { useState } from "react";
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
      <div className={styles.main_div}>
        <div>
          {ar.map((item) => (
            <div>
              {<img src={item.img[0]} className={styles.title_img}></img>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Bascket;
