import React from "react";
import MainPage from "./layouts/mainPage";
import { Route, Switch } from "react-router-dom";
import SwetShirt from "./components/swetshirt/swetShirt";
import ReviewSweatshorts from "./components/swetshirt/reviewSweatshirts";
import Hoodies from "./components/hoodies/hoodies";
import HoodiesReview from "./components/hoodies/hoodiesReview";
import Sneakers from "./components/sneakers/sneakers";
import SneakersReview from "./components/sneakers/sneakersReview";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shoes/:postId" component={SneakersReview} />
        <Route path="/shoes" component={Sneakers} />
        <Route path="/hoodies/:postId" component={HoodiesReview} />
        <Route path="/hoodies" component={Hoodies} />
        <Route path="/swetshirt/:postId" component={ReviewSweatshorts} />
        <Route path="/swetshirt" component={SwetShirt} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
