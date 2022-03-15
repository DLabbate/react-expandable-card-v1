import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";
import Modal from "./Modal";
import Listing from "./Listing";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Listing data={data} onClick={toggleOpen} />
      <AnimatePresence>
        {open && (
          <Overlay onClick={toggleOpen}>
            <Modal data={data} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
