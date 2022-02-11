import { motion } from "framer-motion";
import React from "react";
import "./Overlay.css";

const Overlay = ({ children, onClick }) => {
  const variants = {
    open: { opacity: 0.6 },
    closed: { opacity: 0 },
  };
  return (
    <motion.div
      className="overlay"
      onClick={onClick}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
