import { Codeblock } from "../../components";

const InputPage = () => {
  return (
    <>
      <small className="category-tag">Form</small>
      <h1 className="mb-4">Input</h1>

      <div className="msc-component-container-row">
        <div className="msc-input-wrapper">
          <input
            id="default"
            type="text"
            placeholder="Default"
            className="msc-input peer"
          />
          <label for="default" className="msc-input-label">
            Default
            <span className="text-error-red">*</span>
          </label>
        </div>

        <div className="msc-input-wrapper">
          <input
            id="disabled"
            disabled
            type="text"
            placeholder="Default"
            className="msc-input peer"
          />
          <label for="disabled" className="msc-input-label">
            Default
            <span className="text-error-red">*</span>
          </label>
        </div>

        <div className="msc-input-wrapper">
          <input
            id="error-example"
            type="text"
            placeholder="Default"
            className="msc-input peer"
          />
          <label for="error-example" className="msc-input-label">
            Error Example
            <span className="text-error-red">*</span>
          </label>
          <small className="msc-error-message">This is a required field </small>
        </div>
      </div>
    </>
  );
};

export default InputPage;
