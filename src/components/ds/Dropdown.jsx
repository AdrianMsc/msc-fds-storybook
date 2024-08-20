import { useState } from "react";
import Codeblock from "../Codeblock";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dropdown = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  return (
    <>
      <h2>Default</h2>
      <div
        id="dropdown"
        className={`dropdown-container ${
          isOptionsVisible ? "dropdown-active" : ""
        }`}
        onClick={toggleOptions}
      >
        <button className="dropdown-button">
          <p className="dropdown-placeholder">
            Select a Buyer <span className="text-red-600">*</span>
          </p>
          <FontAwesomeIcon icon={faCaretDown} className="text-[#212121]" />
        </button>
        <div
          id="options"
          className={`dropdown-options-container ${
            isOptionsVisible ? "" : "hidden"
          }`}
        >
          <div className="dropdown-option">Buyer 1</div>
          <div className="dropdown-option">Buyer 2</div>
          <div className="dropdown-option">Buyer 3</div>
        </div>
      </div>

      <Codeblock>
        {`
  <div id="dropdown" class="dropdown-container">
      <button class="dropdown-button">
        <p class="dropdown-placeholder">
          Select a Buyer <span class="text-red-600">*</span>
        </p>
        <img src="../assets/caret-down.svg" />
      </button>
      <div id="options" class="dropdown-options-container hidden">
        <div class="dropdown-option">Buyer 1</div>
        <div class="dropdown-option">Buyer 2</div>
        <div class="dropdown-option">Buyer 3</div>
      </div>
    </div>
      <!-- JS -->
    <script>
    let numDropdown = document.getElementById("numDropdown");
    let numOptions = document.getElementById("numOptions");
    
    numDropdown.addEventListener("click", function () {
      numDropdown.classList.toggle("dropdown-active");
      numOptions.classList.toggle("hidden");
    });
    </script>
        `}
      </Codeblock>
    </>
  );
};

export const DropdownLabel = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <h2 className="mt-8 mb-4">With Label</h2>
      <div className="dropdown-label">
        <p>Label</p>
        <div
          id="dropdownTwo"
          className={`dropdown-container ${isActive ? "dropdown-active" : ""}`}
          onClick={toggleDropdown}
        >
          <button className="dropdown-button">
            <p className="dropdown-placeholder">
              Select a Buyer <span className="text-red-600">*</span>
            </p>
            <FontAwesomeIcon icon={faCaretDown} className="text-[#212121]" />
          </button>
          <div
            id="dropdownTwoOptions"
            className={`dropdown-options-container ${isActive ? "" : "hidden"}`}
          >
            <div className="dropdown-option">Buyer 1</div>
            <div className="dropdown-option">Buyer 2</div>
            <div className="dropdown-option">Buyer 3</div>
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  <div class="dropdown-label">
      <p>Label</p>
      <div id="dropdownTwo" class="dropdown-container">
        <button class="dropdown-button">
          <p class="dropdown-placeholder">
            Select a Buyer <span class="text-red-600">*</span>
          </p>
          <img src="../assets/caret-down.svg" />
        </button>
        <div id="dropdownTwoOptions" class="dropdown-options-container hidden">
          <div class="dropdown-option">Buyer 1</div>
          <div class="dropdown-option">Buyer 2</div>
          <div class="dropdown-option">Buyer 3</div>
        </div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let dropdownTwo = document.getElementById("dropdownTwo");
    let dropdownTwoOptions = document.getElementById("dropdownTwoOptions");
    
    dropdownTwo.addEventListener("click", function () {
      dropdownTwo.classList.toggle("dropdown-active");
      dropdownTwoOptions.classList.toggle("hidden");
    });
    </script>
        `}
      </Codeblock>
    </>
  );
};

export const DropdownLabelTop = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const selectOption = () => {
    setIsOptionSelected(!isOptionSelected);
  };

  return (
    <>
      <h2 className="my-4">Label on Top</h2>
      <div
        id="dropdownThree"
        className={`dropdown-container ${isActive ? "dropdown-active" : ""}`}
        onClick={toggleDropdown}
      >
        <p
          id="labelTop"
          className={`dropdown-label-top ${isOptionSelected ? "" : "hidden"}`}
        >
          Select a Buyer
        </p>
        <button className="dropdown-button">
          <p
            id="dropPlaceholder"
            className={`dropdown-placeholder ${
              isOptionSelected ? "text-transparent" : ""
            }`}
          >
            Select a Buyer
          </p>
          <FontAwesomeIcon icon={faCaretDown} className="text-[#212121]" />
        </button>
        <div
          id="dropdownThreeOptions"
          className={`dropdown-options-container ${isActive ? "" : "hidden"}`}
        >
          <div
            id="dropOption"
            className="dropdown-option"
            onClick={selectOption}
          >
            Buyer 1
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  <div id="dropdownThree" class="dropdown-container">
      <p id="labelTop" class="dropdown-label-top hidden">
        Select a Buyer
      </p>
      <button class="dropdown-button">
        <p id="dropPlaceholder" class="dropdown-placeholder">
          Select a Buyer
        </p>
        <img src="../assets/caret-down.svg" />
      </button>
      <div id="dropdownThreeOptions" class="dropdown-options-container hidden">
        <div id="dropOption" class="dropdown-option">Buyer 1</div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let dropdownThree = document.getElementById("dropdownThree");
    let dropdownThreeOptions = document.getElementById("dropdownThreeOptions");
    let dropOption = document.getElementById("dropOption");
    let labelTop = document.getElementById("labelTop");
    let dropPlaceholder = document.getElementById("dropPlaceholder");
  
    dropdownThree.addEventListener("click", function () {
      dropdownThree.classList.toggle("dropdown-active");
      dropdownThreeOptions.classList.toggle("hidden");
    });
    dropOption.addEventListener("click", function () {
      console.log("clicked");
      labelTop.classList.toggle("hidden");
      dropPlaceholder.classList.toggle("text-transparent");
    });
    </script>
        `}
      </Codeblock>
    </>
  );
};

export const DoubleDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <h2 className="my-4">Double Line</h2>
      <div
        id="double-dropdown"
        className={`msc-double-dropdown-container ${
          isActive ? "double-dropdown-active" : ""
        }`}
      >
        <button className="dropdown-button" onClick={toggleDropdown}>
          <div className="text-left">
            <p className="text-sm">
              Est. <b>Wed, Apr 03</b> from PA
            </p>
            <p className="text-xs">Standard UPS Ground</p>
          </div>
          <FontAwesomeIcon icon={faCaretDown} className="text-[#212121]" />
        </button>
        <div
          id="double-options"
          className={`double-dropdown-options-container ${
            isActive ? "" : "hidden"
          }`}
        >
          <div className="double-dropdown-option text-left">
            <p className="text-sm">
              Est. <b>Thu, Apr 04</b> from PA
            </p>
            <p className="text-xs">UPS Ground Freight Saver</p>
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  <div id="double-dropdown" class="msc-double-dropdown-container">
      <button class="dropdown-button">
        <div class="text-left">
          <p class="text-sm">Est. <b>Wed, Apr 03</b> from PA</p>
          <p class="text-xs">Standard UPS Ground</p>
        </div>
        <img src="../assets/caret-down.svg" />
      </button>
      <div
        id="double-options"
        class="double-dropdown-options-container hidden"
      >
        <div class="double-dropdown-option text-left">
          <p class="text-sm">Est. <b>Thu, Apr 04</b> from PA</p>
          <p class="text-xs">UPS Ground Freight Saver</p>
        </div>
      </div>
    </div>
    <!-- JS -->
    <script>
      let doubleDropdown = document.getElementById("double-dropdown");
      let doubleOptions = document.getElementById("double-options");
  
      doubleDropdown.addEventListener("click", function () {
        doubleDropdown.classList.toggle("double-dropdown-active");
        doubleOptions.classList.toggle("hidden");
      });
    </script>
        `}
      </Codeblock>
    </>
  );
};

export const NumericDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <h2 className="my-4">Numeric</h2>
      <div
        id="numDropdown"
        className={`numeric-dropdown-container ${
          isActive ? "dropdown-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className="numeric-dropdown">
          <input
            type="text"
            placeholder="25"
            className="numeric-dropdown-input"
          />
          <FontAwesomeIcon icon={faCaretDown} className="text-[#212121]" />
        </div>
        <div
          id="numOptions"
          className={`numeric-dropdown-options-container relative ${
            isActive ? "" : "hidden"
          }`}
        >
          <div className="numeric-dropdown-options">25</div>
          <div className="numeric-dropdown-options">50</div>
          <div className="numeric-dropdown-options">75</div>
          <div className="numeric-dropdown-options">100</div>
        </div>
      </div>

      <Codeblock>
        {`
  <div id="numDropdown" class="numeric-dropdown-container">
      <div class="numeric-dropdown">
        <input type="text" placeholder="25" class="numeric-dropdown-input" />
        <img src="../assets/caret-down.svg" />
      </div>
      <div id="numOptions" class="numeric-dropdown-options-container hidden">
        <div class="numeric-dropdown-options">25</div>
        <div class="numeric-dropdown-options">50</div>
        <div class="numeric-dropdown-options">75</div>
        <div class="numeric-dropdown-options">100</div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let numDropdown = document.getElementById("numDropdown");
    let numOptions = document.getElementById("numOptions");
    
    numDropdown.addEventListener("click", function () {
      numDropdown.classList.toggle("dropdown-active");
      numOptions.classList.toggle("hidden");
    });
    </script>
        `}
      </Codeblock>
    </>
  );
};
