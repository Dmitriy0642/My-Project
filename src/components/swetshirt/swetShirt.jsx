import React, { useState, useEffect } from "react";
import httpService from "../../services/http.services";
import config from "../../config.json";
import Header from "../ui/header";
import Footer from "../ui/footer";
import getDataWithCategory from "../../services/data.transform";
import FormCatalog from "../form/reusableForm";

const SwetShirt = ({ props }) => {
  const [readyData, setReadyData] = useState(null);
  const [categoryProd, setCat] = useState(null);
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}` + `.json`);
      const { category, product } = data;
      setCat(category);
      setCatalog(product);
    };
    getData();
  }, []);

  const filtredDataContent = getDataWithCategory(
    categoryProd,
    catalog,
    "sweatshirt"
  );

  return filtredDataContent === null ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <Header />
      <FormCatalog data={filtredDataContent} url={"swetshirt"} />
      <Footer />
    </div>
  );
};

export default SwetShirt;
