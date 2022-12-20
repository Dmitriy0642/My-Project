import React from "react";

const FormCatalog = () => {
  return (
    <div>
      <Link to={`/swetshirt/${item._id}`}>
        <img src={item.img[0]} alt="" className={styles.img} id={item._id} />
      </Link>
      <Link to={`/swetshirt/${item._id}`}>
        <h2 className={styles.title}>{item.name}</h2>
      </Link>
    </div>
  );
};

export default FormCatalog;
