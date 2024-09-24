import { useEffect, useState } from "react";
import "../../styles/output.css";

const MscDropdown = ({ placeholder, variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDoubleValue, setSelectedDoubleValue] = useState(null);
  const [selectedNumericValue, setSelectedNumericValue] = useState();
  const options = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const numericOptions = ["25", "50", "75", "100"];
  const doubleOptions = [
    {
      p1: "Est. Thu, Apr 04 from PA",
      p2: "UPS Ground Freight Saver",
    },
    {
      p1: "Est. Wed, Apr 03 from PA",
      p2: "1 Day UPS Air (Red)",
    },
    {
      p1: "Est. Thu, Apr 03 from PA",
      p2: "1 Day UPS (Early AM)",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNumericOptionClick = (value) => {
    setSelectedNumericValue(value);
    setIsOpen(false);
  };

  const handleNumericInput = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setSelectedNumericValue(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(!isOpen);
    setIsOptionSelected(true);
  };
  const handleDoubleOptionClick = (option) => {
    setSelectedDoubleValue(option);
    setIsOpen(!isOpen);
    setIsOptionSelected(true);
  };

  switch (variant) {
    case "default":
      return (
        <div
          className={`dropdown-container ${isOpen ? "dropdown-active" : ""} !w-[400px]`}
          onClick={toggleDropdown}
        >
          <button className="dropdown-button">
            <p className="dropdown-placeholder">
              {selectedValue ?? placeholder}{" "}
              <span className="text-red-600">*</span>
            </p>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div
            className={`dropdown-options-container ${isOpen ? "" : "hidden"}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      );
      break;

    case "disabled":
      return (
        <div className="dropdown-label dropdown-disabled">
          <p>Label</p>
          <div className="dropdown-container dropdown-disabled !w-[400px]">
            <button className="dropdown-button dropdown-disabled" disabled>
              <p className="dropdown-placeholder dropdown-disabled">
                {placeholder} <span className="text-red-600">*</span>
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>
        </div>
      );
      break;

    case "with label":
      return (
        <div className="dropdown-label">
          <p>Label</p>
          <div
            className={`dropdown-container ${isOpen ? "dropdown-active" : ""} !w-[400px]`}
            onClick={toggleDropdown}
          >
            <button className="dropdown-button">
              <p className="dropdown-placeholder">
                {selectedValue ?? placeholder}{" "}
                <span className="text-red-600">*</span>
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div
              className={`dropdown-options-container ${isOpen ? "" : "hidden"}`}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      break;

    case "with label on top":
      return (
        <div
          className={`dropdown-container ${isOpen ? "dropdown-active" : ""} !w-[400px]`}
          onClick={toggleDropdown}
        >
          <p
            className={`dropdown-label-top ${isOptionSelected ? "" : "hidden"}`}
          >
            {placeholder}
          </p>
          <button className="dropdown-button">
            <p className={`dropdown-placeholder `}>
              {selectedValue ?? placeholder}
            </p>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div
            className={`dropdown-options-container ${isOpen ? "" : "hidden"}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      );
      break;

    case "double":
      return (
        <div
          className={`msc-double-dropdown-container ${isOpen ? "double-dropdown-active" : ""} !w-[400px]`}
          onClick={toggleDropdown}
        >
          <button className="dropdown-button">
            <div className="text-left">
              {selectedDoubleValue ? (
                <>
                  <p className="text-sm">
                    {selectedDoubleValue.p1.slice(0, 5)}
                    <b>{selectedDoubleValue.p1.slice(5, 16)}</b>
                    {selectedDoubleValue.p1.slice(16, 24)}
                  </p>
                  <p className="text-xs">{selectedDoubleValue.p2}</p>
                </>
              ) : (
                <>
                  <p className="text-sm">
                    Est. <b>Wed, Apr 03</b> from PA
                  </p>
                  <p className="text-xs">Standard UPS Ground</p>
                </>
              )}
            </div>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div
            className={`double-dropdown-options-container ${isOpen ? "" : "hidden"}`}
          >
            {doubleOptions.map((option, index) => (
              <div
                key={index}
                className="double-dropdown-option text-left"
                onClick={() => handleDoubleOptionClick(option)}
              >
                <p className="text-sm">
                  {option.p1.slice(0, 5)}
                  <b>{option.p1.slice(5, 16)}</b>
                  {option.p1.slice(16, 24)}
                </p>
                <p className="text-xs">{option.p2}</p>
              </div>
            ))}
          </div>
        </div>
      );
      break;

    case "numeric":
      return (
        <div
          className={`numeric-dropdown-container ${isOpen ? "dropdown-active" : ""}`}
          onClick={toggleDropdown}
        >
          <div className="numeric-dropdown">
            <input
              type="number"
              placeholder="25"
              className="numeric-dropdown-input"
              onChange={handleNumericInput}
              value={selectedNumericValue || ""}
            />
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {isOpen && (
            <div className="numeric-dropdown-options-container">
              {numericOptions.map((option) => (
                <div
                  key={option}
                  className="numeric-dropdown-options"
                  onClick={() => handleNumericOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
      break;

    case "error":
      return (
        <div>
          <div className="dropdown-container dropdown-error !w-[400px]">
            <button className="dropdown-button">
              <p className="dropdown-placeholder dropdown-error">
                {placeholder} *
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>
          <p className="dropdown-error-message">Error Message</p>
        </div>
      );
      break;

    default:
      break;
  }
};

export default MscDropdown;
