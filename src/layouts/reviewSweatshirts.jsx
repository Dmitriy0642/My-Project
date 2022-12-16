import React, { useEffect } from "react";
import httpService from "../services/http.services";
import config from "../config.json";

const ReviewSweatshorts = ({ match }) => {
  const postId = match.params.postId;
  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get(`${config.ApiEndPOint}` + ".json");
      console.log(data);
    };
    getData();
  });
  return <div></div>;
};

export default ReviewSweatshorts;
