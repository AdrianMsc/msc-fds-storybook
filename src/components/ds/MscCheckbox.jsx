import "../../styles/output.css";

const MscCheckbox = ({ label }) => {
  return (
    <div className="msc-checkbox-container">
      <input
        type="checkbox"
        id="checkbox-id"
        value="checkbox-value"
        className="msc-checkbox"
      />
      <label for="checkbox-id" className="msc-checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default MscCheckbox;
