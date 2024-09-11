import React from "react";

const MscInputUnit = ({ label, errorMessage, disabled }) => {
  return (
    <>
      <div className="msc-input-unit-wrapper">
        <input
          id="field"
          type="number"
          placeholder="1"
          disabled={disabled}
          className={`msc-input-unit order-2 peer ${errorMessage && errorMessage.trim() ? " !border-error-red !text-error-red hover:!border-error-red focus:!border-error-red" : ""}`}
        />
        <label
          htmlFor="field"
          className={`msc-input-unit-label order-1 peer ${errorMessage && errorMessage.trim() ? " !text-error-red hover:!border-error-red focus:!border-error-red" : ""}`}
        >
          {/* Length (ft) */}
          {label}
        </label>
        <small
          className={`msc-error-message order-3 ${errorMessage && errorMessage.trim() ? "block" : ""}`}
        >
          {errorMessage}
        </small>
      </div>
    </>
  );
};

export default MscInputUnit;
