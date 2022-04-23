import React from "react";
import "./Overlay.css";

const Overlay = ({ children, close }) => {
  return (
    <div className="overlay" onClick={close}>
      {children}
    </div>
  );
};

export default Overlay;
