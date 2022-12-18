const getDataWithCategory = (cat, catalog, nameCat) => {
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
      if (cat_name === `${nameCat}`) return catArr;
    }
  });
  return res;
};

export default getDataWithCategory;
