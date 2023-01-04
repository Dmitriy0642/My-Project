// import { useEffect } from "react";
import httpService from "./http.services";
import config from "../config.json";
import { useEffect, useState } from "react";
const useQuantity = () => {
  const [prod, setProd] = useState(null);
  useEffect(() => {
    const getAllData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}` + `.json`);
      const { product } = data;
      setProd(product);
    };
    getAllData();
  }, []);
  const objProd = [];
  for (let key in prod) {
    objProd.push(prod[key]);
  }
  const readyOl = objProd.map((item) => {
    const quantity = item.quantity;
    const id = item._id;
    const readyPush = { id, quantity };
    return readyPush;
  });

  localStorage.setItem("sizesAndValues", JSON.stringify(readyOl));
};

export default useQuantity;
