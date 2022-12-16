import React from "react";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import CatalogComponent from "../components/ui/catalogComponent";

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
