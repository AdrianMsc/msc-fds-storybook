import { useEffect } from "react";
import { Codeblock } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const TogglePage = () => {
  useEffect(() => {
    function updateSliderPosition(toggleContainer) {
      let slider = toggleContainer.querySelector(".msc-triple-toggle-dot");
      let checkedRadio = toggleContainer.querySelector(
        'input[type="radio"]:checked'
      );
      let radioIndex = Array.from(
        checkedRadio.parentNode.parentNode.children
      ).indexOf(checkedRadio.parentNode);
      let positions = ["left-[4px]", "left-1/3", "left-[130px]"];
      slider.className = "msc-triple-toggle-dot " + positions[radioIndex - 1];
    }

    document
      .querySelectorAll(".msc-triple-toggle-container")
      .forEach(function (toggleContainer) {
        toggleContainer
          .querySelectorAll(".msc-triple-toggle-input-label input")
          .forEach(function (radio) {
            radio.addEventListener("change", function () {
              updateSliderPosition(toggleContainer);
            });
          });
        updateSliderPosition(toggleContainer);
      });
  }, []);

  return (
    <>
      <small className="category-tag">Form</small>
      <h1 className="mb-4">Toggle</h1>
      <h3>Default</h3>

      <div className="msc-component-container-row">
        <label htmlFor="toggleOne" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleOne"
              defaultChecked
              className="peer sr-only"
            />
            <div className="msc-toggle-container"></div>
            <div className="msc-toggle-dot"></div>
          </div>
        </label>
      </div>
      <Codeblock>
        {`
  <label for="toggleOne" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleOne" 
        checked 
        class="peer sr-only"/>
      <div class="msc-toggle-container"></div>
      <div class="msc-toggle-dot"></div>
    </div>
  </label>
      `}
      </Codeblock>
      <br />
      <h3>Toggle With Text</h3>
      <div className="msc-component-container-row">
        <label htmlFor="toggleTwo" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleTwo"
              defaultChecked
              className="peer sr-only"
            />
            <div
              before="Yes"
              after="No"
              className="msc-toggle-container-text"
            ></div>
            <div className="msc-toggle-dot-text"></div>
          </div>
        </label>
      </div>
      <Codeblock>
        {`
  <label for="toggleTwo" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleTwo" 
        checked 
        class="peer sr-only"/>
      <div
        before="Yes"
        after="No"
        class="msc-toggle-container-text"></div>
      <div class="msc-toggle-dot-text"></div>
    </div>
  </label>
      `}
      </Codeblock>
      <br />
      <h3>Toggle With Text Disabled</h3>
      <div className="msc-component-container-row">
        <label htmlFor="toggleDisabled" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleDisabled"
              className="peer sr-only"
              disabled
              defaultChecked
            />
            <div
              before="Yes"
              after="No"
              className="msc-toggle-container-disabled"
            ></div>
            <div className="msc-toggle-dot-disabled"></div>
          </div>
        </label>
        <label htmlFor="toggleDisabled" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleDisabled"
              className="peer sr-only"
              disabled
            />
            <div
              before="Yes"
              after="No"
              className="msc-toggle-container-disabled"
            ></div>
            <div className="msc-toggle-dot-disabled"></div>
          </div>
        </label>
      </div>
      <Codeblock>
        {`
  <label for="toggleDisabled" class="msc-toggle">
    <div class="relative">
      <input type="checkbox" id="toggleDisabled" class="peer sr-only" disabled checked />
      <div before="Yes" after="No" class="msc-toggle-container-disabled"></div>
      <div class="msc-toggle-dot-disabled"></div>
    </div>
  </label>
  <label for="toggleDisabled" class="msc-toggle">
    <div class="relative">
      <input type="checkbox" id="toggleDisabled" class="peer sr-only" disabled />
      <div before="Yes" after="No" class="msc-toggle-container-disabled"></div>
      <div class="msc-toggle-dot-disabled"></div>
    </div>
  </label>
      `}
      </Codeblock>

      <br />
      <h3>Address Type Toggle</h3>
      <div className="msc-component-container-row">
        <label htmlFor="toggleAddress" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleAddress"
              className="peer sr-only"
            />
            <div
              before="Residential"
              after="Commercial"
              className="msc-toggle-container-text-lg"
            ></div>
            <div
              before="Residential"
              after="Commercial"
              className="msc-toggle-dot-text-lg"
            ></div>
          </div>
        </label>
      </div>
      <Codeblock>
        {`
  <label for="toggleAddress" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleAddress"
        class="peer sr-only"/>
      <div
        before="Residential"
        after="Commercial"
        class="msc-toggle-container-text-lg"></div>
      <div
        before="Residential"
        after="Commercial"
        class="msc-toggle-dot-text-lg"></div>
    </div>
  </label>
      `}
      </Codeblock>
      <br />

      <h3>Units Toggle</h3>
      <div className="msc-component-container-row">
        <label htmlFor="unitToggle" className="msc-toggle">
          <div className="relative">
            <input type="checkbox" id="unitToggle" className="peer sr-only" />
            <div
              before="Decimal Inch"
              after="MM"
              className="msc-toggle-container-text-lg after:right-10"
            ></div>
            <div
              before="Decimal Inch"
              after="MM"
              className="msc-toggle-dot-text-lg after:right-6"
            ></div>
          </div>
        </label>
      </div>
      <Codeblock>
        {`
  <label for="unitToggle" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="unitToggle"
        class="peer sr-only"/>
      <div
        before="Decimal Inch"
        after="MM"
        class="msc-toggle-container-text-lg after:right-10"></div>
      <div
        before="Decimal Inch"
        after="MM"
        class="msc-toggle-dot-text-lg after:right-6"></div>
    </div>
  </label>
      `}
      </Codeblock>
      <br />

      <h3>Tolerance Toggle</h3>
      <div className="msc-component-container-row">
        <fieldset>
          <div className="msc-label-toggle-container">
            <p className="msc-label-triple-toggle">Tolerance</p>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-[#21212129] mr-3"
            />
            <div className="msc-triple-toggle-container">
              <span id="toleranceDot" className="msc-triple-toggle-dot"></span>
              <label
                htmlFor="allTolerance"
                className="msc-triple-toggle-input-label"
              >
                <input
                  type="radio"
                  id="allTolerance"
                  name="tolerance"
                  value="allTolerance"
                  className="peer sr-only"
                  defaultChecked
                />
                <span className="msc-triple-toggle-text">All</span>
              </label>
              <label htmlFor="plus" className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  id="plus"
                  name="tolerance"
                  value="plus"
                  className="peer sr-only"
                />
                <span className="msc-triple-toggle-text">Super</span>
              </label>
              <label htmlFor="minus" className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  id="minus"
                  name="tolerance"
                  value="minus"
                  className="peer sr-only"
                />
                <span className="msc-triple-toggle-text">Minus</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <Codeblock>
        {`
  <fieldset>
    <div class="msc-label-toggle-container">
      <p class="msc-label-triple-toggle">Tolerance</p>
      <img src="..." class="msc-toggle-icon" />
      <div class="msc-triple-toggle-container">
        <span id="toleranceDot" class="msc-triple-toggle-dot"></span>
        <label for="allTolerance" class="msc-triple-toggle-input-label"> 
          <input
            type="radio"
            id="allTolerance"
            name="tolerance"
            value="allTolerance"
            class="peer sr-only"
            checked
          /><span class="msc-triple-toggle-text">All</span>
        </label>
        <label for="plus" class="msc-triple-toggle-input-label">
          <input
            type="radio"
            id="plus"
            name="tolerance"
            value="plus"
            class="peer sr-only"
          />
          <span class="msc-triple-toggle-text">Super</span>
        </label>
        <label for="minus" class="msc-triple-toggle-input-label"
          ><input
            type="radio"
            id="minus"
            name="tolerance"
            value="minus"
            class="peer sr-only"
          /><span class="msc-triple-toggle-text">Minus</span>
        </label>
      </div>
    </div>
  </fieldset>

// JS
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      function updateSliderPosition(toggleContainer) {
        let slider = toggleContainer.querySelector(".msc-triple-toggle-dot");
        let checkedRadio = toggleContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioIndex = Array.from(
          checkedRadio.parentNode.parentNode.children
        ).indexOf(checkedRadio.parentNode);
        let positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        slider.className =
          "msc-triple-toggle-dot " + positions[radioIndex - 1];
      }
      document
        .querySelectorAll(".msc-triple-toggle-container")
        .forEach(function (toggleContainer) {
          toggleContainer
            .querySelectorAll(".msc-triple-toggle-input-label input")
            .forEach(function (radio) {
              radio.addEventListener("change", function () {
                updateSliderPosition(toggleContainer);
              });
            });
          updateSliderPosition(toggleContainer);
        });
    });
  </script>
      `}
      </Codeblock>
    </>
  );
};

export default TogglePage;
