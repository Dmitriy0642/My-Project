import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import styles from "../components/styles.component/bascet.module.css";

const Bascket = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <div className={styles.div_menu_bascet}></div>

      <div></div>
      <Footer />
    </>
  );
};
export default Bascket;
