import React from "react";
import MainPage from "./layouts/mainPage";
import { Route, Switch } from "react-router-dom";
import SwetShirt from "./components/swetShirt";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/swetshirt" component={SwetShirt} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
