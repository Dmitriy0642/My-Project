import React, { useEffect, useState } from "react";

import Header from "../ui/header";
import Footer from "../ui/footer";
import config from "../../config.json";
import httpService from "../../services/http.services";
import getDataWithCategory from "../../services/data.transform";
import FormCatalog from "../form/reusableForm";

const SwetShirt = () => {
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

  return filtredDataContent === undefined ? (
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
