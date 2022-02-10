import React from "react";
import "./Overlay.css";

const Overlay = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

export default Overlay;
