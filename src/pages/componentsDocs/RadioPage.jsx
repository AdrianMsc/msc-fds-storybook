import { Codeblock } from "../../components";

const RadioPage = () => {
  return (
    <>
      <small className="category-tag">Form</small>
      <h1 className="mb-4">Radio</h1>

      <h3>Default</h3>
      <div className="msc-component-container-row">
        <div className="flex gap-2">
          <div className="msc-radio-container">
            <input
              id="radio-yes"
              type="radio"
              name="list-radio"
              className="msc-radio-label"
            />
            <label htmlFor="radio-yes" className="msc-radio-label">
              Yes
            </label>
          </div>

          <div className="msc-radio-container">
            <input
              id="radio-no"
              type="radio"
              name="list-radio"
              className="msc-radio-label"
            />
            <label htmlFor="radio-no" className="msc-radio-label">
              No
            </label>
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  // Yes
  <div class="msc-radio-container">
    <input id="radio-yes" type="radio" name="list-radio" class="msc-radio-label"/>
    <label for="radio-yes" class="msc-radio-label">
      Yes
    </label>
  </div>

  // No
  <div class="msc-radio-container">
    <input id="radio-no" type="radio" name="list-radio" class="msc-radio-label"/>
    <label for="radio-no" class="msc-radio-label">
      No
    </label>
  </div>
        `}
      </Codeblock>
      <br />

      <h3>Radio Button Set</h3>
      <div className="msc-component-container-row">
        <ul className="msc-radio-horizontal-main-container">
          <li className="msc-radio-horizontal-container">
            <div className="msc-input-horizontal-container">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="msc-input-horizontal"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="msc-input-horizontal-label"
              >
                Yes
              </label>
            </div>
          </li>
          <li className="msc-radio-horizontal-container">
            <div className="msc-input-horizontal-container">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="msc-input-horizontal"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="msc-input-horizontal-label"
              >
                No
              </label>
            </div>
          </li>
        </ul>
      </div>

      <Codeblock>
        {`
  <ul class="msc-radio-horizontal-main-container">
    <li class="msc-radio-horizontal-container">
      <div class="msc-input-horizontal-container">
        <input
          id="horizontal-list-radio-license"
          type="radio"
          value=""
          name="list-radio"
          class="msc-input-horizontal"/>
        <label
          for="horizontal-list-radio-license"
          class="msc-input-horizontal-label">
            Yes
        </label>
      </div>
    </li>
    <li class="msc-radio-horizontal-container">
      <div class="msc-input-horizontal-container">
        <input
          id="horizontal-list-radio-license"
          type="radio"
          value=""
          name="list-radio"
          class="msc-input-horizontal"/>
        <label
          for="horizontal-list-radio-license"
          class="msc-input-horizontal-label">
          No
        </label>
      </div>
    </li>
  </ul>
        `}
      </Codeblock>
      <br />
    </>
  );
};

export default RadioPage;
