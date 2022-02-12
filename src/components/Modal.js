import React from "react";
import Overlay from "./Overlay";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = () => {
  const modalVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.5 } },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, x: "0vw" },
    closed: { opacity: 0, x: "-5vw" },
  };

  return (
    <motion.div className="modal" key="modal__image" variants={modalVariants}>
      <motion.img
        variants={imageVariants}
        key="modal__image"
        className="modal__image"
        alt="real estate mansion"
        src="https://blog.dupontregistry.com/wp-content/uploads/2020/08/Parkland_1st-Photo-scaled.jpg"
      ></motion.img>

      <motion.div className="modal__info" variants={modalInfoVariants}>
        <div className="card__details">
          <div className="card__type">For Sale</div>
          <div className="card__row">
            <span className="card__price">$1,200,000</span>
          </div>
          <div className="card__row">
            <span className="card__address">5100 Fake Address</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
