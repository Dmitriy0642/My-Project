import React, { useEffect, useState } from "react";
import httpService from "../../services/http.services";
import config from "../../config.json";
import Header from "../ui/header";
import Footer from "../ui/footer";
import styles from "../styles.component/reviewSwetshirt.module.css";
import AddedFormBascet from "../form/addedToBascet";

import getDataWithCategory from "../../services/data.transform";

const ReviewSweatshorts = ({ match }) => {
  const [cat, setCat] = useState(null);
  const [catalog, setCatalog] = useState(null);
  const postId = match.params.postId;
  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}.json`);
      const { product, category } = data;
      setCat(category);
      setCatalog(product);
    };
    getData();
  }, []);

  const filtredDataContent = getDataWithCategory(cat, catalog, "sweatshirt");
  const getSingleData = filtredDataContent.find((obj) => obj._id === postId);
  const readyData = [];
  readyData.push(getSingleData);

  return getSingleData === undefined ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Header />
      <div>
        {readyData.map((item) => (
          <div
            key={item._id}
            category={item.category}
            className={styles.main_div}
          >
            <img src={item.img[0]} alt="" />
            <AddedFormBascet
              quantity={item.quantity}
              id={item._id}
              price={item.price}
              name={item.name}
              firm={item.firm}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ReviewSweatshorts;
