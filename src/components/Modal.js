import React from "react";
import Overlay from "./Overlay";
import "./Modal.css";
import { motion } from "framer-motion";
import Feature from "./Feature";
import { IoClose } from "react-icons/io5";

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
    <motion.div className="modal" key="modal__image">
      <motion.img
        key="modal__image"
        className="modal__image"
        alt="real estate mansion"
        src="https://blog.dupontregistry.com/wp-content/uploads/2020/08/Parkland_1st-Photo-scaled.jpg"
      ></motion.img>
      <motion.div className="modal__info">
        <div className="modal__details">
          <div className="modal__row">
            <span className="modal__price">$1,200,000</span>
          </div>
          <div className="modal__row">
            <span className="modal__address">5100 Fake Address</span>
          </div>
        </div>
        <div className="modal__row">
          <Feature iconName={"FaBed"} iconLabel="4" />
          <Feature iconName={"FaShower"} iconLabel="3" />
          <Feature iconName={"FaRuler"} iconLabel="100 sq ft." />
        </div>
        <div className="modal__row">
          <p className="modal__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            hendrerit pretium malesuada. Cras eu turpis turpis. Duis lorem
            dolor, vulputate in tortor eget, aliquam efficitur lorem. Maecenas
            blandit gravida quam vel consectetur. Fusce et nunc et urna
            tincidunt dictum et ut justo. Vestibulum at lectus nec dui volutpat
            egestas. Sed tortor eros, sodales non erat non, consequat cursus
            mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Morbi augue leo, egestas eget sem a,
            bibendum hendrerit mauris. Integer fringilla placerat nunc quis
            efficitur.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
