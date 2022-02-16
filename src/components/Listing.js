import React, { useState } from "react";
import "./Listing.css";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import Feature from "./Feature";

const Listing = ({ onClick }) => {
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
            src="https://blog.dupontregistry.com/wp-content/uploads/2020/08/Parkland_1st-Photo-scaled.jpg"
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">For Sale</div>
          <div className="listing__row">
            <span className="listing__price">$1,200,000</span>
          </div>
          <div className="listing__row">
            <IoLocationOutline className="listing__icon-location" />
            <span className="listing__address">5100 Fake Address</span>
          </div>
          <div className="listing__row">
            <Feature iconName={"FaBed"} iconLabel="4" />
            <Feature iconName={"FaShower"} iconLabel="3" />
            <Feature iconName={"FaRuler"} iconLabel="100 sq ft." />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
