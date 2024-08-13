import { Codeblock } from "../../components";

const CheckboxPage = () => {
  return (
    <>
      <small className="category-tag">Form</small>
      <h1>Checkbox</h1>

      <div className="msc-component-container-col">
        <div className="msc-checkbox-container">
          <input
            type="checkbox"
            id="checkbox-id"
            value="checkbox-value"
            className="msc-checkbox"
          />
          <label htmlFor="checkbox-id" className="msc-checkbox-label">
            Checkbox label
          </label>
        </div>
      </div>

      <Codeblock>
        {`
  <div class="msc-checkbox-container">
    <input
      type="checkbox"
      id="checkbox-id"
      value="checkbox-value"
      class="msc-checkbox"
    />
      <label for="checkbox-id" class="msc-checkbox-label">
        Checkbox label
      </label>
  </div>
          `}
      </Codeblock>
    </>
  );
};

export default CheckboxPage;
