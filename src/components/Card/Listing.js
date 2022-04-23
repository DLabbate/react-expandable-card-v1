import React from "react";
import "./Listing.css";

const Listing = ({ data }) => {
  const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <div className="listing">
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">For Sale</div>
          <div className="listing__row">
            <span className="listing__price">{price}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
