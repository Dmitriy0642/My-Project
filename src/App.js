import React from "react";
import MainPage from "./layouts/mainPage";
import { Route, Switch } from "react-router-dom";
import SwetShirt from "./components/swetshirt/swetShirt";
import ReviewSweatshorts from "./components/swetshirt/reviewSweatshirts";
import Hoodies from "./components/hoodies/hoodies";
import HoodiesReview from "./components/hoodies/hoodiesReview";
import Sneakers from "./components/sneakers/sneakers";
import SneakersReview from "./components/sneakers/sneakersReview";
import Socks from "./components/socks/socks";
import SocksReview from "./components/socks/socksReview";
import Tshirt from "./components/t-shirt/tshirt";
import TshirtReview from "./components/t-shirt/tshirtReview";
import Bascket from "./layouts/bascet";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/basket" component={Bascket} />
        <Route path="/tshirts/:postId" component={TshirtReview} />
        <Route path="/tshirts" component={Tshirt} />
        <Route path="/socks/:postId" component={SocksReview} />
        <Route path="/socks" component={Socks} />
        <Route path="/shoes/:postId" component={SneakersReview} />
        <Route path="/shoes" component={Sneakers} />
        <Route path="/hoodies/:postId" component={HoodiesReview} />
        <Route path="/hoodies" component={Hoodies} />
        <Route path="/swetshirt/:postId" component={ReviewSweatshorts} />
        <Route path="/swetshirt" component={SwetShirt} />
        <Route path="/" component={MainPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
