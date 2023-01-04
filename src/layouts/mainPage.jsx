import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import CatalogComponent from "../components/ui/catalogComponent";
import UseQuantity from "../services/getAllQuantity";

const MainPage = () => {
  return (
    <div>
      <Header />
      <CatalogComponent />
      <UseQuantity />
      <Footer />
    </div>
  );
};

export default MainPage;
