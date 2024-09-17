import React, { useState } from "react";
import "../../styles/output.css";

const buttons = [
  { icon: "fa-floppy-disk", text: "Save Cart" },
  { icon: "fa-print", text: "Print" },
  { icon: "fa-plus", text: "Add to List" },
  { icon: "fa-download", text: "Download Cart" },
  { icon: "fa-receipt", text: "Request a Quote" },
  { icon: "fa-share", text: "Share" },
  { icon: "fa-trash", text: "Clear Cart" },
];

const Button = ({ icon, text }) => (
  <button className="msc-grey-button">
    <i className={`fa-solid ${icon} mb-[1px]`}></i>
    <p>{text}</p>
  </button>
);

const MscCartActionBar = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div className="msc-cart-action-bar">
      <div className="msc-buttons-container">
        {buttons.map((button, index) => (
          <React.Fragment key={index}>
            <Button icon={button.icon} text={button.text} />
            {index < buttons.length - 1 && (
              <div className="msc-v-divider-gray h-5"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Responsive Code */}
      <>
        <button
          id="cartOptions"
          className="msc-grey-button lg:hidden"
          onClick={toggleOptions}
        >
          <p>Cart Options</p>
          <i className="fa-solid fa-ellipsis-vertical mb-[1px]"></i>
        </button>

        <div
          id="optionsList"
          className={`msc-buttons-container-responsive ${
            optionsVisible ? "" : "hidden"
          } lg:hidden`}
        >
          {buttons.map((button, index) => (
            <Button key={index} icon={button.icon} text={button.text} />
          ))}
        </div>
      </>
    </div>
  );
};

export default MscCartActionBar;
