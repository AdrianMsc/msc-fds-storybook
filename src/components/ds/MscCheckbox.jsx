import "../../styles/output.css";

const MscCheckbox = ({ label }) => {
  return (
    <div class="msc-checkbox-container">
      <input
        type="checkbox"
        id="checkbox-id"
        value="checkbox-value"
        class="msc-checkbox"
      />
      <label for="checkbox-id" class="msc-checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default MscCheckbox;
