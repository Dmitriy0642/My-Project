import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import config from "../config.json";
import styles from "../components/swetShirt.module.css";
import axios from "axios";

const SwetShirt = () => {
  const [cat, setCat] = useState(null);
  const [catalog, setCatalog] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${config.ApiEndPOint}` + ".json");
      const { category, product } = data;
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

  const result = catalogArr.filter((catArr) => {
    const cat = categoryArr.find((obj) => obj._id === catArr.category);
    if (cat !== undefined) {
      const cat_name = cat.name;
      if (cat_name === "sweatshirt") return catalogArr;
    }
  });

  return cat === null && catalog === null ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Header />
      <div className={styles.second_block}>
        {result.map((item) => (
          <div
            key={item._id}
            category={item.category}
            firm={item.firm}
            className={styles.main_div}
          >
            <Link to={`/swetshirt/${item._id}`}>
              <img src={item.img[0]} alt="" className={styles.img} />
            </Link>
            <Link to={`/swetshirt/${item._id}`}>
              <h2 className={styles.title}>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SwetShirt;
