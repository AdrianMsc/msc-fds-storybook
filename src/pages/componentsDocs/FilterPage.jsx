import { Codeblock } from "../../components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterPage = () => {
  return (
    <>
      <small className="category-tag">Action</small>
      <h1 className="mb-4">Filter</h1>

      <div className="msc-component-container-row">
        <div className="msc-top-filters-section">
          <h4 className="msc-top-filters-title">Refine your search</h4>
          <div className="msc-top-filters-container">
            <button className="msc-top-filter group">
              <p>Drill Bit Material</p>
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:text-black"
              />
            </button>
            <button className="msc-top-filter group">
              <p>Drill Point Angle</p>
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:text-black"
              />
            </button>
            <button className="msc-top-filter group">
              <p>Coating/Finish</p>
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:text-black"
              />
            </button>
            <button className="msc-top-filter group">
              <p>Point Type</p>
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:text-black"
              />
            </button>
            <button className="msc-top-filter group">
              <p>Cutting Direction</p>
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:text-black"
              />
            </button>
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  <div class="msc-top-filters-section">
    <h4 class="msc-top-filters-title">Refine your search</h4>
    <div class="msc-top-filters-container">
      <button class="msc-top-filter group">
        <p>Drill Bit Material</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Drill Point Angle</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Coating/Finish</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Point Type</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Cutting Direction</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
    </div>
  </div>
        `}
      </Codeblock>
      <br />

      <h2>Active</h2>
      <div className="msc-component-container-row">
        <div className="msc-top-filters-section">
          <h4 className="msc-top-filters-title">Refine your search</h4>
          <div className="msc-top-filters-container">
            <button className="msc-top-filter">
              <p>Drill Bit Material</p>
              <span className="msc-top-filter-badge">3</span>
            </button>
            <button className="msc-top-filter">
              <p>Drill Point Angle</p>
              <span className="msc-top-filter-badge">3</span>
            </button>
            <button className="msc-top-filter">
              <p>Coating/Finish</p>
              <span className="msc-top-filter-badge">3</span>
            </button>
            <button className="msc-top-filter">
              <p>Point Type</p>
              <span className="msc-top-filter-badge">3</span>
            </button>
            <button className="msc-top-filter">
              <p>Cutting Direction</p>
              <span className="msc-top-filter-badge">3</span>
            </button>
          </div>
        </div>
      </div>

      <Codeblock>
        {`
  <div class="msc-top-filters-section">
    <h4 class="msc-top-filters-title">Refine your search</h4>
    <div class="msc-top-filters-container">
      <button class="msc-top-filter">
        <p>Drill Bit Material</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Drill Point Angle</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Coating/Finish</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Point Type</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Cutting Direction</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
    </div>
  </div>
        `}
      </Codeblock>
    </>
  );
};

export default FilterPage;
