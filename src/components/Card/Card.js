import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing data={data} open={openModal} />
      {open && (
        <Overlay close={closeModal}>{/* Modal should go here */}</Overlay>
      )}
    </>
  );
};

export default Card;
