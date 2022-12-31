import React, { useEffect, useState } from "react";
import httpService from "../../services/http.services";
import config from "../../config.json";
import Header from "../ui/header";
import Footer from "../ui/footer";
import ReviewClothes from "../form/reviewClothes";
import getDataWithCategory from "../../services/data.transform";
import { useHistory } from "react-router-dom";

const SneakersReview = ({ match }) => {
  const history = useHistory();

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

  const filtredDataContent = getDataWithCategory(cat, catalog, "boots");
  const getSingleData = filtredDataContent.find((obj) => obj._id === postId);

  return getSingleData === undefined ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Header />
      <ReviewClothes data={getSingleData} />
      <Footer />
    </div>
  );
};

export default SneakersReview;
