import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Items from "./items";
import "../styles/orderSummary.css";

function OrderSummary(props) {
  const orderId = props.match.params.order_id;

  const [orderDetails, setOrderDetails] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  const getDetails = () => {
    fetch(`https://indapi.kumba.io/webdev/assignment/?order_id=${orderId}`, {
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
          <h1>Restaurant Details</h1>
          <ul className="order-details">
            <li>
              <strong>Name</strong>:
              {orderDetails.restaurant && orderDetails.restaurant.name}
            </li>
            <li>
              <strong>Street</strong>:
              {orderDetails.restaurant && orderDetails.restaurant.street}
            </li>
            <li>
              <strong>City</strong>:
              {orderDetails.restaurant && orderDetails.restaurant.city}
            </li>
            <li>
              <strong>State</strong>:
              {orderDetails.restaurant && orderDetails.restaurant.state}
            </li>
            <li>
              <strong>Zipcode</strong>:
              {orderDetails.restaurant && orderDetails.restaurant.zipcode}
            </li>
          </ul>
        </div>
        <div>
          <h1>Customer Details</h1>
          <ul className="order-details">
            <li>
              <strong>Name</strong>:
              {customerDetails.user && customerDetails.user.name}
            </li>
            <li>
              <strong>Phone</strong>:
              {customerDetails.user && customerDetails.user.phone}
            </li>
            <li>
              <strong>About</strong>:
              {customerDetails.user && customerDetails.user.about}
            </li>
            <li>
              <strong>Address</strong>:
              {customerDetails.user && customerDetails.user.address}
            </li>
            <li>
              <strong>dislikes</strong>:
              {customerDetails.user && customerDetails.user.dislikes}
            </li>
            <li>
              <strong>Likes</strong>:
              {customerDetails.user && customerDetails.user.likes}
            </li>
          </ul>
        </div>
        <div>
          <h1>Items Details</h1>
          {!!itemDetails?.items?.length && (
            <Items
              items={itemDetails.items}
              setOrderTotal={setOrderTotal}
              setTaxTotal={setTaxTotal}
            />
          )}
          <h2>{orderTotal}</h2>
          <h2>{taxTotal}</h2>
          <h2>Total bill: {orderTotal + taxTotal}</h2>
        </div>
      </div>
      <Link to="/">
        <button className="button">Go back</button>
      </Link>
    </div>
  );
}

export default OrderSummary;
