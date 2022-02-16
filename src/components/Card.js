import React, { useState } from "react";
import "./Card.css";
import { AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";
import Modal from "./Modal";
import Listing from "./Listing";

const Card = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Listing onClick={toggleOpen} />
      <AnimatePresence>
        {open && (
          <Overlay onClick={toggleOpen}>
            <Modal />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
