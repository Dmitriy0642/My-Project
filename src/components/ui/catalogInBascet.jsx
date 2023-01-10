import React from "react";
import styles from "../styles.component/catalogInBascet.module.css";
import CardProduct from "../form/cardProduct";
const CatalogInBascet = ({ name, initialSize, img, quantity, id, price }) => {
  const allSizesProduct = quantity.map((item) => {
    return item.size;
  });

  return (
    <div className={styles.main_div}>
      <CardProduct
        allSizes={allSizesProduct}
        img={img}
        name={name}
        initialSize={initialSize}
        id={id}
        price={price}
      />
    </div>
  );
};

export default CatalogInBascet;
