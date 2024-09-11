import "../../styles/output.css";

const MscRadio = ({ variant }) => {
  if (variant === "default") {
    return (
      <div class="flex gap-2">
        <div class="msc-radio-container">
          <input
            id="radio-yes"
            type="radio"
            name="list-radio"
            class="msc-radio-input"
          />
          <label for="radio-yes" class="msc-radio-label">
            Yes{" "}
          </label>
        </div>
        <div class="msc-radio-container">
          <input
            id="radio-no"
            type="radio"
            value=""
            name="list-radio"
            class="msc-radio-input"
          />
          <label for="radio-no" class="msc-radio-label">
            No{" "}
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <ul class="msc-radio-horizontal-main-container">
        <li class="msc-radio-horizontal-container">
          <div class="msc-input-horizontal-container">
            <input
              id="horizontal-list-radio-yes"
              type="radio"
              value=""
              name="list-radio"
              class="msc-input-horizontal"
            />
            <label
              for="horizontal-list-radio-yes"
              class="msc-input-horizontal-label"
            >
              Yes
            </label>
          </div>
        </li>
        <li class="msc-radio-horizontal-container">
          <div class="msc-input-horizontal-container">
            <input
              id="horizontal-list-radio-no"
              type="radio"
              value=""
              name="list-radio"
              class="msc-input-horizontal"
            />
            <label
              for="horizontal-list-radio-no"
              class="msc-input-horizontal-label"
            >
              No
            </label>
          </div>
        </li>
      </ul>
    );
  }
};

export default MscRadio;
