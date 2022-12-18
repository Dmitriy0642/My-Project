const getDataByid = (res, postId) => {
  const getSingleData = res.find((obj) => obj._id === postId);
  const readyData = [];
  readyData.push(getSingleData);
  console.log(readyData);
  return readyData;
};

export default getDataByid;
