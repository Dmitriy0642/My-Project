import React from "react";
import MainPage from "./layouts/mainPage";
import { Route, Switch } from "react-router-dom";
import SwetShirt from "./components/swetshirt/swetShirt";
import ReviewSweatshorts from "./components/swetshirt/reviewSweatshirts";
import Hoodies from "./components/hoodies/hoodies";
import HoodiesReview from "./components/hoodies/hoodiesReview";

function App() {
  return (
    <div>
      <Switch>
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
