import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";
import config from "../../config.json";
import styles from "../styles.component/swetShirt.module.css";
import httpService from "../../services/http.services";
import getDataWithCategory from "../../services/data.transform";

const SwetShirt = () => {
  const [cat, setCat] = useState(null);
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}` + ".json");
      const { category, product } = data;
      setCat(category);
      setCatalog(product);
    };
    getData();
  }, []);

  const filtredDataContent = getDataWithCategory(cat, catalog, "boots");

  const handleClick = (e) => {};

  return filtredDataContent === null && filtredDataContent === undefined ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Header />
      <div className={styles.second_block}>
        {filtredDataContent.map((item) => (
          <div
            key={item._id}
            category={item.category}
            firm={item.firm}
            className={styles.main_div}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <Link to={`/swetshirt/${item._id}`}>
              <img
                src={item.img[0]}
                alt=""
                className={styles.img}
                id={item._id}
              />
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