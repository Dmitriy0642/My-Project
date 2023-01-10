import React, { useState } from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import HeaderBascet from "../components/ui/headerBascet";
import CardProduct from "../components/form/cardProduct";
import FooterBascet from "../components/ui/footerBascet";
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
        <HeaderBascet />
        <div className={styles.line}></div>
        {ar.map((item) => (
          <CardProduct data={item} quantity={item.quantity[0]} key={item.id} />
        ))}
        <div className={styles.line}></div>
      </div>
      <FooterBascet />
      <Footer />
    </>
  );
};
export default Bascket;
