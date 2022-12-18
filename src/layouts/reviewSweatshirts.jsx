import React, { useEffect, useState } from "react";
import httpService from "../services/http.services";
import config from "../config.json";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import styles from "../components/styles.component/reviewSwetshirt.module.css";
import AddedFormBascet from "../components/form/addedToBascet";

const ReviewSweatshorts = ({ match }) => {
  const [cat, setCat] = useState(null);
  const [catalog, setCatalog] = useState(null);
  const postId = match.params.postId;
  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}` + ".json");
      const { product, category } = data;
      setCat(category);
      setCatalog(product);
    };
    getData();
  }, []);
  const categoryArr = [];
  for (const key in cat) {
    categoryArr.push(cat[key]);
  }
  const catalogArr = [];
  for (const key in catalog) {
    catalogArr.push(catalog[key]);
  }

  const res = catalogArr.filter((catArr) => {
    const cat = categoryArr.find((obj) => obj._id === catArr.category);
    if (cat !== undefined) {
      const cat_name = cat.name;
      if (cat_name === "sweatshirt") return catalogArr;
    }
  });
  const l = res.find((obj) => obj._id === postId);
  const readyData = [];
  readyData.push(l);

  const handleClick = (event) => {
    console.log(event.target);
  };

  return l === undefined ? (
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
