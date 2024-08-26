import React from "react";
import "../../styles/output.css";

export const MscButton = ({
  label = "Button",
  variant = "solid",
  size = "default",
}) => {
  const variantClasses = {
    solid: "msc-btn msc-btn-blue-solid",
    outline: "msc-btn msc-btn-blue-outline",
    transparent: "msc-btn msc-btn-blue-transparent",
  };

  const variantSizes = {
    default: "",
    small: "msc-btn-sm",
  };

  const className = `${variantClasses[variant] || variantClasses.solid} ${variantSizes[size] || variantSizes.default}`;

  return <button className={className}>{label}</button>;
};

export default MscButton;
