import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ data, close }) => {
  const {
    imageUrl,
    price,
    address,
    description,
    numBedroom,
    numWashrooms,
    livingSpace,
  } = data;

  return (
    <div
      className="modal"
      key="modal__image"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        key="modal__image"
        className="modal__image"
        alt="real estate mansion"
        src={imageUrl}
      ></img>
      <div className="modal__info">
        <div className="modal__row">
          <span className="modal__price">{price}</span>
        </div>
        <div className="modal__row">
          <span className="modal__address">{address}</span>
        </div>
        <div className="modal__row">
          <Feature iconName={"FaBed"} iconLabel={numBedroom} />
          <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
          <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
        </div>
        <div className="modal__description-wrapper">
          <p className="modal__description">{description}</p>
        </div>
        <button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
