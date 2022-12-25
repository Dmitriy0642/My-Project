import React from "react";
import styles from "../styles.component/reusableForm.module.css";
import { Link } from "react-router-dom";

const FormCatalog = ({ data, url }) => {
  return data === null && data === undefined ? (
    <h2>Loading...</h2>
  ) : (
    <div className={styles.main_content}>
      {data.map((item) => (
        <div
          key={item._id}
          category={item.category}
          firm={item.firm}
          className={styles.main_div}
        >
          <Link to={`/${url}/${item._id}`}>
            <img
              src={item.img[0]}
              alt=""
              className={styles.img}
              id={item._id}
            />
          </Link>
          <Link to={`/${url}/${item._id}`}>
            <h2 className={styles.title}>{item.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FormCatalog;
