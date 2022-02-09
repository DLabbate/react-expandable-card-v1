import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { FaBed, FaShower } from "react-icons/fa";

const Card = () => {
  const cardVariants = {
    rest: {},
    hover: { scale: 1.1 },
  };

  const imageVariants = {
    rest: {},
    hover: {},
  };

  return (
    <div className="card">
      <motion.div
        className="card__content"
        animate={"rest"}
        variants={cardVariants}
        whileHover={"hover"}
      >
        <div className="card__image-container">
          <motion.img
            className="card__image"
            alt="real estate mansion"
            src="https://blog.dupontregistry.com/wp-content/uploads/2020/08/Parkland_1st-Photo-scaled.jpg"
            variants={imageVariants}
          />
        </div>
        <div className="card__details">
          <div className="card__type">For Sale</div>
          <div className="card__row">
            <span className="card__price">$1,200,000</span>
          </div>
          <div className="card__row">
            <IoLocationOutline className="card__icon-location" />
            <span className="card__address">5100 Fake Address</span>
          </div>
          <div className="card__row">
            <div className="card__icon-container">
              <div className="card__icon-circle">
                <FaBed className="card__icon-bed" />
              </div>
              <span>4</span>
            </div>
            <div className="card__icon-container">
              <div className="card__icon-circle">
                <FaShower className="card__icon-shower" />
              </div>
              <span>2</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
