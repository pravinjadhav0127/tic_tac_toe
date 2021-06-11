import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" size="30px" />;
    case "cross":
      return <FaTimes className="icons" size="30px" />;
    default:
      return <FaPen className="icons" size="30px" />;
  }
};

export default Icon;
