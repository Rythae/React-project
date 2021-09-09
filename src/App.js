import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import CustomerProfile from "./components/customerProfile";
import OrderSummary from "./components/orderSummary";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={CustomerProfile} />
      <Route exact path={"/order/:orderId"} component={OrderSummary} />
    </Router>
  );
}

export default App;
