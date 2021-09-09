import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/customerProfile.css";

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
      <div className="customer-page">
        <div className="profile"></div>
        <ul className="profile-details">
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
      <Link
        to={`/order/${
          customerDetails.user && customerDetails.user.id
        }`}
      >
        <button className="button">View Order</button>
      </Link>
    </div>
  );
}

