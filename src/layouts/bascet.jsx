import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import HeaderBascet from "../components/ui/headerBascet";
import CatalogInBascet from "../components/ui/catalogInBascet";
import FooterBascet from "../components/ui/footerBascet";
import styles from "../components/styles.component/bascet.module.css";

const Bascket = () => {
  const dataWithLs = [];
  const getData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const getIt = localStorage.getItem(localStorage.key(i));
      const getAr = JSON.parse(getIt);
      dataWithLs.push(getAr);
    }
  };
  getData();

  return (
    <>
      <Header />
      <HeaderBascet />
      {dataWithLs.map((item) => (
        <div key={item.id} className={styles.main_div}>
          <CatalogInBascet
            name={item.name}
            initialSize={item.size}
            price={item.price}
            img={item.img[0]}
            id={item.id}
            quantity={item.quantity[0]}
          />
        </div>
      ))}
      <FooterBascet />
      <Footer />
    </>
  );
};
export default Bascket;
