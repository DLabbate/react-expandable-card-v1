import React, { useState } from "react";
import "./Card.css";
import { AnimatePresence, motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import Feature from "./Feature";
import Overlay from "./Overlay";

const Card = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const cardVariants = {
    rest: {},
    hover: { scale: 1.1 },
  };

  const imageVariants = {
    rest: {},
    hover: {},
  };

  const Listing = () => {
    return (
      <motion.div
        className={`card ${open && "open"}`}
        animate={"rest"}
        variants={cardVariants}
        whileHover={"hover"}
        layout
        onClick={toggleOpen}
      >
        <div className="card__content">
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
              <Feature iconName={"FaBed"} iconLabel="4" />
              <Feature iconName={"FaShower"} iconLabel="3" />
              <Feature iconName={"FaRuler"} iconLabel="100 sq ft." />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Listing />
      <AnimatePresence>
        {open && <Overlay onClick={toggleOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Card;
