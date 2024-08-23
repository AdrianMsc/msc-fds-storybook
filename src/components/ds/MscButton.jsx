import React from "react";
import "../../styles/output.css";

export const MscButton = ({
  label = "Button",
  variant = "solid", // Valor predeterminado
  size,
}) => {
  const variantClasses = {
    solid: "msc-btn msc-btn-blue-solid",
    outline: "msc-btn msc-btn-blue-outline",
    transparent: "msc-btn msc-btn-blue-transparent",
    coter,
  };

  const className = variantClasses[variant] || variantClasses.solid;

  return (
    <button className={`${className} ${size}`}>
      {label} <span>yesyes</span>
    </button>
  );
};

export default MscButton;
