import React, { useEffect, useState } from "react";
import httpService from "../services/http.services";
import config from "../config.json";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import styles from "../components/styles.component/reviewSwetshirt.module.css";

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
            <div className={styles.secound_div}>
              <div className={styles.title_block}>
                <h2>Имя Товара : {item.name}</h2>
              </div>
              <div className={styles.title_block}>
                <h2>Фирма Товара : {item.firm}</h2>
              </div>
              <div className={styles.title_block}>
                <h2>Цена товара : {item.price}$</h2>
              </div>
              <h2 className={styles.title_sizes}>Размеры в наличии</h2>
              <div className={styles.second_div_button}>
                <button className={styles.button}>
                  {item.quantity[0].size}
                </button>
                <button className={styles.button}>
                  {item.quantity[1].size}
                </button>
              </div>
              <div className={styles.third_div_button}>
                <button className={styles.button}>
                  {item.quantity[2].size}
                </button>
                <button className={styles.button}>
                  {item.quantity[3].size}
                </button>
              </div>
              {/* <button>Добавить в корзину</button> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ReviewSweatshorts;
