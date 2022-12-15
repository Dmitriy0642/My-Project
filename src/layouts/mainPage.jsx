import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CatalogComponent from "../components/catalogComponent";

const MainPage = () => {
  return (
    <div>
      <Header />
      <CatalogComponent />
      <Footer />
    </div>
  );
};

export default MainPage;
