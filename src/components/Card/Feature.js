import React from "react";
import * as FontAwesome from "react-icons/fa";
import "./Feature.css";

const Feature = ({ iconName, iconLabel }) => {
  const Icon = FontAwesome[iconName];
  return (
    <div className="feature">
      <div className="feature__circle">
        <Icon className="feature__icon" />
      </div>
      <span className="feature__label">{iconLabel}</span>
    </div>
  );
};

export default Feature;
