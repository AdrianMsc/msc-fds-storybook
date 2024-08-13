toggleSideNav = () => {
  const body = document.querySelector("body");
  const sidebar = document.querySelector("#msc-sidebar");
  body.classList.toggle("overflow-hidden");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("transform-none");
};

const sideNav = `
  <ul className="space-y-1 font-normal text-sm">
    <!-- GETTING STARTED -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Start Here</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-example" className="py-2 space-y-2">
        <li>
          <a
            href="component-status.html"
            className="flex items-center w-full px-2 text-gray-900 transition duration-75 rounded-lg pl-5 group hover:bg-gray-100"
          >
            Component Status
          </a>
        </li>
      </ul>
    </li>
    <!-- FOUNDATIONS  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-foundations"
        data-collapse-toggle="dropdown-foundations"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Foundations</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-foundations" className="py-2 space-y-2">
        <li>
          <a
            href="colors.html"
            className="flex items-center p-x2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Colors</span>
          </a>
        </li>

        <li>
          <a
            href="shadows.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Shadows</span>
          </a>
        </li>

        <li>
          <a
            href="typography.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Typography</span>
          </a>
        </li>

        <li>
          <a
            href="spacing.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Spacing</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- ACTION  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-action"
        data-collapse-toggle="dropdown-action"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Action</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-action" className="py-2 space-y-2">
        <li>
          <a
            href="buttons.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Buttons</span>
          </a>
        </li>
        <li>
          <a
            href="drop-down.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Drop Down</span>
          </a>
        </li>
        <li>
          <a
            href="filter.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Filter</span>
          </a>
        </li>
        <li>
          <a
            href="link.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Link</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- FORM -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-form"
        data-collapse-toggle="dropdown-form"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Form</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-form" className="py-2 space-y-2">
        <li>
          <a
            href="inputs.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Inputs</span>
          </a>
        </li>
        <li>
          <a
            href="toggle.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Toggle</span>
          </a>
        </li>
        <li>
          <a
            href="checkbox.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Checkbox</span>
          </a>
        </li>

        <li>
          <a
            href="radio.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Radio</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- INDICATOR  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-indicator"
        data-collapse-toggle="dropdown-indicator"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Indicator</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-indicator" className="py-2 space-y-2">
        <li>
          <a
            href="spinner.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Spinner</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- LAYOUT  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-layout"
        data-collapse-toggle="dropdown-layout"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Layout</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-layout" className="py-2 space-y-2">
        <li>
          <a
            href="dividers.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Dividers</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- NAVIGATION  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-overlay"
        data-collapse-toggle="dropdown-overlay"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Navigation</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-overlay" className="py-2 space-y-2">
        <li>
          <a
            href="alphabetical-pager.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Alphabetic Pager</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- OVERLAY  -->
    <li>
      <button
        type="button"
        className="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-overlay"
        data-collapse-toggle="dropdown-overlay"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Overlay</span
        >
        <img
          className="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-overlay" className="py-2 space-y-2">
        <li>
          <a
            href="modal.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Modal</span>
          </a>
        </li>

        <li>
          <a
            href="dialog.html"
            className="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span className="flex-1 ms-3 whitespace-nowrap">Dialog</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
`;

createPagesSidenav = () => {
  const isSidenav = document.getElementById("sidenav-menu");
  isSidenav ? (isSidenav.innerHTML = sideNav) : null;
};

createPagesSidenav();
