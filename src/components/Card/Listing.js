import React from "react";
import "./Listing.css";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import Feature from "./Feature";

const Listing = ({ data, onClick }) => {
  const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <motion.div
      className="listing"
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <div className="listing__content">
        <div className="listing__image-container">
          <motion.img
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
            <IoLocationOutline className="listing__icon-location" />
            <span className="listing__address">{address}</span>
          </div>
          <div className="listing__row">
            <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
