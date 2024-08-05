import { NavLink } from "react-router-dom";
import { ComponentData } from "../data/componentsData";

const SidebarButton = () => {
  return ComponentData.map(({ category, components }) => (
    <li key={category}>
      <button className="sidebar-category-button">{category}</button>
      {components.map((comp) => (
        <NavLink
          to={`/docs/${comp.replace(/\s+/g, "-").toLowerCase()}`}
          className="sidebar-component-button"
          key={comp}
        >
          {comp}
        </NavLink>
      ))}
    </li>
  ));
};

export default SidebarButton;
