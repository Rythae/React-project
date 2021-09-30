import React from "react";
import "../styles/customerProfile.css";

function CustomerDetails({ customerDetails }) {
             
  return (
    <>
      <div className="customer-page">
        <div className="profile"></div>
        <ul className="profile-details">
          <li>{`Name: ${customerDetails.user && customerDetails.user.name}`}</li>
          <li>{`Phone: ${customerDetails.user && customerDetails.user.phone}`}</li>
          <li>{`About: ${customerDetails.user && customerDetails.user.about}`}</li>
          <li>{`Address: ${customerDetails.user && customerDetails.user.address}`}</li>
          <li>{`Dislikes: ${customerDetails.user && customerDetails.user.dislikes}`}</li>
          <li>{`Likes: ${customerDetails.user && customerDetails.user.likes}`}</li>
        </ul>
      </div>
    </>
  );
}

export default CustomerDetails;
