import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ReviewBascet from "../components/form/reviewBascet";

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
          <ReviewBascet data={item} quantity={item.quantity[0]} key={item.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Bascket;
