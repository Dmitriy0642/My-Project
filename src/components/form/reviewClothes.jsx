import React from "react";
import AddedFormBascet from "./addedToBascet";
import styles from "../styles.component/reviewClothes.module.css";

const ReviewClothes = ({ data }) => {
  return data === undefined ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className={styles.div_photos_change}>
        <img src={data.img[1]} alt="" width="100px" height="100px" />
      </div>
      <div key={data._id} category={data.category} className={styles.main_div}>
        <img src={data.img[0]} alt="" />
        <div></div>
        <AddedFormBascet
          quantity={data.quantity}
          id={data._id}
          price={data.price}
          name={data.name}
          firm={data.firm}
        />
      </div>
    </div>
  );
};

export default ReviewClothes;
