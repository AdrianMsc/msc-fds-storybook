import React from "react";
import "../../styles/output.css";

export const MscButtonIcon = ({
  icon = "fa-solid fa-thumbs-up",
  size = "default",
  disabled = false,
}) => {
  const variantSizes = {
    default: "",
    small: "-sm",
    large: "-lg",
  };

  const className = `msc-icon-button${variantSizes[size] || variantSizes.default}`;
  return (
    <button className={className} disabled={disabled}>
      <i className={icon}></i>
    </button>
  );
};

export default MscButtonIcon;
