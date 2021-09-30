import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Items from "./items";
import "../styles/orderSummary.css";
import CustomerDetails from "../components/customerDetails";


function OrderSummary(props) {
  // const orderId = props.match.params.order_id;

  const [orderDetails, setOrderDetails] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  const getDetails = () => {
    fetch(`https://indapi.kumba.io/webdev/assignment`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setOrderDetails(result);
        setCustomerDetails(result);
        setItemDetails(result);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);


  return (
    <div className="order-container">
      <h1>Order Summary Page</h1>
      <div className="items-wrapper">
        <div>
          <ul className="order-details">
            <li>{orderDetails.restaurant && orderDetails.restaurant.name}</li>
            <li>{orderDetails.restaurant && orderDetails.restaurant.street}</li>
            <li>{orderDetails.restaurant && orderDetails.restaurant.city}</li>
            <li>{orderDetails.restaurant && orderDetails.restaurant.state}</li>
            <li>
              {orderDetails.restaurant && orderDetails.restaurant.zipcode}
            </li>
          </ul>
          <CustomerDetails customerDetails={customerDetails} />
        </div>
        <div>
          <h3>Items Order Summary</h3>
          {!!itemDetails?.items?.length && (
            <Items
              items={itemDetails.items}
              setOrderTotal={setOrderTotal}
              setTaxTotal={setTaxTotal}
            />
          )}
          <h2>Total: {orderTotal}</h2>
          <h2>Total Tax: {taxTotal}</h2>
          <h2>Total Bill: {orderTotal + taxTotal}</h2>
        </div>
      </div>
      <Link to="/">
        <button className="button">Go back</button>
      </Link>
    </div>
  );
}

export default OrderSummary;
