import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/customerProfile.css";
import CustomerDetails from "../components/customerDetails"

export default function CustomerProfile() {
  const [customerDetails, setCustomerDetails] = useState([]);

  const getCustomerDetails = () => {
    fetch("https://indapi.kumba.io/webdev/assignment", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setCustomerDetails(result);
        console.log("result", result);
      });
  };

  useEffect(() => {
    getCustomerDetails();
  }, []);

  return (
    <div className="container">
      <h1>Customer Profile Page </h1>
      <CustomerDetails customerDetails={customerDetails} />
      <Link to="/order">
        <button className="button">View Order</button>
      </Link>
    </div>
  );
}

