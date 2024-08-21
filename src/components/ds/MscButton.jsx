import React from "react";
import "../../styles/output.css";

export const MscButton = ({
  label = "Button",
  className = "msc-btn msc-btn-blue-solid",
  size,
}) => {
  return <button className={`${className} ${size}`}>{label}</button>;
};

export default MscButton;
